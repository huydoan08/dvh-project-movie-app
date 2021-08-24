# web-dashboard

## Prerequisite
- [Node.js v14](https://nodejs.org/en/)
- [npm v7](https://github.blog/2021-02-02-npm-7-is-now-generally-available/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Structure

### `public`

Static files that will be copied to the root of the site without any processing.

### `src`

All the source code.

### `src/components`

UI Components without business entity concepts.

### `src/constants`

Constants

- `src/constants/config.ts` mainly referring to the environment variables.

### `src/contexts`

States that need to be shared in the entire app. Could refactor to use preferred state management library of your choice.

### `src/hooks`

Custom hooks that are generic without business entity concepts.

### `src/lib`

Generic utility functions.

### `src/modules`

A module is a business module. In each module folder we can have the following files:

- `<module>.service.ts`: services (api calls) used in this module
- `<module>.type.ts`: type definitions for this module
- `components` folder: components with concepts of this business module. May be composed from components from `src/components`.
- `index.ts`: treat this as public API of this module. Components/functions/type definition that you wish to be used by other module should be exported here.
- Each module might also have its own

### `src/pages`

Each file is a page that will be rendered for a specific URL. We follows the convention of [NextJS] that the filename means the URL for the page.

Nested URL should be placed in its own folder, while route params should use the convention `[id]`.

For example, a page with URL `/merchant/:merchantId/history`, should be created as `src/pages/merchant/[merchantId]/history.tsx`.

### `src/services`

Services that need to be used in multiple modules.
Module services (e.g. `<module>.service.ts`) will probably importing those services to make the API calls.

## Environments
(TODO)

## Accessibility
Please install [WAVE Evaluation Tool](https://www.accessibility-developer-guide.com/setup/browsers/chrome/wave-toolbar/) to check for basic accessibility rules in every page.
Do not leave any red errors, and try to keep yellow warnings to a minimum.

## Styleguide

- File name convention should be `kebab-case`. So `<TextField>` component should be named as `text-field.tsx`.
- Use named export unless necessary (such as when you want to do lazy loading). Read [here][stop-export-default] for explanation.
- Prefer absolute import unless you"re importing files within same modules.

[nextjs]: https://nextjs.org/
[stop-export-default]: https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/
