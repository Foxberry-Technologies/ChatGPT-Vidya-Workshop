## CSS Documentation

```markdown

## Body

```css
body {
  font-family: 'Inter', sans-serif;
}
```

- Sets the font family for the entire document to 'Inter' and falls back to the default sans-serif font.

## Sticky Header

```css
.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
}
```

- Sets the header element to have a fixed position at the top of the viewport.
- Sets the width to 100% and a background color of #ffffff (white).
- Applies a box shadow effect to create a subtle shadow beneath the header.
- Sets the z-index to 999 to ensure the header appears above other elements.

```css
.sticky-header .logo {
  display: inline-block;
  padding: 10px;
}
```

- Targets the logo element within the sticky header.
- Sets the display to inline-block and adds a padding of 10 pixels.

```css
.sticky-header .logo img {
  height: 40px;
  vertical-align: middle;
}
```

- Targets the image within the logo element.
- Sets the height of the image to 40 pixels.
- Vertically aligns the image to the middle of the logo container.

```css
.sticky-header .action-links {
  display: inline-block;
  float: right;
  padding: 10px;
}
```

- Targets the action links container within the sticky header.
- Sets the display to inline-block and floats it to the right.
- Adds a padding of 10 pixels.

```css
.sticky-header .action-links a {
  margin-right: 10px;
  color: #000000;
  text-decoration: none;
}
```

- Targets the anchor tags within the action links container.
- Adds a right margin of 10 pixels.
- Sets the color of the links to #000000 (black) and removes the text decoration.

```css
.sticky-header .action-links a:last-child {
  margin-right: 0;
}
```

- Targets the last anchor tag within the action links container.
- Removes the right margin to eliminate the spacing between the last link and the edge of the container.

```css
.sticky-header .action-links .phone-icon {
  color: #ff0000;
}
```

- Targets the phone icon within the action links container.
- Sets the color of the phone icon to #ff0000 (red).

```css
.sticky-header .action-links .email-icon {
  color: #ff0000;
}
```

- Targets the email icon within the action links container.
- Sets the color of the email icon to #ff0000 (red).

```css
.sticky-header .action-links .whatsapp-icon {
  color: #25d366;
}
```

- Targets the WhatsApp icon within the action links container.
- Sets the color of the WhatsApp icon to #25d366 (green).

## Banner Section

```css
.banner-section {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}
```

- Sets the banner section to have a relative position.
- Sets the width to 100%.
- Sets the height to 500 pixels.
- Applies overflow: hidden to hide any content that exceeds the specified height.

```css


.banner-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://admissions.mitwpu.edu.in/wp-content/uploads/2022/12/Home-banner.webp);
  background-size: cover;
  background-position: center;
  filter: brightness(80%);
}
```

- Targets the background element within the banner section.
- Sets the background element to have an absolute position, stretching to cover the entire parent container.
- Sets the background image to the provided URL.
- Applies background-size: cover to ensure the image covers the entire element.
- Sets the background position to the center.
- Applies a brightness filter of 80% to slightly dim the background image.

```css
.banner-content {
  margin: 40px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
```

- Targets the content element within the banner section.
- Sets a margin of 40 pixels around the content.
- Sets the position to relative.
- Sets the z-index to 1 to position the content above the background.
- Sets the display to flex and centers the content both vertically and horizontally within the parent container.
- Sets the height of the content to 100% to fill the available space.

```css
.left-section {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 50px;
  color: #ffffff;
}
```

- Targets the left section within the banner content.
- Sets the flex property to 1.5, allowing the left section to occupy more space than the right section.
- Sets the display to flex and the flex-direction to column, making the child elements stack vertically.
- Aligns the child elements to the start of the cross axis (flex-start).
- Adds a left padding of 50 pixels.
- Sets the color of the text within the left section to #ffffff (white).

```css
.left-section h2 {
  font-size: 50px;
  line-height: 1.2;
}
```

- Targets the h2 element within the left section.
- Sets the font size to 50 pixels.
- Sets the line height to 1.2, providing some vertical spacing between lines of text.

```css
.left-section h1 {
  font-size: 90px;
  font-weight: bold;
  margin-top: 10px;
}
```

- Targets the h1 element within the left section.
- Sets the font size to 90 pixels.
- Sets the font weight to bold.
- Adds a top margin of 10 pixels.

```css
.right-section {
  flex: 0.5;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
}
```

- Targets the right section within the banner content.
- Sets the flex property to 0.5, allowing the right section to occupy less space than the left section.
- Adds a padding of 20 pixels.
- Sets the background color to #ffffff (white).
- Applies a border radius of 20 pixels to give the section rounded corners.

```css
.right-section h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
```

- Targets the h3 element within the right section.
- Sets the font size to 24 pixels.
- Sets the font weight to bold.
- Adds a bottom margin of 20 pixels.

```css
form {


  display: grid;
  gap: 15px;
}
```

- Targets the form element.
- Sets the display property to grid to create a grid layout for the form elements.
- Sets the gap between grid items to 15 pixels.

```css
.form-group {
  display: grid;
}
```

- Targets the form group element.
- Sets the display property to grid, allowing the form elements to be aligned within the grid layout.

```css
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}
```

- Targets text input, email input, and textarea elements.
- Sets the width to 100% of their container.
- Adds 10 pixels of padding.
- Applies a 1-pixel solid border with a color of #cccccc (light gray).
- Adds a border radius of 4 pixels for a slightly rounded appearance.

```css
button[type="submit"] {
  padding: 10px 20px;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

- Targets the submit button element.
- Sets the padding to 10 pixels on the top and bottom and 20 pixels on the left and right.
- Sets the background color to #ff0000 (red).
- Sets the text color to #ffffff (white).
- Removes the border.
- Applies a border radius of 4 pixels.
- Sets the cursor to a pointer on hover.

...
```

The documentation continues for the remaining CSS styles. The above code snippets provide an overview of the structure. If you need detailed documentation for specific sections, please let me know!

## Section 2 - Quote and Images

```css
.section-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}
```

- Targets the section with the class "section-2".
- Sets the display to flex, making it a flex container.
- Justifies the content to the center horizontally.
- Aligns the content to the center vertically.
- Adds a padding of 50 pixels.

```css
.section-2 > .left-section {
  flex: 1;
}
```

- Targets the element with the class "left-section" within the section.
- Sets the flex property to 1, allowing it to grow and occupy available space.

```css
.section-2 > .left-section blockquote {
  font-size: 30px;
  font-weight: normal;
  color: #000000;
}
```

- Targets the blockquote element within the "left-section".
- Sets the font size to 30 pixels.
- Sets the font weight to normal.
- Sets the text color to #000000 (black).

```css
.section-2 > .left-section blockquote p {
  margin: 0;
}
```

- Targets the paragraph element within the blockquote in the "left-section".
- Sets the margin to 0, removing any margin around the paragraph.

```css
.section-2 > .left-section .empowering {
  color: #ff0000;
  font-weight: bold;
}
```

- Targets the element with the class "empowering" within the "left-section".
- Sets the text color to #ff0000 (red).
- Sets the font weight to bold.

```css
.section-2 > .right-section {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

- Targets the element with the class "right-section" within the section.
- Sets the flex property to 1, allowing it to grow and occupy available space.
- Sets the display to flex.
- Justifies the content to space-between, distributing it evenly along the main axis.
- Aligns the content to the center vertically.

```css
.section-2 > .right-section img {
  max-width: 33.33%;
}
```

- Targets the images within the element with the class "right-section".
- Sets the maximum width of the images to 33.33% of their container.

## Section 3

```css
.section-3 {
  padding: 50px;
}
```

- Targets the section with the class "section-3".
- Adds a padding of 50 pixels.

```css
.navigation-tabs {
  display: flex;
}
```

- Targets the element with the class "navigation-tabs".
- Sets the display to flex, making it a flex container.

```css
.navigation-tabs .tab {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: #ffffff;
}
```

- Targets the elements with the class "tab" within the "navigation-tabs".
- Sets the display to flex.
- Aligns the content to the center vertically.
- Adds a padding of 10 pixels.
- Sets the cursor to a pointer.
- Sets the background color to #ffffff (white).

```css
.navigation-tabs .tab i {
  margin-right: 5px;
}
```

- Targets the icons within the elements with the class "tab" in the "navigation-tabs".
- Adds a right margin of 5 pixels.

```css
.navigation-tabs .tab.active

 {
  background-color: lightgray;
}
```

- Targets the active tab within the "navigation-tabs".
- Changes the background color to lightgray.

```css
.tab-content {
  margin-top: 20px;
}
```

- Targets the element with the class "tab-content".
- Adds a top margin of 20 pixels.

```css
.course-container {
  display: none;
}
```

- Targets the elements with the class "course-container".
- Sets the display to none, hiding the elements by default.

```css
.course-container.active {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
}
```

- Targets the active course container elements.
- Sets the display to flex, making them visible.
- Allows the flex items to wrap within the container.
- Aligns the items to start from the left.
- Adds a gap of 20 pixels between the items.

```css
.course-box {
  width: 250px;
  height: 180px;
  background-image: url("https://cdn.pixabay.com/photo/2015/07/28/22/05/child-865116_1280.jpg");
  background-size: cover;
  background-position: center;
  filter: brightness(80%) saturate(150%) hue-rotate(180deg);
  border-radius: 10px;
  margin-bottom: 20px;
}
```

- Targets the elements with the class "course-box".
- Sets the width to 250 pixels and the height to 180 pixels.
- Sets a background image using the provided URL.
- Adjusts the background size to cover the entire element.
- Positions the background image at the center.
- Applies image filters to adjust brightness, saturation, and hue.
- Adds a border radius of 10 pixels for rounded corners.
- Adds a bottom margin of 20 pixels.

## Mission Statement

```css
.section-4 {
  display: flex;
  padding: 50px;
}
```

- Targets the section with the class "section-4".
- Sets the display to flex, making it a flex container.
- Adds a padding of 50 pixels.

```css
.section-4 > .left-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

- Targets the element with the class "left-section" within the section.
- Sets the flex property to 1, allowing it to grow and occupy available space.
- Sets the display to flex.
- Sets the flex-direction to column, making the child elements stack vertically.
- Justifies the content to the center vertically.

```css
.section-4 > .left-section h2 {
  font-size: 24px;
  color: #ff0000;
}
```

- Targets the h2 element within the "left-section".
- Sets the font size to 24 pixels.
- Sets the text color to #ff0000 (red).

```css
.section-4 > .left-section h1 {
  font-size: 48px;
  color: #000000;
  margin-top: 10px;
}
```

- Targets the h1 element within the "left-section".
- Sets the font size to 48 pixels.
- Sets the text color to #000000 (black).
- Adds a top margin of 10 pixels.

```css
.section-4 > .left-section .enroll-btn {
  display: inline-block;
  padding: 15px 30px;
  background-color: #ff0000;
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
  margin-top: 20px;
}
```

- Targets the element with the class "enroll-btn" within the "left-section".
- Sets the display to inline-block.
- Adds padding of 15 pixels on the top and bottom, and 30 pixels on the left and right.
- Sets the background color to #ff0000 (red).
- Sets the text color to #ffffff (white).
- Sets the font size to 18 pixels.
- Removes text decoration (underline, etc.).
- Adds a top margin of 20 pixels.

```css
.section-4 > .right-section {
  flex: 1;
  background-image: url("https://staging-web.srv.media/mitwpu/wp-content/uploads/2022/12/Copy_of_DSC_1139-removebg-preview-1-1-1.png");
  background-size: cover;
  background-position: center;
  height: 500px;
}
```

- Targets the element with the class "right-section" within the section.
- Sets the flex property to 1, allowing it to grow and occupy available space.
- Sets a background image using the provided URL.
- Adjusts the background size to cover the entire element.
- Positions the background image at the center.
- Sets the height to 500 pixels.

## Footer

```css
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: white;
  background-color: #122952;
  font-size: 20px;
  margin-top: 10px;
}
```

- Targets the footer element.
- Sets the display to flex, making it a flex container.
- Justifies the content to the center horizontally.
- Aligns the content to the center vertically.
- Adds a padding of 15

 pixels.
- Sets the text color to white.
- Sets the background color to #122952.
- Sets the font size to 20 pixels.
- Adds a top margin of 10 pixels.

## Chat

```css
.chat-icon {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
}
```

- Targets the element with the class "chat-icon".
- Sets the position to fixed, making it stay in a fixed position even when the page is scrolled.
- Sets the bottom position to 30 pixels from the bottom of the viewport.
- Sets the right position to 30 pixels from the right of the viewport.
- Sets the width and height to 60 pixels, creating a circular shape.
- Sets the background color to #25d366 (a shade of green).
- Adds a border-radius of 50% to create a circular shape.
- Sets the display to flex, making it a flex container.
- Justifies the content to the center horizontally.
- Aligns the content to the center vertically.
- Sets the text color to #ffffff (white).
- Sets the cursor to a pointer, indicating it can be clicked.
- Adds a box shadow to give a slight elevation effect.
- Sets the z-index to 999, ensuring it appears above other elements.

```css
.chat-window {
  position: fixed;
  bottom: 100px;
  right: 30px;
  padding: 16px;
  width: 400px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  display: none;
  z-index: 999;
}
```

- Targets the element with the class "chat-window".
- Sets the position to fixed, making it stay in a fixed position even when the page is scrolled.
- Sets the bottom position to 100 pixels from the bottom of the viewport.
- Sets the right position to 30 pixels from the right of the viewport.
- Adds padding of 16 pixels.
- Sets the width to 400 pixels.
- Sets the background color to #ffffff (white).
- Adds a box shadow to give a slight elevation effect.
- Sets the border-radius to 8 pixels for rounded corners.
- Sets the overflow to hidden to hide content that exceeds the element's dimensions.
- Sets the display to none, initially hiding the chat window.
- Sets the z-index to 999, ensuring it appears above other elements.

```css
.chat-window .header {
  background-color: #25d366;
  color: #ffffff;
  padding: 10px;
  display: flex;
  align-items: center;
}
```

- Targets the element with the class "header" within the "chat-window".
- Sets the background color to #25d366 (a shade of green).
- Sets the text color to #ffffff (white).
- Adds padding of 10 pixels.
- Sets the display to flex, making it a flex container.
- Aligns the items to the center vertically.

```css
.chat-window .header h3 {
  margin: 0;
  flex-grow: 1;
  font-size: 18px;
}
```

- Targets the h3 element within the "header" of the chat window.
-

 Sets the margin to 0, removing any default margin.
- Sets the flex-grow to 1, allowing it to grow and occupy available space.
- Sets the font size to 18 pixels.

```css
.chat-window .header .close-btn {
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
}
```

- Targets the element with the class "close-btn" within the "header" of the chat window.
- Removes the border.
- Sets the background color to transparent.
- Sets the text color to #ffffff (white).
- Sets the font size to 20 pixels.
- Sets the cursor to a pointer, indicating it can be clicked.

```css
.chat-window .messages {
  max-height: 300px;
  overflow-y: scroll;
  padding: 10px;
}
```

- Targets the element with the class "messages" within the chat window.
- Sets the max height to 300 pixels, limiting the height of the messages container.
- Enables vertical scrolling if the content exceeds the container's height.
- Adds padding of 10 pixels.

```css
.chat-window .message {
  display: flex;
  margin-bottom: 10px;
}
```

- Targets the element with the class "message" within the chat window.
- Sets the display to flex, making it a flex container.
- Aligns the items horizontally.
- Adds a margin of 10 pixels at the bottom, creating a space between messages.

```css
.chat-window .message p {
  background-color: #e5e5ea;
  color: #000000;
  padding: 8px;
  border-radius: 8px;
  margin: 0;
  max-width: 70%;
}
```

- Targets the paragraph element within the message.
- Sets the background color to #e5e5ea (a light gray).
- Sets the text color to #000000 (black).
- Adds padding of 8 pixels.
- Adds a border-radius of 8 pixels, creating rounded corners.
- Sets the margin to 0, removing any default margin.
- Sets the max-width to 70%, allowing the message to wrap if it exceeds the specified width.

```css
.chat-window .incoming {
  align-self: flex-start;
}
```

- Targets the element with the class "incoming" within the chat window.
- Aligns the element to the flex-start, pushing it to the left within the container.

```css
.chat-window .input-area {
  display: flex;
  align-items: center;
  padding: 10px;
}
```

- Targets the element with the class "input-area" within the chat window.
- Sets the display to flex, making it a flex container.
- Aligns the items vertically.
- Adds padding of 10 pixels.

```css
.chat-window .input-area input[type="text"] {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}
```

- Targets the input element with the type of text within the input area.
- Sets the flex-grow to 1, allowing it to grow and occupy available space.
- Adds padding of 8 pixels.
- Adds a border with a width of 1 pixel, a solid line style, and a color of #cccccc (light gray).
- Adds a border-radius of 4 pixels, creating rounded corners.

```css
.chat-window .input-area .send-btn {
  background-color: #25d366;
  color: #ffffff;
  border: none;
  border-radius: 4px;
 

 padding: 8px 15px;
  margin-left: 10px;
  cursor: pointer;
}
```

- Targets the element with the class "send-btn" within the input area.
- Sets the background color to #25d366 (a shade of green).
- Sets the text color to #ffffff (white).
- Removes the border.
- Adds a border-radius of 4 pixels, creating rounded corners.
- Adds padding of 8 pixels vertically and 15 pixels horizontally.
- Adds a left margin of 10 pixels.
- Sets the cursor to a pointer, indicating it can be clicked.

## Chips

```css
.chips {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
```

- Targets the element with the class "chips".
- Sets the display to flex, making it a flex container.
- Allows the chips to wrap onto multiple lines if needed.
- Adds a margin of 10 pixels at the top, creating a space between the chips and the content above.

```css
.chip {
  display: inline-block;
  background-color: #ffffff;
  border: 0.5px solid gray;
  font-size: 12px;
  color: #000000;
  padding: 8px 12px;
  border-radius: 24px;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
}
```

- Targets the element with the class "chip".
- Sets the display to inline-block, making it flow with the surrounding content.
- Sets the background color to #ffffff (white).
- Adds a border with a width of 0.5 pixels, a solid line style, and a color of gray.
- Sets the font size to 12 pixels.
- Sets the text color to #000000 (black).
- Adds padding of 8 pixels vertically and 12 pixels horizontally.
- Adds a border-radius of 24 pixels, creating rounded corners.
- Adds a right margin of 8 pixels, creating space between the chips.
- Adds a bottom margin of 8 pixels, creating space between rows of chips.
- Sets the cursor to a pointer, indicating it can be clicked.

```css
.chip:hover {
  background-color: #d0d0d5;
}
```

- Targets the chip element when hovered over.
- Sets the background color to #d0d0d5 (a light gray), providing visual feedback to the user when the chip is hovered.  
