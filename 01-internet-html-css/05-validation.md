# Module 01 — Validation: Internet, HTML, CSS

Answer each question in your own words.

You do not need to write perfect answers.
The goal is to check if you understood the concept.

If you cannot answer a question, go back to `01-theory.md` or `02-terminology.md` and review that part.

A topic is ready when you can explain it simply — like explaining it to a friend.

---

## Section 1 — Concepts

**1.** What is the difference between HTML and CSS?

> Write your answer here.
HTML defines the structure of a webpage (headings, paragraphs, buttons, images, etc.), while CSS controls the design and appearance (colors, fonts, spacing, layout, animations).

* HTML = content and structure
* CSS = style and visual presentation

---

**2.** What is the difference between frontend and backend?

> Write your answer here.
Front-end is the part of a website or app that users see and interact with (design, buttons, menus, animations). It is usually built with HTML, CSS, and JavaScript.

Back-end is the part that works behind the scenes (server, database, authentication, logic). It handles data processing and communication between the server and the front-end.

* Front-end = user interface
* Back-end = server-side functionality and data management

---

**3.** What happens when you type a URL and press Enter in the browser?

> Write your answer here.
When you type a URL and press Enter in a browser, several things happen in sequence:

1. URL parsing – The browser breaks the URL into parts (protocol, domain, path).
2. DNS lookup – It finds the IP address of the server by asking a DNS server (like a phonebook for websites).
3. Connection setup – The browser connects to the server using TCP (and often secures it with HTTPS/TLS encryption).
4. HTTP request – The browser sends a request (e.g., “GET /index.html”) to the server.
5. Server processing – The server processes the request, may access a database, and prepares a response.
6. HTTP response – The server sends back files (HTML, CSS, JS, images).
7. Rendering – The browser builds the page:
    * Parses HTML → structure (DOM)
    * Applies CSS → styling
    * Runs JavaScript → interactivity
8. Page display – The final result is shown on your screen, and additional resources may keep loading in the background.

In short: URL → IP → request → server → response → browser renders page.

---

**4.** What is an API? Why does the frontend need it?

> Write your answer here.
An API (Application Programming Interface) is a set of rules that lets different software systems communicate with each other.

In web development, it usually means a way for the front-end (browser app) to request data or actions from the back-end (server).

Why the front-end needs an API:

* To get data: like user info, posts, products, weather, etc.
* To send data: like login forms, comments, orders.
* To avoid direct database access: the front-end never talks directly to databases for security reasons.
* To separate concerns: front-end handles UI, back-end handles logic and data.
* To enable dynamic apps: pages can update without reloading (e.g., social media feeds).

---

## Section 2 — HTML

**5.** What is the difference between `id` and `class`?

> Write your answer here.
In HTML, id and class are both used to label elements for styling (CSS) or scripting (JavaScript), but they are different in how they work:

id

* Must be unique on a page (only one element can have a specific id)
* Used to target a single, specific element
* Written like: id="header"
class

* Can be used on multiple elements
* Used to group elements that share the same style or behavior
* Written like: class="button"
Key difference:

* id = one unique element
* class = reusable for many elements

---

**6.** Look at this code. What does each part do?

```html
<a href="https://github.com" class="link">Visit GitHub</a>
```

- What is the tag?
- What is the attribute?
- What is the value of the attribute?
- What is the content?

> Write your answer here.
* Tag: <a> (anchor tag, used for links)
* Attributes:
    * href
    * class
* Values of the attributes:
    * href="https://github.com" → value is “https://github.com”
    * class="link" → value is “link”
* Content:
    * “Visit GitHub”

---

**7.** What are the 4 layers of the CSS box model?

> Write your answer here.
The CSS box model has 4 layers:

1. Content – The actual text, image, or data inside the element.
2. Padding – Space between the content and the border.
3. Border – The line that wraps around the padding and content.
4. Margin – Space outside the border, separating the element from other elements.

Order (inside → outside):
Content → Padding → Border → Margin

---

## Section 3 — CSS

**8.** What does `display: flex` do?

> Write your answer here.
display: flex turns an element into a flex container, which allows you to easily arrange its child elements in a flexible layout.

---

**9.** What is the difference between `justify-content` and `align-items`?

> Write your answer here.
In Flexbox, justify-content and align-items control alignment, but on different axes:

justify-content

* Aligns items along the main axis (default: horizontal)
* Controls horizontal spacing in a row layout
* Example values: flex-start, center, space-between, space-around

align-items

* Aligns items along the cross axis (default: vertical)
* Controls vertical alignment in a row layout
* Example values: flex-start, center, stretch, flex-end


---

**10.** How do you make a page responsive? What CSS feature do you use?

> Write your answer here.
Media queries

They allow you to apply different styles depending on screen width.

---

## Section 4 — Can you do it?

Answer Yes or No. If No, practice that skill before moving on.

- [Yes] I can build an HTML page from scratch (no template)
- [Yes] I can style elements with CSS (color, padding, margin, border)
- [Yes] I can use Flexbox to arrange elements in a row
- [Yes] I can make a layout responsive with a media query
- [Yes] I can build a form with inputs, labels, and a button
- [Yes] I can explain what a tag, element, and attribute are
- [Yes] I can explain the box model

---

## You are ready for Module 02 when:

All boxes above are checked and you can answer at least 7 of the 10 questions without looking at notes.

**Next step:** Go to `02-javascript-basics/01-theory.md`
