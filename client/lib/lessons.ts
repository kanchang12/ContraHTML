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
    title: "My Bio Page",
    description: "Create your own bio page with a heading, photo, and about text",
    initialCode:
      "<h1></h1>\n<img src=\"\" alt=\"My photo\">\n<p></p>\n<p></p>",
    targetCode:
      "<h1>My Name</h1>\n<img src=\"https://via.placeholder.com/150\" alt=\"My photo\">\n<p>Hi! I am learning HTML coding.</p>\n<p>This is my bio page!</p>",
    steps: [
      {
        instruction:
          "Add a heading with your name. Type 'My Name' between the <h1> tags",
        hint: "Type between <h1> and </h1>",
        validation: (code) =>
          code.includes("My Name"),
      },
      {
        instruction:
          "Add an image. Put 'https://via.placeholder.com/150' in the src=\"\"",
        hint: "Replace the empty quotes in src=",
        validation: (code) =>
          code.includes("https://via.placeholder.com/150"),
      },
      {
        instruction:
          "Add your first paragraph. Type 'Hi! I am learning HTML coding.' in the first <p> tag",
        hint: "Type between the first <p> and </p>",
        validation: (code) =>
          code.includes("Hi! I am learning HTML coding"),
      },
      {
        instruction:
          "Add a second paragraph. Type 'This is my bio page!' in the second <p> tag",
        hint: "Type between the second <p> and </p>",
        validation: (code) =>
          code.includes("This is my bio page"),
      },
    ],
  },
  {
    id: "lesson-2",
    title: "Blog Post",
    description: "Learn text formatting by creating a blog post with bold and italic text",
    initialCode:
      "<h2></h2>\n<p>By <strong></strong> on Monday</p>\n<hr>\n<p>This is my blog post. I learned about <em></em> tags today. <strong></strong> are important!</p>",
    targetCode:
      "<h2>My First Blog Post</h2>\n<p>By <strong>Sam</strong> on Monday</p>\n<hr>\n<p>This is my blog post. I learned about <em>HTML</em> tags today. <strong>Tags</strong> are important!</p>",
    steps: [
      {
        instruction:
          "Add the blog post title 'My First Blog Post' in the <h2> tag",
        hint: "Type between <h2> and </h2>",
        validation: (code) =>
          code.includes("My First Blog Post"),
      },
      {
        instruction:
          "Add your name 'Sam' in the <strong> tag (after 'By ')",
        hint: "Type between the first <strong> and </strong>",
        validation: (code) =>
          code.match(/<strong>Sam<\/strong>.*on Monday/),
      },
      {
        instruction:
          "Add 'HTML' inside the <em> tag to make it italic",
        hint: "Type between <em> and </em>",
        validation: (code) =>
          code.includes("<em>HTML</em>"),
      },
      {
        instruction:
          "Add 'Tags' in the last <strong> tag to make it bold",
        hint: "Type between the second <strong> and </strong>",
        validation: (code) =>
          code.includes("<strong>Tags</strong>"),
      },
    ],
  },
  {
    id: "lesson-3",
    title: "Shopping List",
    description: "Learn about lists by creating a shopping list with priorities",
    initialCode:
      "<h1>My Shopping List</h1>\n<h2>Important Items</h2>\n<ul>\n  <li></li>\n  <li></li>\n</ul>\n<h2>Regular Items</h2>\n<ol>\n  <li></li>\n  <li></li>\n</ol>",
    targetCode:
      "<h1>My Shopping List</h1>\n<h2>Important Items</h2>\n<ul>\n  <li>Milk</li>\n  <li>Bread</li>\n</ul>\n<h2>Regular Items</h2>\n<ol>\n  <li>Apples</li>\n  <li>Cheese</li>\n</ol>",
    steps: [
      {
        instruction:
          "Add 'Milk' to the first important item in the unordered list (first <li> under Important Items)",
        hint: "Type between the first <li> and </li> under Important Items",
        validation: (code) =>
          code.includes("Milk"),
      },
      {
        instruction:
          "Add 'Bread' to the second important item",
        hint: "Type in the second <li> under Important Items",
        validation: (code) =>
          code.includes("Bread"),
      },
      {
        instruction:
          "Add 'Apples' to the first regular item in the ordered list",
        hint: "Type in the first <li> under Regular Items",
        validation: (code) =>
          code.includes("Apples"),
      },
      {
        instruction:
          "Add 'Cheese' to the second regular item",
        hint: "Type in the second <li> under Regular Items",
        validation: (code) =>
          code.includes("Cheese"),
      },
    ],
  },
  {
    id: "lesson-4",
    title: "Contact Form",
    description: "Learn about forms by creating a contact form with input fields",
    initialCode:
      "<h1>Contact Me</h1>\n<form>\n  <label>Name:</label>\n  <input type=\"text\" placeholder=\"\">\n  <br><br>\n  <label>Email:</label>\n  <input type=\"email\" placeholder=\"\">\n  <br><br>\n  <label>Message:</label>\n  <textarea placeholder=\"\"></textarea>\n  <br><br>\n  <button></button>\n</form>",
    targetCode:
      "<h1>Contact Me</h1>\n<form>\n  <label>Name:</label>\n  <input type=\"text\" placeholder=\"Your name\">\n  <br><br>\n  <label>Email:</label>\n  <input type=\"email\" placeholder=\"your@email.com\">\n  <br><br>\n  <label>Message:</label>\n  <textarea placeholder=\"Write your message\"></textarea>\n  <br><br>\n  <button>Send</button>\n</form>",
    steps: [
      {
        instruction:
          'Add placeholder text \"Your name\" to the first input field',
        hint: "Add placeholder=\"Your name\" to the first input",
        validation: (code) =>
          code.includes('placeholder="Your name"'),
      },
      {
        instruction:
          'Add placeholder text \"your@email.com\" to the email field',
        hint: "Add placeholder=\"your@email.com\" to the email input",
        validation: (code) =>
          code.includes('placeholder="your@email.com"'),
      },
      {
        instruction:
          'Add placeholder text \"Write your message\" to the textarea',
        hint: "Add placeholder=\"Write your message\" to textarea",
        validation: (code) =>
          code.includes('placeholder="Write your message"'),
      },
      {
        instruction:
          "Add button text 'Send' inside the <button> tag",
        hint: "Type between <button> and </button>",
        validation: (code) =>
          code.includes("<button>Send</button>"),
      },
    ],
  },
  {
    id: "lesson-5",
    title: "Photo Gallery",
    description: "Learn layout by creating a photo gallery with multiple images",
    initialCode:
      "<h1>My Photo Gallery</h1>\n<div style=\"background-color: lightblue; padding: 10px;\">\n  <img src=\"\" alt=\"Photo 1\" style=\"width: 100px; margin: 5px;\">\n  <img src=\"\" alt=\"Photo 2\" style=\"width: 100px; margin: 5px;\">\n  <img src=\"\" alt=\"Photo 3\" style=\"width: 100px; margin: 5px;\">\n</div>",
    targetCode:
      "<h1>My Photo Gallery</h1>\n<div style=\"background-color: lightblue; padding: 10px;\">\n  <img src=\"https://via.placeholder.com/100\" alt=\"Photo 1\" style=\"width: 100px; margin: 5px;\">\n  <img src=\"https://via.placeholder.com/100\" alt=\"Photo 2\" style=\"width: 100px; margin: 5px;\">\n  <img src=\"https://via.placeholder.com/100\" alt=\"Photo 3\" style=\"width: 100px; margin: 5px;\">\n</div>",
    steps: [
      {
        instruction:
          "Add the image URL 'https://via.placeholder.com/100' to the first photo",
        hint: "Add the URL to the first img src=",
        validation: (code) => {
          const matches = code.match(/src="https:\/\/via\.placeholder\.com\/100"/g);
          return matches && matches.length >= 1;
        },
      },
      {
        instruction:
          "Add the same image URL to the second photo",
        hint: "Add the URL to the second img src=",
        validation: (code) => {
          const matches = code.match(/src="https:\/\/via\.placeholder\.com\/100"/g);
          return matches && matches.length >= 2;
        },
      },
      {
        instruction:
          "Add the same image URL to the third photo",
        hint: "Add the URL to the third img src=",
        validation: (code) => {
          const matches = code.match(/src="https:\/\/via\.placeholder\.com\/100"/g);
          return matches && matches.length >= 3;
        },
      },
    ],
  },
  {
    id: "lesson-6",
    title: "Recipe Card",
    description: "Learn tables by creating a recipe card with ingredients",
    initialCode:
      "<h1>Pizza Recipe</h1>\n<table border=\"1\" style=\"padding: 10px;\">\n  <tr>\n    <th>Ingredient</th>\n    <th>Amount</th>\n  </tr>\n  <tr>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td></td>\n    <td></td>\n  </tr>\n</table>",
    targetCode:
      "<h1>Pizza Recipe</h1>\n<table border=\"1\" style=\"padding: 10px;\">\n  <tr>\n    <th>Ingredient</th>\n    <th>Amount</th>\n  </tr>\n  <tr>\n    <td>Flour</td>\n    <td>2 cups</td>\n  </tr>\n  <tr>\n    <td>Cheese</td>\n    <td>1 cup</td>\n  </tr>\n  <tr>\n    <td>Tomato Sauce</td>\n    <td>1 cup</td>\n  </tr>\n</table>",
    steps: [
      {
        instruction:
          "Add 'Flour' as the first ingredient and '2 cups' as the amount",
        hint: "Type in the first <td> of the first data row",
        validation: (code) =>
          code.includes("Flour"),
      },
      {
        instruction:
          "Add '2 cups' as the amount for Flour",
        hint: "Type in the second <td> of the first row",
        validation: (code) =>
          code.includes("2 cups"),
      },
      {
        instruction:
          "Add 'Cheese' as the second ingredient",
        hint: "Type in the first <td> of the second row",
        validation: (code) =>
          code.includes("Cheese"),
      },
      {
        instruction:
          "Add '1 cup' as the amount for Cheese",
        hint: "Type in the second <td> of the second row",
        validation: (code) =>
          code.includes("1 cup"),
      },
      {
        instruction:
          "Add 'Tomato Sauce' as the third ingredient",
        hint: "Type in the first <td> of the third row",
        validation: (code) =>
          code.includes("Tomato Sauce"),
      },
      {
        instruction:
          "Add '1 cup' as the amount for Tomato Sauce",
        hint: "Type in the second <td> of the third row",
        validation: (code) => {
          const matches = code.match(/1 cup/g);
          return matches && matches.length >= 2;
        },
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
