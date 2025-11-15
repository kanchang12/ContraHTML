import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getLesson,
  getAllAvailableLessons,
  getNextLesson,
  initializeLessonProgress,
} from "@/lib/lessons";
import {
  getLessonProgress,
  saveLessonProgress,
  setCurrentLesson,
  getCurrentLessonId,
} from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import type { LessonProgress } from "@/lib/storage";
import type { Lesson, LessonStep } from "@/lib/lessons";

const DUCK_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets%2F6383f97492d4498fb140746bb5dc13c8%2Fc88ba0d9380648349ffa20411291a104?format=webp&width=800";

export default function Learn() {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [progress, setProgress] = useState<LessonProgress | null>(null);
  const [code, setCode] = useState("");
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [allLessons] = useState(getAllAvailableLessons());
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Initialize on mount
  useEffect(() => {
    initializeLesson();
  }, []);

  const initializeLesson = () => {
    const currentLessonId = getCurrentLessonId();
    let lessonToLoad = currentLessonId
      ? getLesson(currentLessonId)
      : allLessons[0];

    if (!lessonToLoad) {
      lessonToLoad = allLessons[0];
    }

    const lessonIndex = allLessons.findIndex((l) => l.id === lessonToLoad!.id);
    setCurrentLessonIndex(lessonIndex);

    const savedProgress = getLessonProgress(lessonToLoad.id);
    let lessonProgress = savedProgress;

    if (!lessonProgress) {
      lessonProgress = initializeLessonProgress(lessonToLoad);
      saveLessonProgress(lessonProgress);
    }

    setLesson(lessonToLoad);
    setProgress(lessonProgress);
    setCode(lessonProgress.userCode);
    setCurrentStepIndex(lessonProgress.currentStep);
    setShowHint(false);
    setCurrentLesson(lessonToLoad.id);
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);

    if (progress) {
      const updated: LessonProgress = {
        ...progress,
        userCode: newCode,
      };
      setProgress(updated);
      saveLessonProgress(updated);
    }
  };

  const currentStep = lesson?.steps[currentStepIndex] as LessonStep | undefined;

  const isStepComplete = (): boolean => {
    if (!currentStep || !currentStep.validation) return false;
    return currentStep.validation(code);
  };

  const handleNextStep = () => {
    if (!lesson || !progress) return;

    if (currentStepIndex < lesson.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      setShowHint(false);
      const updated: LessonProgress = {
        ...progress,
        currentStep: currentStepIndex + 1,
      };
      setProgress(updated);
      saveLessonProgress(updated);
    } else {
      // Lesson completed
      const updated: LessonProgress = {
        ...progress,
        completed: true,
        currentStep: lesson.steps.length,
        completedAt: Date.now(),
      };
      setProgress(updated);
      saveLessonProgress(updated);
    }
  };

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      const previousLesson = allLessons[currentLessonIndex - 1];
      setCurrentLesson(previousLesson.id);
      setLesson(previousLesson);
      setCurrentLessonIndex(currentLessonIndex - 1);

      const savedProgress = getLessonProgress(previousLesson.id);
      if (savedProgress) {
        setProgress(savedProgress);
        setCode(savedProgress.userCode);
        setCurrentStepIndex(savedProgress.currentStep);
      } else {
        const newProgress = initializeLessonProgress(previousLesson);
        setProgress(newProgress);
        setCode(newProgress.userCode);
        setCurrentStepIndex(0);
        saveLessonProgress(newProgress);
      }
      setShowHint(false);
    }
  };

  const handleNextLesson = () => {
    if (currentLessonIndex < allLessons.length - 1) {
      const nextLesson = allLessons[currentLessonIndex + 1];
      setCurrentLesson(nextLesson.id);
      setLesson(nextLesson);
      setCurrentLessonIndex(currentLessonIndex + 1);

      const savedProgress = getLessonProgress(nextLesson.id);
      if (savedProgress) {
        setProgress(savedProgress);
        setCode(savedProgress.userCode);
        setCurrentStepIndex(savedProgress.currentStep);
      } else {
        const newProgress = initializeLessonProgress(nextLesson);
        setProgress(newProgress);
        setCode(newProgress.userCode);
        setCurrentStepIndex(0);
        saveLessonProgress(newProgress);
      }
      setShowHint(false);
    }
  };

  if (!lesson || !progress) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-300 to-sky-200">
        <div className="text-center space-y-4">
          <img
            src={DUCK_IMAGE}
            alt="iQuack"
            className="w-24 h-24 mx-auto animate-bounce"
          />
          <p className="text-gray-700 font-bold text-lg">
            iQuack is loading your lesson... 🦆
          </p>
        </div>
      </div>
    );
  }

  const stepCompletion =
    ((currentStepIndex + 1) / lesson.steps.length) * 100;
  const isLessonComplete = progress.completed;
  const canGoNext =
    currentStepIndex === lesson.steps.length - 1 && isStepComplete();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-sky-100 to-purple-100 flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b-4 border-purple-400 z-40 shadow-lg flex-shrink-0">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-70">
              <img
                src={DUCK_IMAGE}
                alt="iQuack"
                className="w-8 h-8 animate-wiggle"
              />
              <span className="font-black text-xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                iQuack
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-gray-700">
                Lesson {currentLessonIndex + 1} of {allLessons.length}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row gap-0 overflow-hidden">
        {/* Left Panel - Instructions and Editor */}
        <div className="w-full lg:w-1/2 flex flex-col bg-white/90 lg:border-r-4 border-yellow-300 overflow-hidden">
          {/* Instructions Section */}
          <div className="flex-1 overflow-y-auto border-b-4 lg:border-b-0 border-yellow-300 pb-4 lg:pb-0">
            <div className="p-6 space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-gray-800">
                  {lesson.title}
                </h1>
                <p className="text-gray-700 mt-2 font-semibold">
                  {lesson.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2 bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-2xl border-4 border-purple-300">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-800">
                    Your Progress
                  </span>
                  <span className="text-lg font-black text-purple-600">
                    {currentStepIndex + 1}/{lesson.steps.length}
                  </span>
                </div>
                <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden border-2 border-gray-400">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 transition-all duration-300"
                    style={{ width: `${stepCompletion}%` }}
                  ></div>
                </div>
              </div>

              {isLessonComplete ? (
                <div className="bg-gradient-to-br from-green-200 to-emerald-100 border-4 border-green-500 rounded-2xl p-6 text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="font-black text-green-800 text-2xl mb-2">
                    You're Awesome!
                  </h3>
                  <p className="text-green-700 font-bold text-lg">
                    You completed "{lesson.title}"! iQuack is so proud of you! 🦆
                  </p>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-blue-100 to-sky-100 border-4 border-blue-400 rounded-2xl p-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl flex-shrink-0">🎯</span>
                    <div className="flex-1">
                      <h3 className="font-black text-blue-900 text-lg">
                        Step {currentStepIndex + 1}
                      </h3>
                      <p className="text-blue-800 font-bold mt-2 text-base leading-relaxed">
                        {currentStep?.instruction}
                      </p>
                    </div>
                  </div>

                  {showHint && (
                    <div className="bg-yellow-200 border-l-4 border-yellow-600 p-3 rounded-lg text-blue-900 font-bold">
                      💡 {currentStep?.hint}
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    {!showHint && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowHint(true)}
                        className="flex-1 text-xs font-bold border-2"
                      >
                        Need a Hint? 💡
                      </Button>
                    )}
                    {isStepComplete() && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg text-white font-black text-xs"
                        onClick={handleNextStep}
                      >
                        ✓ Great Job!
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Code Editor Section */}
          <div className="flex-1 overflow-hidden border-t-4 border-yellow-300 flex flex-col bg-gradient-to-b from-gray-50 to-white">
            <div className="px-6 py-4 bg-gradient-to-r from-purple-400 to-pink-400 border-b-4 border-purple-500 flex-shrink-0">
              <h2 className="font-black text-white text-base">
                ✏️ Your HTML Code
              </h2>
            </div>
            <textarea
              value={code}
              onChange={(e) => handleCodeChange(e.target.value)}
              className="flex-1 p-4 font-mono text-sm bg-white text-gray-900 border-none outline-none resize-none"
              placeholder="Write your HTML code here..."
              spellCheck="false"
            />
          </div>
        </div>

        {/* Right Panel - Preview (Desktop Only) */}
        <div className="hidden lg:flex w-1/2 flex-col bg-white border-l-4 border-purple-400 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-orange-400 to-yellow-300 border-b-4 border-orange-500 flex-shrink-0">
            <h2 className="font-black text-white text-base">
              🎨 Your Creation
            </h2>
          </div>
          <div className="flex-1 overflow-auto bg-white">
            <iframe
              key={code}
              title="preview"
              sandbox=""
              className="w-full h-full border-none"
              srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #fde68a 0%, #fca5a5 100%);
      margin: 0;
      line-height: 1.8;
      color: #333;
    }
    h1 { color: #7c3aed; font-size: 2.5em; margin-bottom: 0.5em; text-shadow: 2px 2px 4px rgba(0,0,0,0.1); }
    h2 { color: #db2777; font-size: 1.8em; margin-bottom: 0.5em; }
    p { margin-bottom: 1em; font-size: 1.1em; }
    ul, ol { margin-bottom: 1em; }
    img { max-width: 100%; height: auto; margin: 15px 0; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    li { margin-bottom: 0.8em; font-size: 1.1em; }
    form { max-width: 400px; }
    label { display: block; font-weight: bold; margin-top: 10px; margin-bottom: 5px; }
    input, textarea { display: block; width: 100%; padding: 8px; margin-bottom: 10px; border: 2px solid #7c3aed; border-radius: 5px; font-size: 1em; }
    button { background-color: #7c3aed; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; font-size: 1em; }
    button:hover { background-color: #6d28d9; }
    table { border-collapse: collapse; width: 100%; margin: 20px 0; }
    th, td { border: 2px solid #db2777; padding: 10px; text-align: left; }
    th { background-color: #db2777; color: white; }
    div { padding: 10px; }
  </style>
</head>
<body>
${code}
</body>
</html>`}
            />
          </div>
        </div>
      </div>

      {/* Mobile Preview */}
      <div className="lg:hidden bg-white border-t-4 border-orange-400 p-4 max-h-64 overflow-auto">
        <div className="mb-2 font-black text-orange-600">🎨 Preview</div>
        <iframe
          key={code}
          title="preview"
          sandbox=""
          className="w-full border-2 border-orange-300 rounded"
          style={{ height: "200px" }}
          srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 10px;
      background: linear-gradient(135deg, #fde68a 0%, #fca5a5 100%);
      margin: 0;
      line-height: 1.6;
      color: #333;
      font-size: 14px;
    }
    h1 { color: #7c3aed; font-size: 1.5em; margin: 0.25em 0; }
    h2 { color: #db2777; font-size: 1.2em; margin: 0.25em 0; }
    p { margin-bottom: 0.5em; }
    ul, ol { margin-bottom: 0.5em; margin-left: 1.5em; }
    img { max-width: 100%; height: auto; margin: 5px 0; border-radius: 5px; }
    li { margin-bottom: 0.25em; }
    label { display: block; font-weight: bold; margin-top: 5px; margin-bottom: 3px; }
    input, textarea { display: block; width: 100%; padding: 5px; margin-bottom: 5px; border: 1px solid #7c3aed; border-radius: 3px; font-size: 0.9em; box-sizing: border-box; }
    button { background-color: #7c3aed; color: white; padding: 5px 10px; border: none; border-radius: 3px; font-weight: bold; cursor: pointer; font-size: 0.9em; }
    table { border-collapse: collapse; width: 100%; margin: 10px 0; font-size: 0.9em; }
    th, td { border: 1px solid #db2777; padding: 5px; text-align: left; }
    th { background-color: #db2777; color: white; }
  </style>
</head>
<body>
${code}
</body>
</html>`}
        />
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t-4 border-purple-400 px-4 py-4 flex gap-2 justify-between items-center flex-shrink-0 shadow-lg">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePreviousLesson}
          disabled={currentLessonIndex === 0}
          className="font-bold border-2"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </Button>

        <div className="hidden sm:block text-center">
          <p className="text-xs font-bold text-gray-600">
            Lesson {currentLessonIndex + 1} of {allLessons.length}
          </p>
        </div>

        <Button
          size="sm"
          onClick={handleNextLesson}
          disabled={!isLessonComplete || currentLessonIndex >= allLessons.length - 1}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold"
        >
          Next Website 🦆
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
