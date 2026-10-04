# React inline styling

Styling the Holberton School dashboard with inline styles and Aphrodite
(CSS-in-JS), conditional styles, responsive media queries and keyframe animations.

Each `task_N/dashboard` folder is a standalone project:

```bash
cd task_N/dashboard
npm install
npm test          # Jest + Enzyme test suites
npm run build     # bundles into dist/ (open dist/index.html)
npm start         # webpack dev server
```

## Tasks

| Task | Description |
| ---- | ----------- |
| 0. Inline styling | `CourseListRow` uses inline style constants: rows `#f5f5f5ab`, header rows `#deb5b545` |
| 1. Install Aphrodite | `App`, `BodySectionWithMarginBottom`, `CourseList`, `Header`, `Login`, `Notifications` styled with Aphrodite; `App.css`, `BodySection.css`, `Header.css`, `Login.css` removed |
| 2. Conditionally applying style | `NotificationItem` (default / urgent) and `CourseListRow` (rows, header rows, `th` types) styled with conditions; `Notifications.css` and `CourseList.css` removed |
| 3. Responsive design | Under 900px: `Login` fields stacked, notifications panel full screen (20px text, no `ul` padding), items full width with a black bottom border and `10px 8px` padding |
| 4. Animation | Menu item floats right over the page (`#fff8f8`, pointer cursor), fades (0.5 → 1, 1s) and bounces (0.5s) 3 times on hover, and hides while the panel is open |

## Learning objectives

- Differences between a CSS file and inline styling
- Using a CSS-in-JS tool like Aphrodite
- Applying different styles with JS conditions
- Responsive design with media queries
- Small animations with keyframes
