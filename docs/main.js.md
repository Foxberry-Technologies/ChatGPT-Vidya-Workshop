## JavaScript Documentation


## Table of Contents

- [showTab(tabIndex)](#showtabtabindex)
- [Chat code](#chat-code)
  - [Event Listeners](#event-listeners)
  - [Functions](#functions)
- [getReplyMessage(message)](#getreplymessagemessage)
- [selectChip(index)](#selectchipindex)

---

## showTab(tabIndex)
This function is responsible for displaying the selected tab and its corresponding content.

### Parameters
- `tabIndex` (number): The index of the tab to be shown.

### Usage
```javascript
showTab(0);
```

---

## Chat code
The following functions and event listeners handle the interaction with the chatbot UI.

### Event Listeners
- `chatIcon.addEventListener('click', () => { ... })`: Displays the chat window when the chat icon is clicked.
- `closeBtn.addEventListener('click', () => { ... })`: Closes the chat window when the close button is clicked.
- `sendBtn.addEventListener('click', () => { ... })`: Sends the user's message when the send button is clicked.
- `inputArea.addEventListener('keyup', (e) => { ... })`: Sends the user's message when the Enter key is pressed.

### Functions
- `sendMessage()`: Sends the user's message to the chatbot and displays it in the chat window.
- `replyMessage(message)`: Generates and displays a reply message from the chatbot based on the user's message.
- `addMessage(content, type)`: Adds a new message to the chat window with the specified content and type (outgoing or incoming).
- `scrollToBottom()`: Scrolls the chat window to the bottom to show the latest messages.

---

## getReplyMessage(message)
This function returns a reply message from the chatbot based on the user's input.

### Parameters
- `message` (string): The user's message or selected chip index.

### Returns
- The reply message corresponding to the user's input.

---

## selectChip(index)
This function is called when a chip is selected in the chat window. It triggers the appropriate actions, such as adding the chip's content as an outgoing message and generating a reply message.

### Parameters
- `index` (number): The index of the selected chip.

### Usage
```javascript
selectChip(1);
```

---

Please note that the JavaScript code provided assumes the existence of the necessary HTML elements and CSS classes for proper functionality. Make sure to include the required HTML and CSS code mentioned in the previous documentation to ensure the JavaScript functions work as intended.