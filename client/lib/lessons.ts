import { LessonProgress } from "./storage";

export interface Lesson {
  id: string;
  title: string;
  description: string;
  steps: LessonStep[];
  initialCode: string;
  targetCode: string;
}

export interface LessonStep {
  instruction: string;
  hint: string;
  validation?: (code: string) => boolean;
}

const LESSONS: Lesson[] = [
  {
    id: "lesson-1",
    title: "Welcome to HTML!",
    description: "Learn the basics of HTML by creating your first webpage",
    initialCode: "<h1></h1>",
    targetCode: "<h1>Hello World!</h1>",
    steps: [
      {
        instruction:
          "Let's add text to our heading! Type 'Hello World!' between the opening <h1> and closing </h1> tags.",
        hint: "The text should go between > and <",
        validation: (code) =>
          code.includes("Hello") && code.includes("World"),
      },
    ],
  },
  {
    id: "lesson-2",
    title: "Multiple Paragraphs",
    description: "Learn to use paragraph tags",
    initialCode:
      "<h1>My Page</h1>\n<p></p>\n<p></p>",
    targetCode:
      "<h1>My Page</h1>\n<p>This is my first paragraph.</p>\n<p>This is my second paragraph.</p>",
    steps: [
      {
        instruction:
          "Add text to the first paragraph: 'This is my first paragraph.'",
        hint: "Click between the first <p> and </p> tags",
        validation: (code) =>
          code.includes("This is my first paragraph"),
      },
      {
        instruction:
          "Add text to the second paragraph: 'This is my second paragraph.'",
        hint: "Click between the second <p> and </p> tags",
        validation: (code) =>
          code.includes("This is my second paragraph"),
      },
    ],
  },
  {
    id: "lesson-3",
    title: "Let's Add Color!",
    description: "Learn to use inline styles with HTML",
    initialCode:
      '<h1 style="color: blue;">My Colorful Page</h1>\n<p style="color: green;">Green text</p>',
    targetCode:
      '<h1 style="color: red;">My Colorful Page</h1>\n<p style="color: purple;">Purple text</p>',
    steps: [
      {
        instruction:
          'Change the heading color from blue to red. Find color: blue and change blue to red',
        hint: "Look for the word 'blue' in the first line",
        validation: (code) =>
          code.includes('color: red') &&
          code.includes("<h1"),
      },
      {
        instruction:
          'Change the paragraph color from green to purple. Find color: green and change it to purple',
        hint: "Look for the word 'green' in the second line",
        validation: (code) =>
          code.includes("color: purple") &&
          code.includes("<p"),
      },
    ],
  },
  {
    id: "lesson-4",
    title: "Create a List",
    description: "Learn about list tags",
    initialCode:
      "<h1>My Favorite Things</h1>\n<ul>\n  <li></li>\n  <li></li>\n  <li></li>\n</ul>",
    targetCode:
      "<h1>My Favorite Things</h1>\n<ul>\n  <li>Pizza</li>\n  <li>Ice Cream</li>\n  <li>Playing Outside</li>\n</ul>",
    steps: [
      {
        instruction: "Add your favorite food to the first list item",
        hint: "Type 'Pizza' between the first <li> and </li>",
        validation: (code) => code.includes("Pizza"),
      },
      {
        instruction: "Add a favorite dessert to the second list item",
        hint: "Type 'Ice Cream' between the second <li> and </li>",
        validation: (code) => code.includes("Ice Cream"),
      },
      {
        instruction: "Add a favorite activity to the third list item",
        hint: "Type 'Playing Outside' between the third <li> and </li>",
        validation: (code) => code.includes("Playing Outside"),
      },
    ],
  },
  {
    id: "lesson-5",
    title: "Add an Image",
    description: "Learn about image tags",
    initialCode:
      '<h1>My Picture</h1>\n<img src="" alt="A happy face">',
    targetCode:
      '<h1>My Picture</h1>\n<img src="https://via.placeholder.com/200" alt="A happy face">',
    steps: [
      {
        instruction:
          'Add an image URL. Replace the empty src="" with src="https://via.placeholder.com/200"',
        hint: "You need to add the URL between the quotes in src=",
        validation: (code) =>
          code.includes("https://via.placeholder.com/200"),
      },
    ],
  },
];

export const getLesson = (lessonId: string): Lesson | undefined => {
  return LESSONS.find((l) => l.id === lessonId);
};

export const getAllAvailableLessons = (): Lesson[] => {
  return LESSONS;
};

export const getNextLesson = (currentLessonId: string): Lesson | undefined => {
  const currentIndex = LESSONS.findIndex((l) => l.id === currentLessonId);
  if (currentIndex < LESSONS.length - 1) {
    return LESSONS[currentIndex + 1];
  }
  return undefined;
};

export const initializeLessonProgress = (
  lesson: Lesson,
): LessonProgress => {
  return {
    id: lesson.id,
    title: lesson.title,
    description: lesson.description,
    currentStep: 0,
    totalSteps: lesson.steps.length,
    userCode: lesson.initialCode,
    completed: false,
    createdAt: Date.now(),
  };
};
