export interface LessonProgress {
  id: string;
  title: string;
  description: string;
  currentStep: number;
  totalSteps: number;
  userCode: string;
  completed: boolean;
  completedAt?: number;
  createdAt: number;
}

export interface StoredData {
  lessons: Record<string, LessonProgress>;
  currentLessonId: string | null;
  lastUpdated: number;
}

const STORAGE_KEY = "html-learning-progress";

export const getStoredData = (): StoredData => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return {
        lessons: {},
        currentLessonId: null,
        lastUpdated: Date.now(),
      };
    }
    return JSON.parse(data);
  } catch {
    return {
      lessons: {},
      currentLessonId: null,
      lastUpdated: Date.now(),
    };
  }
};

export const saveStoredData = (data: StoredData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save data to localStorage:", error);
  }
};

export const getLessonProgress = (lessonId: string): LessonProgress | null => {
  const data = getStoredData();
  return data.lessons[lessonId] || null;
};

export const saveLessonProgress = (lesson: LessonProgress): void => {
  const data = getStoredData();
  data.lessons[lesson.id] = lesson;
  data.lastUpdated = Date.now();
  saveStoredData(data);
};

export const setCurrentLesson = (lessonId: string): void => {
  const data = getStoredData();
  data.currentLessonId = lessonId;
  data.lastUpdated = Date.now();
  saveStoredData(data);
};

export const getCurrentLessonId = (): string | null => {
  const data = getStoredData();
  return data.currentLessonId;
};

export const getAllLessons = (): LessonProgress[] => {
  const data = getStoredData();
  return Object.values(data.lessons);
};

export const clearAllData = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
