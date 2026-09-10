# Webpack

Project covering the fundamentals of Webpack: entry points, output, loaders,
plugins, code splitting, and the dev server.

## Tasks

- **task_0** - Basic Webpack setup with zero-config (no `webpack.config.js`).
  Bundles `src/index.js` (imports jQuery, appends three paragraphs) into
  `dist/main.js`.
- **task_1** - Webpack with a config file. Bundles `js/dashboard_main.js`
  (jQuery + Lodash `debounce`) into `public/bundle.js` in production mode.
- **task_2** - Adds CSS and image support (loaders + asset modules) and
  image optimization to the task_1 setup.
- **task_3** - Splits the app into `header`, `body`, and `footer` modules,
  each with its own JS/CSS, wired up with multiple entry points, a dev
  server on port 8564, `HtmlWebpackPlugin`, inline source maps, and chunk
  splitting for shared vendor code (jQuery, Lodash).

## Usage

Each task folder is a standalone npm project.

```
cd task_X
npm install
npm run build
```

`task_3` also supports:

```
npm run start-dev
```

which starts the dev server at `http://localhost:8564`.
