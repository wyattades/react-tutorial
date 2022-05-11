# React tutorial

## Topics

- what do you already know?
- forms + inputs
- a11y (brief)
- esmodules
- npm
- bundling (webpack)
- React functions + components + JSX
- React hooks:
  - useState
  - useEffect
- React re-renders
- styling:
  - Chakra UI: https://chakra-ui.com
- typescript: https://www.typescriptlang.org/docs/handbook/declaration-files/deep-dive.html

## Build a TODO list app

- create boilerplate: `npx create-next-app react-todo-list`
- edit `pages/index.js`, add a component `<TodoList/>` (put it in `components/TodoList.js`)
- add a "controlled input" i.e. `<input type="text"/>` with `value` and `onChange` props controlled by React state
- add a "plus" button to add the input's value to our todo list
- add ability to delete each list item
