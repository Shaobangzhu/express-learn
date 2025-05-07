# express-learn

**Learn Express.js Router and Middleware**

This repository serves as a practical guide to understanding and implementing Express.js routers and middleware. It provides hands-on examples to help developers grasp the core concepts of routing, middleware functions, and request handling in Express.js.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Shaobangzhu/express-learn.git
   cd express-learn
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the application:**

   ```bash
   node index.js
   ```

   The server will start on the port specified in `index.js` (default is `3030`). You can access it by navigating to `http://localhost:3030/` in your browser.

## 📚 Learning Objectives

This project aims to help you understand:

- **Application-Level Middleware**: How to use middleware functions that are bound to the application instance.
- **Router-Level Middleware**: Implementing middleware functions that are bound to an instance of `express.Router()`.
- **Built-in Middleware**: Utilizing Express's built-in middleware functions like `express.json()` and `express.urlencoded()`.
- **Third-Party Middleware**: Integrating middleware from external libraries.
- **Routing**: Defining and using routes with different HTTP methods and URL patterns.
- **Static Files**: Serving static assets using `express.static`.

## 📝 License

This project is licensed under the [MIT License](LICENSE).
