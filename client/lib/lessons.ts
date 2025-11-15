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
        validation: (code) => code.includes("Hello") && code.includes("World"),
      },
    ],
  },
  {
    id: "lesson-2",
    title: "Multiple Paragraphs",
    description: "Learn to use paragraph tags",
    initialCode: "<h1>My Page</h1>\n<p></p>\n<p></p>",
    targetCode:
      "<h1>My Page</h1>\n<p>This is my first paragraph.</p>\n<p>This is my second paragraph.</p>",
    steps: [
      {
        instruction:
          "Add text to the first paragraph: 'This is my first paragraph.'",
        hint: "Click between the first <p> and </p> tags",
        validation: (code) => code.includes("This is my first paragraph"),
      },
      {
        instruction:
          "Add text to the second paragraph: 'This is my second paragraph.'",
        hint: "Click between the second <p> and </p> tags",
        validation: (code) => code.includes("This is my second paragraph"),
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
          "Change the heading color from blue to red. Find color: blue and change blue to red",
        hint: "Look for the word 'blue' in the first line",
        validation: (code) =>
          code.includes("color: red") && code.includes("<h1"),
      },
      {
        instruction:
          "Change the paragraph color from green to purple. Find color: green and change it to purple",
        hint: "Look for the word 'green' in the second line",
        validation: (code) =>
          code.includes("color: purple") && code.includes("<p"),
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
    initialCode: '<h1>My Picture</h1>\n<img src="" alt="A happy face">',
    targetCode:
      '<h1>My Picture</h1>\n<img src="https://via.placeholder.com/200" alt="A happy face">',
    steps: [
      {
        instruction:
          'Add an image URL. Replace the empty src="" with src="https://via.placeholder.com/200"',
        hint: "You need to add the URL between the quotes in src=",
        validation: (code) => code.includes("https://via.placeholder.com/200"),
      },
    ],
  },
  {
    id: "lesson-6",
    title: "Headings Level 2",
    description: "Learn different heading sizes",
    initialCode: "<h2></h2>",
    targetCode: "<h2>This is a Heading 2</h2>",
    steps: [
      {
        instruction: "Add text 'This is a Heading 2' to the h2 tag",
        hint: "Type between <h2> and </h2>",
        validation: (code) => code.includes("This is a Heading 2"),
      },
    ],
  },
  {
    id: "lesson-7",
    title: "Heading Level 3",
    description: "Learn h3 tags",
    initialCode: "<h3></h3>",
    targetCode: "<h3>This is a Heading 3</h3>",
    steps: [
      {
        instruction: "Add text 'This is a Heading 3' to the h3 tag",
        hint: "Type between <h3> and </h3>",
        validation: (code) => code.includes("This is a Heading 3"),
      },
    ],
  },
  {
    id: "lesson-8",
    title: "Bold Text",
    description: "Make text bold with strong tag",
    initialCode: "<p>This is <strong></strong> text</p>",
    targetCode: "<p>This is <strong>bold</strong> text</p>",
    steps: [
      {
        instruction: "Add the word 'bold' inside the <strong> tags",
        hint: "Type between <strong> and </strong>",
        validation: (code) => code.includes("<strong>bold</strong>"),
      },
    ],
  },
  {
    id: "lesson-9",
    title: "Italic Text",
    description: "Make text italic with em tag",
    initialCode: "<p>This is <em></em> text</p>",
    targetCode: "<p>This is <em>italic</em> text</p>",
    steps: [
      {
        instruction: "Add the word 'italic' inside the <em> tags",
        hint: "Type between <em> and </em>",
        validation: (code) => code.includes("<em>italic</em>"),
      },
    ],
  },
  {
    id: "lesson-10",
    title: "Links",
    description: "Learn to create clickable links",
    initialCode: '<a href="">Click here</a>',
    targetCode: '<a href="https://www.google.com">Click here</a>',
    steps: [
      {
        instruction:
          'Add a website URL to the link. Put "https://www.google.com" in the href=""',
        hint: "Replace the empty quotes with a URL",
        validation: (code) => code.includes("https://www.google.com"),
      },
    ],
  },
  {
    id: "lesson-11",
    title: "Ordered List",
    description: "Learn numbered lists",
    initialCode: "<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>",
    targetCode: "<ol>\n  <li>First Step</li>\n  <li>Second Step</li>\n</ol>",
    steps: [
      {
        instruction: 'Change "First" to "First Step"',
        hint: "Find the first <li>",
        validation: (code) => code.includes("First Step"),
      },
      {
        instruction: 'Change "Second" to "Second Step"',
        hint: "Find the second <li>",
        validation: (code) => code.includes("Second Step"),
      },
    ],
  },
  {
    id: "lesson-12",
    title: "Change Background Color",
    description: "Learn to style the background",
    initialCode: '<div style="background-color: yellow;">Hello!</div>',
    targetCode: '<div style="background-color: lightblue;">Hello!</div>',
    steps: [
      {
        instruction: "Change the background color from yellow to lightblue",
        hint: "Find background-color: yellow and change it",
        validation: (code) => code.includes("background-color: lightblue"),
      },
    ],
  },
  {
    id: "lesson-13",
    title: "Paragraph with Line Break",
    description: "Learn the br tag",
    initialCode: "<p>Line 1<br>Line 2</p>",
    targetCode: "<p>Line 1<br>Line 2</p>",
    steps: [
      {
        instruction: "You did it! The <br> tag creates line breaks",
        hint: "Just read the code",
        validation: (code) => code.includes("<br>"),
      },
    ],
  },
  {
    id: "lesson-14",
    title: "Horizontal Line",
    description: "Learn the hr tag",
    initialCode: "<h1>Title</h1>\n<hr>\n<p>Content</p>",
    targetCode: "<h1>Title</h1>\n<hr>\n<p>Content</p>",
    steps: [
      {
        instruction: "See how the <hr> tag creates a line?",
        hint: "Just read the code",
        validation: (code) => code.includes("<hr>"),
      },
    ],
  },
  {
    id: "lesson-15",
    title: "Text Size with Font Size",
    description: "Learn to change text size",
    initialCode: '<p style="font-size: 16px;">Normal text</p>',
    targetCode: '<p style="font-size: 32px;">Normal text</p>',
    steps: [
      {
        instruction: "Make the text bigger! Change font-size from 16px to 32px",
        hint: "Find font-size: 16px",
        validation: (code) => code.includes("font-size: 32px"),
      },
    ],
  },
  {
    id: "lesson-16",
    title: "Even Bigger Text",
    description: "Make text really big",
    initialCode: '<p style="font-size: 20px;">Make me big!</p>',
    targetCode: '<p style="font-size: 48px;">Make me big!</p>',
    steps: [
      {
        instruction: "Change font-size from 20px to 48px to make it huge!",
        hint: "Find 20px and replace with 48px",
        validation: (code) => code.includes("font-size: 48px"),
      },
    ],
  },
  {
    id: "lesson-17",
    title: "Text Alignment",
    description: "Learn to align text",
    initialCode: '<p style="text-align: left;">Left aligned</p>',
    targetCode: '<p style="text-align: center;">Left aligned</p>',
    steps: [
      {
        instruction: "Change text-align from left to center",
        hint: "Find text-align: left",
        validation: (code) => code.includes("text-align: center"),
      },
    ],
  },
  {
    id: "lesson-18",
    title: "Right Alignment",
    description: "Align text to the right",
    initialCode: '<p style="text-align: center;">Center me</p>',
    targetCode: '<p style="text-align: right;">Center me</p>',
    steps: [
      {
        instruction: "Change text-align from center to right",
        hint: "Find center and replace it",
        validation: (code) => code.includes("text-align: right"),
      },
    ],
  },
  {
    id: "lesson-19",
    title: "Add Spacing with Padding",
    description: "Learn padding for inside spacing",
    initialCode:
      '<div style="background-color: pink; padding: 10px;">Text</div>',
    targetCode:
      '<div style="background-color: pink; padding: 30px;">Text</div>',
    steps: [
      {
        instruction:
          "Increase the padding from 10px to 30px for more space inside",
        hint: "Find padding: 10px",
        validation: (code) => code.includes("padding: 30px"),
      },
    ],
  },
  {
    id: "lesson-20",
    title: "Outside Spacing with Margin",
    description: "Learn margin for outside spacing",
    initialCode: '<p style="margin: 5px;">Spaced paragraph</p>',
    targetCode: '<p style="margin: 20px;">Spaced paragraph</p>',
    steps: [
      {
        instruction: "Change margin from 5px to 20px",
        hint: "Find margin: 5px",
        validation: (code) => code.includes("margin: 20px"),
      },
    ],
  },
  {
    id: "lesson-21",
    title: "Button Element",
    description: "Learn about button tags",
    initialCode: "<button></button>",
    targetCode: "<button>Click Me!</button>",
    steps: [
      {
        instruction: "Add text 'Click Me!' inside the button tag",
        hint: "Type between <button> and </button>",
        validation: (code) => code.includes("<button>Click Me!</button>"),
      },
    ],
  },
  {
    id: "lesson-22",
    title: "Input Field",
    description: "Learn input tags for text entry",
    initialCode: '<input type="text" placeholder="">',
    targetCode: '<input type="text" placeholder="Enter your name">',
    steps: [
      {
        instruction: 'Add placeholder text "Enter your name"',
        hint: "Put the text between the quotes in placeholder=",
        validation: (code) => code.includes('placeholder="Enter your name"'),
      },
    ],
  },
  {
    id: "lesson-23",
    title: "Label for Input",
    description: "Learn label tags",
    initialCode: '<label></label>\n<input type="text">',
    targetCode: '<label>Your Name:</label>\n<input type="text">',
    steps: [
      {
        instruction: "Add text 'Your Name:' inside the label tag",
        hint: "Type between <label> and </label>",
        validation: (code) => code.includes("<label>Your Name:</label>"),
      },
    ],
  },
  {
    id: "lesson-24",
    title: "Simple Form",
    description: "Combine input and label",
    initialCode:
      '<form>\n  <label>Email:</label>\n  <input type="email">\n</form>',
    targetCode:
      '<form>\n  <label>Email:</label>\n  <input type="email" placeholder="your@email.com">\n</form>',
    steps: [
      {
        instruction: 'Add placeholder "your@email.com" to the input',
        hint: 'Add placeholder="your@email.com" to the input tag',
        validation: (code) => code.includes('placeholder="your@email.com"'),
      },
    ],
  },
  {
    id: "lesson-25",
    title: "Checkbox",
    description: "Learn checkbox input",
    initialCode: '<input type="checkbox"> Agree to terms',
    targetCode: '<input type="checkbox"> Agree to terms',
    steps: [
      {
        instruction: "Great! You can see how a checkbox looks",
        hint: "Just read the code",
        validation: (code) => code.includes('type="checkbox"'),
      },
    ],
  },
  {
    id: "lesson-26",
    title: "Radio Button",
    description: "Learn radio button input",
    initialCode: '<input type="radio"> Yes\n<input type="radio"> No',
    targetCode: '<input type="radio"> Yes\n<input type="radio"> No',
    steps: [
      {
        instruction: "Radio buttons let you pick one option",
        hint: "Just read the code",
        validation: (code) => code.includes('type="radio"'),
      },
    ],
  },
  {
    id: "lesson-27",
    title: "Dropdown Select",
    description: "Learn select/dropdown",
    initialCode:
      "<select>\n  <option>Apple</option>\n  <option>Banana</option>\n</select>",
    targetCode:
      "<select>\n  <option>Apple</option>\n  <option>Banana</option>\n</select>",
    steps: [
      {
        instruction: "Click the dropdown to see the options!",
        hint: "Just read the code",
        validation: (code) => code.includes("<select>"),
      },
    ],
  },
  {
    id: "lesson-28",
    title: "Textarea for Long Text",
    description: "Learn textarea for multiple lines",
    initialCode: '<textarea placeholder=""></textarea>',
    targetCode: '<textarea placeholder="Write your message here"></textarea>',
    steps: [
      {
        instruction: 'Add placeholder "Write your message here"',
        hint: "Put text in the placeholder attribute",
        validation: (code) =>
          code.includes('placeholder="Write your message here"'),
      },
    ],
  },
  {
    id: "lesson-29",
    title: "Table Introduction",
    description: "Learn basic table structure",
    initialCode: "<table>\n  <tr><td>Cell 1</td></tr>\n</table>",
    targetCode: "<table>\n  <tr><td>Cell 1</td></tr>\n</table>",
    steps: [
      {
        instruction: "Tables organize data in rows and columns!",
        hint: "Just read the code",
        validation: (code) => code.includes("<table>"),
      },
    ],
  },
  {
    id: "lesson-30",
    title: "Table with Header",
    description: "Learn table header with th",
    initialCode:
      "<table>\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Sam</td><td>6</td></tr>\n</table>",
    targetCode:
      "<table>\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Sam</td><td>6</td></tr>\n</table>",
    steps: [
      {
        instruction: "The <th> tag makes header cells bold!",
        hint: "Just read the code",
        validation: (code) => code.includes("<th>"),
      },
    ],
  },
  {
    id: "lesson-31",
    title: "Division/Container",
    description: "Learn div tags",
    initialCode: '<div style="background-color: lightgreen;">Content</div>',
    targetCode: '<div style="background-color: lightgreen;">Content</div>',
    steps: [
      {
        instruction: "Divs are containers to group content together",
        hint: "Just read the code",
        validation: (code) => code.includes("<div>"),
      },
    ],
  },
  {
    id: "lesson-32",
    title: "Span for Inline Styling",
    description: "Learn span for styling inline text",
    initialCode: '<p>This is <span style="color: red;">red</span> text</p>',
    targetCode: '<p>This is <span style="color: red;">red</span> text</p>',
    steps: [
      {
        instruction: "Span styles specific words within a line",
        hint: "Just read the code",
        validation: (code) => code.includes("<span"),
      },
    ],
  },
  {
    id: "lesson-33",
    title: "Comment in HTML",
    description: "Learn HTML comments",
    initialCode: "<!-- This is a comment -->\n<p>Visible content</p>",
    targetCode: "<!-- This is a comment -->\n<p>Visible content</p>",
    steps: [
      {
        instruction: "Comments don't show on the page!",
        hint: "Just read the code",
        validation: (code) => code.includes("<!--"),
      },
    ],
  },
  {
    id: "lesson-34",
    title: "Make Text Underline",
    description: "Learn the u tag",
    initialCode: "<p>This is <u>underlined</u> text</p>",
    targetCode: "<p>This is <u>underlined</u> text</p>",
    steps: [
      {
        instruction: "The <u> tag makes text underlined",
        hint: "Just read the code",
        validation: (code) => code.includes("<u>"),
      },
    ],
  },
  {
    id: "lesson-35",
    title: "Strikethrough Text",
    description: "Learn the del tag",
    initialCode: "<p><del>Old price: 100</del> New price: 50</p>",
    targetCode: "<p><del>Old price: 100</del> New price: 50</p>",
    steps: [
      {
        instruction: "The <del> tag shows deleted text with a line through it",
        hint: "Just read the code",
        validation: (code) => code.includes("<del>"),
      },
    ],
  },
  {
    id: "lesson-36",
    title: "Superscript",
    description: "Learn the sup tag",
    initialCode: "<p>E = mc<sup>2</sup></p>",
    targetCode: "<p>E = mc<sup>2</sup></p>",
    steps: [
      {
        instruction: "The <sup> tag makes text smaller and raised",
        hint: "Just read the code",
        validation: (code) => code.includes("<sup>"),
      },
    ],
  },
  {
    id: "lesson-37",
    title: "Subscript",
    description: "Learn the sub tag",
    initialCode: "<p>H<sub>2</sub>O</p>",
    targetCode: "<p>H<sub>2</sub>O</p>",
    steps: [
      {
        instruction: "The <sub> tag makes text smaller and lowered",
        hint: "Just read the code",
        validation: (code) => code.includes("<sub>"),
      },
    ],
  },
  {
    id: "lesson-38",
    title: "Blockquote",
    description: "Learn blockquote for quotes",
    initialCode: "<blockquote>This is a famous quote!</blockquote>",
    targetCode: "<blockquote>This is a famous quote!</blockquote>",
    steps: [
      {
        instruction: "Blockquote shows important quotes with indentation",
        hint: "Just read the code",
        validation: (code) => code.includes("<blockquote>"),
      },
    ],
  },
  {
    id: "lesson-39",
    title: "Code Block",
    description: "Learn code tag",
    initialCode: "<p>The <code>console.log()</code> function prints text</p>",
    targetCode: "<p>The <code>console.log()</code> function prints text</p>",
    steps: [
      {
        instruction: "The <code> tag shows computer code in a special font",
        hint: "Just read the code",
        validation: (code) => code.includes("<code>"),
      },
    ],
  },
  {
    id: "lesson-40",
    title: "Preformatted Text",
    description: "Learn pre tag",
    initialCode: "<pre>  Line 1\n    Line 2</pre>",
    targetCode: "<pre>  Line 1\n    Line 2</pre>",
    steps: [
      {
        instruction:
          "The <pre> tag keeps spaces and line breaks exactly as you type them",
        hint: "Just read the code",
        validation: (code) => code.includes("<pre>"),
      },
    ],
  },
  {
    id: "lesson-41",
    title: "Emphasize Text",
    description: "Mark important text",
    initialCode: "<p>This is <mark>highlighted</mark> text</p>",
    targetCode: "<p>This is <mark>highlighted</mark> text</p>",
    steps: [
      {
        instruction: "The <mark> tag highlights text like a marker pen",
        hint: "Just read the code",
        validation: (code) => code.includes("<mark>"),
      },
    ],
  },
  {
    id: "lesson-42",
    title: "Small Text",
    description: "Learn the small tag",
    initialCode: "<p>Large text <small>small text</small></p>",
    targetCode: "<p>Large text <small>small text</small></p>",
    steps: [
      {
        instruction: "The <small> tag makes text smaller, like footnotes",
        hint: "Just read the code",
        validation: (code) => code.includes("<small>"),
      },
    ],
  },
  {
    id: "lesson-43",
    title: "Break Words",
    description: "Learn word break",
    initialCode:
      '<p style="word-break: break-all;">verylongwordthatcannotfit</p>',
    targetCode:
      '<p style="word-break: break-all;">verylongwordthatcannotfit</p>',
    steps: [
      {
        instruction:
          "word-break allows long words to break into multiple lines",
        hint: "Just read the code",
        validation: (code) => code.includes("word-break"),
      },
    ],
  },
  {
    id: "lesson-44",
    title: "White Space Handling",
    description: "Learn white-space property",
    initialCode: '<p style="white-space: pre;">Keeps   spaces</p>',
    targetCode: '<p style="white-space: pre;">Keeps   spaces</p>',
    steps: [
      {
        instruction:
          "white-space controls how spaces and new lines are handled",
        hint: "Just read the code",
        validation: (code) => code.includes("white-space"),
      },
    ],
  },
  {
    id: "lesson-45",
    title: "Border Style",
    description: "Learn border property",
    initialCode: '<div style="border: 2px solid black;">Bordered box</div>',
    targetCode: '<div style="border: 2px solid red;">Bordered box</div>',
    steps: [
      {
        instruction: "Change the border color from black to red",
        hint: "Find border: 2px solid black",
        validation: (code) => code.includes("border: 2px solid red"),
      },
    ],
  },
  {
    id: "lesson-46",
    title: "Border Radius",
    description: "Make corners rounded",
    initialCode:
      '<div style="background-color: blue; border-radius: 5px; padding: 20px;">Rounded corners</div>',
    targetCode:
      '<div style="background-color: blue; border-radius: 15px; padding: 20px;">Rounded corners</div>',
    steps: [
      {
        instruction:
          "Change border-radius from 5px to 15px for rounder corners",
        hint: "Find border-radius: 5px",
        validation: (code) => code.includes("border-radius: 15px"),
      },
    ],
  },
  {
    id: "lesson-47",
    title: "Shadow Effect",
    description: "Add shadow to boxes",
    initialCode:
      '<div style="background-color: yellow; box-shadow: 0px 0px 5px gray; padding: 20px;">Shadowy</div>',
    targetCode:
      '<div style="background-color: yellow; box-shadow: 0px 0px 5px gray; padding: 20px;">Shadowy</div>',
    steps: [
      {
        instruction: "box-shadow creates a shadow effect around elements",
        hint: "Just read the code",
        validation: (code) => code.includes("box-shadow"),
      },
    ],
  },
  {
    id: "lesson-48",
    title: "Opacity/Transparency",
    description: "Learn opacity property",
    initialCode:
      '<div style="background-color: green; opacity: 1;">Opaque</div>',
    targetCode:
      '<div style="background-color: green; opacity: 0.5;">Opaque</div>',
    steps: [
      {
        instruction: "Change opacity from 1 to 0.5 to make it see-through",
        hint: "Find opacity: 1",
        validation: (code) => code.includes("opacity: 0.5"),
      },
    ],
  },
  {
    id: "lesson-49",
    title: "Line Height",
    description: "Control spacing between lines",
    initialCode: '<p style="line-height: 1.2;">Line 1\nLine 2\nLine 3</p>',
    targetCode: '<p style="line-height: 2;">Line 1\nLine 2\nLine 3</p>',
    steps: [
      {
        instruction:
          "Change line-height from 1.2 to 2 for more space between lines",
        hint: "Find line-height: 1.2",
        validation: (code) => code.includes("line-height: 2"),
      },
    ],
  },
  {
    id: "lesson-50",
    title: "Letter Spacing",
    description: "Add space between letters",
    initialCode: '<p style="letter-spacing: 1px;">Spaced Text</p>',
    targetCode: '<p style="letter-spacing: 5px;">Spaced Text</p>',
    steps: [
      {
        instruction: "Change letter-spacing from 1px to 5px",
        hint: "Find letter-spacing: 1px",
        validation: (code) => code.includes("letter-spacing: 5px"),
      },
    ],
  },
  {
    id: "lesson-51",
    title: "Text Transform",
    description: "Change text case",
    initialCode: '<p style="text-transform: lowercase;">Hello World</p>',
    targetCode: '<p style="text-transform: uppercase;">Hello World</p>',
    steps: [
      {
        instruction: "Change text-transform from lowercase to uppercase",
        hint: "Find text-transform: lowercase",
        validation: (code) => code.includes("text-transform: uppercase"),
      },
    ],
  },
  {
    id: "lesson-52",
    title: "Text Decoration",
    description: "Add lines to text",
    initialCode: '<p style="text-decoration: underline;">Decorated Text</p>',
    targetCode: '<p style="text-decoration: overline;">Decorated Text</p>',
    steps: [
      {
        instruction: "Change text-decoration from underline to overline",
        hint: "Find text-decoration: underline",
        validation: (code) => code.includes("text-decoration: overline"),
      },
    ],
  },
  {
    id: "lesson-53",
    title: "Text Shadow",
    description: "Add shadow to text",
    initialCode: '<p style="text-shadow: 2px 2px 4px gray;">Shadow Text</p>',
    targetCode: '<p style="text-shadow: 2px 2px 4px gray;">Shadow Text</p>',
    steps: [
      {
        instruction: "text-shadow adds a shadow effect to your text",
        hint: "Just read the code",
        validation: (code) => code.includes("text-shadow"),
      },
    ],
  },
  {
    id: "lesson-54",
    title: "Display Block",
    description: "Learn block display",
    initialCode:
      '<span style="display: block; background-color: pink;">Block Element</span>',
    targetCode:
      '<span style="display: block; background-color: pink;">Block Element</span>',
    steps: [
      {
        instruction: "display: block makes inline elements take full width",
        hint: "Just read the code",
        validation: (code) => code.includes("display: block"),
      },
    ],
  },
  {
    id: "lesson-55",
    title: "Display Inline",
    description: "Learn inline display",
    initialCode:
      '<div style="display: inline; background-color: lightblue;">Inline</div>',
    targetCode:
      '<div style="display: inline; background-color: lightblue;">Inline</div>',
    steps: [
      {
        instruction: "display: inline makes block elements stay on same line",
        hint: "Just read the code",
        validation: (code) => code.includes("display: inline"),
      },
    ],
  },
  {
    id: "lesson-56",
    title: "Width Property",
    description: "Set element width",
    initialCode:
      '<div style="background-color: purple; width: 100px; padding: 10px;">Width</div>',
    targetCode:
      '<div style="background-color: purple; width: 200px; padding: 10px;">Width</div>',
    steps: [
      {
        instruction: "Change width from 100px to 200px",
        hint: "Find width: 100px",
        validation: (code) => code.includes("width: 200px"),
      },
    ],
  },
  {
    id: "lesson-57",
    title: "Height Property",
    description: "Set element height",
    initialCode:
      '<div style="background-color: orange; height: 50px; width: 200px;">Height</div>',
    targetCode:
      '<div style="background-color: orange; height: 100px; width: 200px;">Height</div>',
    steps: [
      {
        instruction: "Change height from 50px to 100px",
        hint: "Find height: 50px",
        validation: (code) => code.includes("height: 100px"),
      },
    ],
  },
  {
    id: "lesson-58",
    title: "Max Width",
    description: "Limit maximum width",
    initialCode:
      '<div style="background-color: teal; max-width: 200px; padding: 10px;">Max Width</div>',
    targetCode:
      '<div style="background-color: teal; max-width: 400px; padding: 10px;">Max Width</div>',
    steps: [
      {
        instruction: "Change max-width from 200px to 400px",
        hint: "Find max-width: 200px",
        validation: (code) => code.includes("max-width: 400px"),
      },
    ],
  },
  {
    id: "lesson-59",
    title: "Float Elements",
    description: "Learn float property",
    initialCode:
      '<img style="float: left;" src="https://via.placeholder.com/100" alt="Image">\n<p>Text wraps around image</p>',
    targetCode:
      '<img style="float: left;" src="https://via.placeholder.com/100" alt="Image">\n<p>Text wraps around image</p>',
    steps: [
      {
        instruction: "float: left makes content wrap around images",
        hint: "Just read the code",
        validation: (code) => code.includes("float: left"),
      },
    ],
  },
  {
    id: "lesson-60",
    title: "Clear Float",
    description: "Stop floating with clear",
    initialCode:
      '<div style="float: left;">Floating</div>\n<div style="clear: left;">Cleared</div>',
    targetCode:
      '<div style="float: left;">Floating</div>\n<div style="clear: left;">Cleared</div>',
    steps: [
      {
        instruction: "clear stops the float effect",
        hint: "Just read the code",
        validation: (code) => code.includes("clear: left"),
      },
    ],
  },
  {
    id: "lesson-61",
    title: "Overflow Hidden",
    description: "Hide overflowing content",
    initialCode:
      '<div style="overflow: hidden; height: 50px; background-color: lightcyan;">This text is really long and will overflow</div>',
    targetCode:
      '<div style="overflow: hidden; height: 50px; background-color: lightcyan;">This text is really long and will overflow</div>',
    steps: [
      {
        instruction: "overflow: hidden hides content that's too big",
        hint: "Just read the code",
        validation: (code) => code.includes("overflow: hidden"),
      },
    ],
  },
  {
    id: "lesson-62",
    title: "Overflow Scroll",
    description: "Add scrollbar for overflow",
    initialCode:
      '<div style="overflow: scroll; height: 100px; background-color: lightyellow;">Long content here that needs scrolling to see everything</div>',
    targetCode:
      '<div style="overflow: scroll; height: 100px; background-color: lightyellow;">Long content here that needs scrolling to see everything</div>',
    steps: [
      {
        instruction: "overflow: scroll adds a scrollbar",
        hint: "Just read the code",
        validation: (code) => code.includes("overflow: scroll"),
      },
    ],
  },
  {
    id: "lesson-63",
    title: "Position Relative",
    description: "Learn relative positioning",
    initialCode:
      '<div style="position: relative; left: 20px; background-color: lightpink;">Positioned</div>',
    targetCode:
      '<div style="position: relative; left: 20px; background-color: lightpink;">Positioned</div>',
    steps: [
      {
        instruction: "position: relative moves elements while keeping space",
        hint: "Just read the code",
        validation: (code) => code.includes("position: relative"),
      },
    ],
  },
  {
    id: "lesson-64",
    title: "Position Absolute",
    description: "Learn absolute positioning",
    initialCode:
      '<div style="position: absolute; top: 50px; left: 50px; background-color: lightcoral;">Absolute</div>',
    targetCode:
      '<div style="position: absolute; top: 50px; left: 50px; background-color: lightcoral;">Absolute</div>',
    steps: [
      {
        instruction:
          "position: absolute places elements exactly where you want",
        hint: "Just read the code",
        validation: (code) => code.includes("position: absolute"),
      },
    ],
  },
  {
    id: "lesson-65",
    title: "Z-Index",
    description: "Control layering of elements",
    initialCode:
      '<div style="position: absolute; z-index: 10; background-color: red; width: 100px; height: 100px;">Top</div>\n<div style="position: absolute; z-index: 1; background-color: blue; width: 100px; height: 100px; top: 50px; left: 50px;">Bottom</div>',
    targetCode:
      '<div style="position: absolute; z-index: 10; background-color: red; width: 100px; height: 100px;">Top</div>\n<div style="position: absolute; z-index: 1; background-color: blue; width: 100px; height: 100px; top: 50px; left: 50px;">Bottom</div>',
    steps: [
      {
        instruction:
          "z-index controls which element appears on top (higher = on top)",
        hint: "Just read the code",
        validation: (code) => code.includes("z-index"),
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

export const initializeLessonProgress = (lesson: Lesson): LessonProgress => {
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
