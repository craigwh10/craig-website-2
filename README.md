## craig-website-2

My personal website with the code public so people can comment on or gain things from my approach.

## Setup
For developer environment:
```bash
$   yarn dev
$   yarn storybook
```
For optimised build:
```bash
$   yarn build
```

## Practices
- Dumb, reusable element-based components that accept logic as props, written via storybook, tested and validated.
- Linting & tests pre-commit to prevent a dirty repo.
- Named imports preferebly, for nicer imports.
- Alphabetical imports seperated by dependency first, same context second, and external last.
- A high effort to make components & pages accessable.
## Facts
Contains:
- ✅ NextJS setup
    - Typescript
- ✅ Consistency setup
    - Stylelint
        - https://github.com/styled-components/stylelint-processor-styled-components
    - ESlint
        - React
        - https://github.com/yannickcr/eslint-plugin-react/issues/2157
    - Husky
        - Pre commit linting (Commitlint)
        - Pre commit testing
- ✅ Component library
    - Storybook setup
        - https://medium.com/swlh/2020-complete-setup-for-storybook-nextjs-typescript-scss-and-jest-1c9ce41e6481 for basis
        - https://gist.github.com/justincy/b8805ae2b333ac98d5a3bd9f431e8f70 for configs
- ✅ Styled components
    - https://medium.com/swlh/server-side-rendering-styled-components-with-nextjs-1db1353e915e
    - `_document.tsx` used to augment `<html>` and `<body>` tags.
- TODO: Testing setup
    - TODO: React testing library - DOM unit testing
    - TODO: BackstopJS - Visual Regression
    - TODO: Cypress - E2E xbrowser testing
- Prop-Types
    - ℹ️ Reason: Prop-Types are run time validation, whereas typescript is compile time, safer components.
- Theming strategy
- TODO: Github action CI
    - Build
    - Lint & Test
- TODO: Github action CD w/ Vercel
    - Pre prod
    - Prod