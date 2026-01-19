https://ot-8836.github.io/URL---shortener/

URL Shortener Project Documentation
1. Project Overview
The URL Shortener project is a frontend web application built with HTML, CSS, and JavaScript. Its purpose is to
convert long URLs into short, shareable links using the TinyURL public API. The project focuses on clean user
interface design, validation, API integration, and modern user experience practices.

3. Features
• Paste and shorten long URLs
• URL validation before submission
• Loading indicator during API request
• Display of shortened URL
• One-click copy to clipboard
• User feedback messages for success and errors
• Responsive and simple UI design

5. Technologies Used
• HTML5 for structure
• CSS3 for styling and layout
• JavaScript (ES6) for logic and interactivity
• TinyURL API for URL shortening
• Clipboard API for copy functionality

7. Application Workflow
The user pastes a long URL into the input field and clicks the Shorten URL button. JavaScript validates the input
and sends a request to the TinyURL API. Once a shortened URL is received, it is displayed on the page. The user
can then copy the shortened link to the clipboard using the Copy button.

9. HTML Structure Explanation
The HTML file defines the layout of the application. It includes input fields for user interaction, buttons to trigger
actions, and a result section that is dynamically displayed using JavaScript. Each element is assigned an ID to
allow DOM manipulation.

11. CSS Styling Explanation
CSS is used to improve the visual presentation and user experience. The result section is hidden by default and
shown after a URL is shortened. A loading state is applied to the button during API calls to prevent repeated
clicks.

13. JavaScript Logic Explanation
JavaScript handles all interactive behavior in the project. It validates user input, communicates with the TinyURL
API using the Fetch API, updates the UI dynamically, and uses the Clipboard API to copy the shortened URL.
Error handling ensures that users receive clear feedback if something goes wrong.

15. Limitations
• Requires an internet connection to shorten URLs
• Relies on a third-party public API
• Does not store shortened URLs permanently
• No user authentication or analytics

17. Future Improvements
• Add URL history using localStorage
• Implement QR code generation
• Introduce dark mode support
• Add backend for analytics and custom URLs
• Deploy as a full web application

This project demonstrates practical frontend development skills including API integration, DOM manipulation, and
user experience optimization.
