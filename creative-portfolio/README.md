# Creative Portfolio

A responsive project showcase built with React, Vite, and CSS. Visitors can browse projects, search the collection, and add new projects using a form.

## Features

- Project cards with an image, title, category, and description.
- Live search by title, category, or description, regardless of capitalization.
- An **Add Project** form with required title, category, and description fields.
- An optional image URL, with a default image when left blank.
- Browser storage that keeps projects after refreshing the page.
- A responsive layout for different screen sizes.

## Getting started

You need Node.js and npm installed on your computer.

1. Open a terminal in the `creative-portfolio` folder—the folder containing `package.json`.
2. Install the project's packages:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local address printed in the terminal, usually `http://localhost:5173`.

Keep the terminal running while using the app. Press **Ctrl+C** to stop the server. Changes you save in the source files will appear automatically in the browser.

## Using the application

- Browse the project cards on the main page.
- Type in **Search projects...** to filter the cards. Clear the search to see all projects again.
- Click **+ Add Project**, fill out the form, and click **Save Project** to add a card.
- Click **Close Form** to hide the form without saving.

Projects are saved in `localStorage`, a storage area provided by your browser. They are available only in the same browser on the same device. Clearing the site's browser data removes saved projects. This app does not use a shared database or user accounts.

## Project structure

```text
creative-portfolio/
├── public/
│   └── images/                 Images for the sample projects
├── src/
│   ├── components/
│   │   ├── Header.jsx          Site title and Add Project button
│   │   ├── ProjectCard.jsx     Displays one project
│   │   ├── ProjectForm.jsx     Collects new project details
│   │   └── SearchBar.jsx       Search input
│   ├── styles/
│   │   └── App.css             Portfolio layout and styles
│   ├── App.jsx                 Sample projects, search, and storage
│   ├── index.css               Global styles
│   └── main.jsx                Starts the React application
├── index.html                  HTML page that loads the app
└── package.json                Packages and available commands
```

A **component** is a reusable part of the page, such as a project card. React's `useState` remembers values such as the project list and search text. When those values change, React updates the page.

## Customizing the portfolio

- Edit `starterProjects` in `src/App.jsx` to change the initial projects. Each project needs a unique `id`.
- Put your own images in `public/images/` and reference them as `/images/your-image.png`.
- Change the introduction in `src/App.jsx` and the site title in `src/components/Header.jsx`.
- Edit `src/styles/App.css` to change the colors, spacing, and layout.

If you have already saved projects in the browser, that saved collection takes priority over `starterProjects`. To load updated sample projects, use a fresh browser session without saved site data, or remove the `portfolioProjects` entry from the browser's local storage. Removing that entry also removes projects you added through the form.

## Other commands

```bash
npm run build    # Create production files in the dist folder
npm run preview  # Preview the production build locally
npm run lint     # Check the code using ESLint
```

Run `npm run build` before `npm run preview`. Make changes in `src`, not in the generated `dist` folder.
