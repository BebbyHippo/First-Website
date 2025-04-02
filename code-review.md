# Code review (AI)
A code review of my website conducted by AI. Practicing using AI to support my programming development. This is the output:

## AI Output

### Index

Your HTML is well-structured, clean, and logically organized. Below are my review points, including strengths and potential improvements:

---

### **Strengths:**
✅ **Semantic HTML Usage** – Good use of `<header>`, `<section>`, `<nav>`, `<footer>`, and `<fieldset>`, making the document more readable and accessible.  
✅ **Descriptive Metadata** – The `<meta>` tags are well-placed for SEO optimization and mobile responsiveness.  
✅ **Navigation Clarity** – The navigation menu is clear and well-structured.  
✅ **User Accessibility** – Labels are properly associated with form inputs, improving usability.  
✅ **Form Structure** – The form is structured logically, making it user-friendly.  

---

### **Areas for Improvement:**
#### **1. Navigation Section (`<section id="Navigation">`)**
- **ID Naming Convention:**  
  IDs should be in lowercase and use hyphens (e.g., `id="navigation"` instead of `id="Navigation"`) for consistency with best practices.  
- **Active Link Identification:**  
  The `id="active"` on `<a>` might be better handled in CSS (e.g., `.active { font-weight: bold; }`).

#### **2. Filenames in Navigation**
- Filenames such as `"Sword Coast Travel Guide(Towns and Cities).html"` contain spaces and parentheses. This could lead to compatibility issues.  
  ✅ **Suggestion:** Rename files using hyphens or underscores:  
  ```html
  <li><a href="sword-coast-travel-guide-towns.html">Towns and Cities</a></li>
  ```

#### **3. `<select>` for Character Level**
- You're dynamically generating the `<option>` elements using JavaScript-like syntax:  
  ```html
  ${[...Array(20).keys()].map(i => `<option value="${i + 1}">${i + 1}</option>`).join('')}
  ```
  This won't work inside static HTML. It should be replaced with pre-written options:
  ```html
  <option value="1">1</option>
  <option value="2">2</option>
  ...
  <option value="20">20</option>
  ```
  If you want to generate this dynamically, it needs to be inside a `<script>` block.

#### **4. Backstory `<textarea>`**
- Consider adding a `maxlength` attribute to prevent excessively long submissions:
  ```html
  <textarea id="backstory" name="backstory" placeholder="Enter your backstory here" maxlength="500"></textarea>
  ```

#### **5. Frequency Section (`<select>` + Text Input)**
- The `"other-frequency"` input should only be visible if the "Other" option is selected.  
  ✅ **Solution:** Add a simple JavaScript snippet:
  ```html
  <script>
    document.getElementById('frequency').addEventListener('change', function() {
      document.getElementById('other-frequency').style.display = this.value === 'Other' ? 'inline-block' : 'none';
    });
  </script>
  ```

#### **6. `<footer>` Placement**
- `<footer>` should be **outside** the `<section>` elements for better separation of content and layout.

---

### **Final Thoughts**
You're off to a fantastic start! Just a few small refinements for accessibility, consistency, and usability will make it even better. Would you like me to review your CSS next? 🚀

### Towns and Cities

Your page is looking great! Here are a few improvements you might consider:  

### **Improvements and Fixes:**  
1. **Accessibility:**  
   - Add `alt` text to your images that better describe the content (e.g., `"View of Baldur's Gate cityscape"` instead of `"Description of Baldur's Gate"`).  
   - Use `<section>` and `<article>` elements for better semantic structure instead of relying solely on `<ul>`.  

2. **Fixing Nested Lists:**  
   - Your `<ul>` inside `<p>` tags is invalid HTML. You should remove the surrounding `<p>` tags and just use `<ul>` directly. Example:  
     ```html
     <p>Activities for Adventurers:</p>
     <ul>
       <li>Test Your Luck in the Outer City – ...</li>
       <li>Investigate the Undercellar – ...</li>
       <li>Defend the Merchant Caravans – ...</li>
     </ul>
     ```
  
3. **Enhancing Navigation:**  
   - Consider wrapping your `<nav>` in a `<header>` for better accessibility.  
   - Add `aria-current="page"` to the active navigation link instead of using `id="active"` for better accessibility.  

4. **CSS Styling:**  
   - If you want to improve readability, increase the line height in your CSS (`line-height: 1.6;`).  
   - Make sure `SCTGSS.css` includes responsive styles for mobile users (e.g., flexbox or grid layout).  

5. **Linking to External Sources:**  
   - If you want links to open in a new tab, add `target="_blank" rel="noopener noreferrer"` to your `<a>` tags, e.g.:  
     ```html
     <a href="https://forgottenrealms.fandom.com/wiki/Baldur%27s_Gate" target="_blank" rel="noopener noreferrer">
     ```  

### **Overall Feedback:**  
This is well-structured, informative, and easy to read. The "Activities for Adventurers" section is a great touch that makes it engaging! Would you like help with adding more locations, interactive elements, or any additional styling suggestions?

### Natural Beauty

This page looks great overall! Here are a few small adjustments and improvements you might want to consider:  

### **Corrections & Enhancements:**  
1. **Fix `lang` attribute in `<html>` tag:**  
   - It should be `lang="en-gb"` instead of `lange="en-gb"`.  

2. **Remove duplicate or incorrect CSS link:**  
   - The line `<link rel="stylesheet" href="placeholder">` is likely a placeholder that should be removed.  

3. **Fix inconsistent alt text for images:**  
   - The `alt` attributes for all images currently say `"Description of Baldur's Gate"`, which isn’t accurate for locations like the High Forest or Sea of Swords. Update each to match its actual subject.  

4. **Standardize Image Filenames:**  
   - If your file names include spaces (e.g., `"The high forest.jpeg"`), they may cause issues. Consider renaming files to use underscores or hyphens, like `"the_high_forest.jpeg"`.  

5. **Improve Header Consistency:**  
   - Each section starts with `<h3>`, which is great. However, using `<section>` or `<article>` tags around each entry could improve structure and readability.  

6. **Ensure Closing Tags Are Present:**  
   - Your `<body>` tag is missing entirely! The `<html>` tag closes at the end, but there’s no `<body>` wrapping the content. Add:  
     ```html
     <body>
       <!-- Content Here -->
     </body>
     ```  
   - This will ensure proper page structure.  

Would you like me to apply these fixes and optimize the structure for you?

### Ruins and History

You're doing a great job keeping things structured! Here are a few things to review and refine on this page:

### **Fixes and Improvements:**

1. **`<html lange="en-gb">` → `<html lang="en-gb">`**
   - `lange` should be `lang` to properly define the document’s language.

2. **Metadata Formatting (Spacing)**
   - `<meta name="description"content="Sword Coast travel guide">`
   - Should be:
     ```html
     <meta name="description" content="Sword Coast travel guide">
     ```
   - (Missing space between `description"` and `content=`)

3. **`</section>` Tag Misplacement**
   - The closing `</section>` at the end of "Ruins and History" should be removed. There's no opening `<section>` for it.

4. **Image `alt` Text**
   - The `alt` text for every image is **"Description of Baldur's Gate"**, which isn’t relevant. Instead, use descriptions related to each location. Example:
     ```html
     <img src="Dragonspear.jpeg" alt="Ruins of Dragonspear Castle, once a great bastion of defense" width="700" height="250">
     ```

5. **Consistent Naming for Image Files**
   - Your image filenames use mixed capitalization (`StonersNeedle.jpeg` vs. `Coast_Way.jpeg`).
   - Consider making all file names lowercase with underscores (`stoners_needle.jpeg`) for consistency.

6. **Page Title**
   - The `<title>` tag is the same for every page. You might want to differentiate it:
     ```html
     <title>The Adventurers Guild - Ruins & History of the Sword Coast</title>
     ```

These changes will clean up your HTML and improve accessibility and SEO. Let me know if you'd like me to review your revisions after you've applied the fixes! 🚀

### CSS

Your CSS is well-structured and follows a clear theme! Here are a few refinements and corrections:

---

### **Fixes & Improvements:**

#### **1. `margin: 5;` in `nav ul`**
   - `margin: 5;` is missing a unit (e.g., `px`).
   - Fix:  
     ```css
     nav ul {
         margin: 5px;
     }
     ```

#### **2. `h1`, `h2`, and `h3` padding & margins**
   - You have `padding: 0px; margin: 0px;` in `h1` but `margin: 5px;` in `h2, h3`.
   - For consistency, either set all headings with the same margin/padding or keep intentional differences.

#### **3. `nav` width & responsiveness**
   - If you want your `nav` bar to take up the full width, consider:
     ```css
     nav {
         width: 100%;
     }
     ```

#### **4. Highlighting the Active Navigation Item**
   - You have `#active { color: #FFCF9D; }` but it only changes text color.
   - For better visibility:
     ```css
     #active {
         color: #FFCF9D;
         font-weight: bold;
         text-decoration: underline;
     }
     ```

#### **5. Improve `@media screen` grid layout**
   - You're using `grid-template-columns: repeat(3, minmax(0, 1fr));`, but on small screens (`max-width: 600px`), 3 columns might still be too many.
   - Instead, consider switching to 2 columns:
     ```css
     @media screen and (max-width: 600px) {
         .container {
             display: grid;
             grid-template-columns: repeat(2, minmax(0, 1fr)); /* More readable on small screens */
             grid-gap: 10px;
         }
     }
     ```

#### **6. Dropdown Menu Styling**
   - Your `.dropbtn` button has a strong green (`#4CAF50`), which might contrast with your site's darker tones.
   - If you want a more consistent look:
     ```css
     .dropbtn {
         background-color: #FFB000; /* Matches heading color */
         color: #002244; /* Matches nav background */
     }
     ```

#### **7. Image Styling Consistency**
   - You have `img { width: 100%; height: auto; }` inside your media query.
   - If you want all images to scale properly, define this globally:
     ```css
     img {
         max-width: 100%;
         height: auto;
         display: block;
         margin: 0 auto; /* Centers images */
     }
     ```

---

These changes should improve consistency, responsiveness, and overall appearance. Let me know if you want any further refinements! 🚀

## Actions

### Index

- [X] Navigation section
- [X] File names in navigation
- [X] select
- [X] Backstory
- [X] Frequency section
- [X] footer
    - I reviewed this and found that chatgpt made an error and all my sections were correctly closed. Me: 1 Chat: 10000

### Towns and Cities

- [?] Accessibility
- [X] Fixing Nested Lists
- [X] Enhencing Navigation
- [X] CSS Styling
- [X] Linking to External Sources

### Natural Beauty

- [X] Fix lang and HTML tag
- [X] Remove duplicate or incorrect CSS tag
- [X] Fix inconsistent alt text for images
- [X] Standadise image filenames
- [X] Improve header consistency
- [X] Ensure closing tags are present

### Ruins and History

- [X] lange
- [X] metadata
- [X] no open section for closed section 
- [X] fix alt descriptions
- [X] lower case image files names
- [X] metadata page titles