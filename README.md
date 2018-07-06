# Social Media Analytics Dashbaord

## Get Started
    ### `$ git clone "git repository url "`
    ### `$ npm install`

## Build for Development

   In the project directory, you can run:

   ### `npm start`

   Runs the app in the development mode.<br>
   Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

   The page will reload if you make edits.<br>
   You will also see any lint errors in the console.


## Testing  ABC

  * Tested with Jest & Enzyme

   ### `npm test`

   Launches the test runner in the interactive watch mode.<br>
   See the section about [running tests](#running-tests) for more information.


## Build for Production

   ### `npm run build`

   Builds the app for production to the `build` folder.<br>
   It correctly bundles React in production mode and optimizes the build for the best performance.

   The build is minified and the filenames include the hashes.<br>
   Your app is ready to be deployed!

   For the project to build, **these files must exist with exact filenames**:

  * `public/index.html` is the page template;
  * `src/index.js` is the JavaScript entry point.

   You can delete or rename the other files.

   You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
   You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

   Only files inside `public` can be used from `public/index.html`.


## Folder Structuree

   After creation, your project should look like this:

   ```
   my-app/
     README.md
     node_modules/
     package.json
     public/
       index.html
       favicon.ico
     src/
        actions/
        components/
        constants/
        containers/
        reducers/
        static/
        test/      
        App.js
        index.js
   ```
## Env Variable

REACT_APP_BASE_URL = "https://social-media.xenon.work"
