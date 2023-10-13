# React Tasks Project

This is a simple React project that allows users to store and manage tasks. The project has the following files:

- `public/index.html`: This file is the HTML template for the React app.
- `public/favicon.ico`: This file is the favicon for the React app.
- `src/App.js`: This file is the main component of the React app. It renders the `AddTask` and `TaskList` components and manages the state of the tasks.
- `src/index.js`: This file is the entry point of the React app. It renders the `App` component to the DOM.
- `src/components/AddTask.js`: This file exports a class `AddTask` which has a form to add new tasks. It uses a callback function to pass the new task to the `App` component.
- `src/components/Task.js`: This file exports a class `Task` which displays a single task. It has a checkbox to mark the task as completed and a delete button to remove the task. It uses callback functions to pass the task ID and completion status to the `App` component.
- `src/components/TaskList.js`: This file exports a class `TaskList` which displays a list of tasks. It uses the `Task` component to render each task. It has a callback function to pass the task ID and completion status to the `App` component.
- `src/data/tasks.js`: This file exports an array of tasks. Each task is an object with `id`, `title`, and `completed` properties.
- `src/styles/index.css`: This file contains the CSS styles for the React app.
- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project.
- `README.md`: This file contains the documentation for the project.

To run the project, clone the repository and run `npm install` to install the dependencies. Then run `npm start` to start the development server. The app will be available at `http://localhost:3000`.