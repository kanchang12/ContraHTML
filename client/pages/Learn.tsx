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
  getStoredData,
} from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home, Lightbulb } from "lucide-react";
import type { LessonProgress } from "@/lib/storage";
import type { Lesson, LessonStep } from "@/lib/lessons";

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your lesson...</p>
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
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-70">
              <Home className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-900">CodeLearn</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <span className="text-sm font-medium text-gray-600">
                  Lesson {currentLessonIndex + 1} of {allLessons.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-full h-[calc(100vh-73px)] flex">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 flex flex-col bg-white lg:border-r border-gray-200 overflow-hidden">
          {/* Instructions Section */}
          <div className="flex-1 overflow-y-auto border-b lg:border-b-0 border-gray-200">
            <div className="p-6 space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {lesson.title}
                </h1>
                <p className="text-gray-600 mt-2">{lesson.description}</p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Progress
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    {currentStepIndex + 1}/{lesson.steps.length}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
                    style={{ width: `${stepCompletion}%` }}
                  ></div>
                </div>
              </div>

              {isLessonComplete ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <div className="text-2xl">🎉</div>
                    <div>
                      <h3 className="font-semibold text-green-900">
                        Lesson Complete!
                      </h3>
                      <p className="text-sm text-green-800 mt-1">
                        Great job! You've finished this lesson. Ready for the next
                        challenge?
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-900">
                        Step {currentStepIndex + 1}
                      </h3>
                      <p className="text-sm text-blue-800 mt-2">
                        {currentStep?.instruction}
                      </p>
                    </div>
                  </div>

                  {showHint && (
                    <div className="bg-blue-100 border-l-4 border-blue-600 p-3 rounded text-sm text-blue-900">
                      <strong>Hint:</strong> {currentStep?.hint}
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    {!showHint && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowHint(true)}
                        className="text-xs"
                      >
                        Show Hint
                      </Button>
                    )}
                    {isStepComplete() && (
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white text-xs"
                        onClick={handleNextStep}
                      >
                        ✓ Step Complete
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Code Editor Section */}
          <div className="flex-1 overflow-hidden border-t border-gray-200 flex flex-col">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="font-semibold text-gray-900 text-sm">
                Your HTML Code
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

        {/* Right Panel - Preview */}
        <div className="hidden lg:flex w-1/2 flex-col bg-gray-100 border-l border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-white border-b border-gray-200">
            <h2 className="font-semibold text-gray-900 text-sm">
              Your Creation
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
      background-color: #f9fafb;
      margin: 0;
      line-height: 1.6;
      color: #333;
    }
    h1 { color: #1f2937; font-size: 2em; margin-bottom: 0.5em; }
    h2 { color: #374151; font-size: 1.5em; margin-bottom: 0.5em; }
    p { margin-bottom: 1em; }
    ul, ol { margin-bottom: 1em; }
    img { max-width: 100%; height: auto; margin: 10px 0; }
    li { margin-bottom: 0.5em; }
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

      {/* Mobile Preview Modal */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-1/3 bg-white border-t border-gray-200 overflow-hidden z-30">
        <div className="px-6 py-4 bg-white border-b border-gray-200">
          <h2 className="font-semibold text-gray-900 text-sm">
            Your Creation
          </h2>
        </div>
        <div className="flex-1 overflow-auto">
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
      padding: 10px;
      background-color: #f9fafb;
      margin: 0;
      line-height: 1.6;
      color: #333;
      font-size: 14px;
    }
    h1 { color: #1f2937; font-size: 1.5em; margin: 0.25em 0; }
    h2 { color: #374151; font-size: 1.2em; margin: 0.25em 0; }
    p { margin-bottom: 0.5em; }
    ul, ol { margin-bottom: 0.5em; margin-left: 1.5em; }
    img { max-width: 100%; height: auto; margin: 5px 0; }
    li { margin-bottom: 0.25em; }
  </style>
</head>
<body>
${code}
</body>
</html>`}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="lg:hidden fixed bottom-1/3 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex gap-2 justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePreviousLesson}
          disabled={currentLessonIndex === 0}
          className="flex-1"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
        {isLessonComplete && currentLessonIndex < allLessons.length - 1 && (
          <Button
            size="sm"
            onClick={handleNextLesson}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600"
          >
            Next Lesson
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        )}
      </div>

      {/* Desktop Navigation - Bottom Right */}
      <div className="hidden lg:flex fixed bottom-6 right-6 gap-3 z-20">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePreviousLesson}
          disabled={currentLessonIndex === 0}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
        {isLessonComplete && currentLessonIndex < allLessons.length - 1 && (
          <Button
            size="sm"
            onClick={handleNextLesson}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
          >
            Next Lesson
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        )}
      </div>
    </div>
  );
}
