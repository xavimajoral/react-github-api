## Advanon Frontend Assessment

Single Page application (SPA) which displays a list of Github users by using Github public API with an option to display detailed user data on a separate page.

## Stack
Following stack should be used in order to achieve the task:

* React (Use create-react-app or any other start kit to bootstrap your project)
* Redux (react-redux and redux)
* React router
* HTTP library of any kind (fetch - included with create-react-app, superagent etc…)
* Bootstrap (You may use react-bootstrap too for shared components if needed)
* Test runner such as Jest or Mocha (Jest comes packed with create-react-app). You can use enzyme or react-test-utils for traversing the virtual dom.

## Final objective
* Project starts up correctly and compiles without errors.
* A list of github users (avatar, login, details button) is displayed. 
* Bonus points if you can show the loading spinner before all users have been fetched.
* Bonus points if you can make “Load more users” feature
* When details button is clicked a new page with information about the user is shown. Fields (id, avatar, login, html_url) with a back button to go back to the initial list of users.
* Single user page should display the user data after refreshing the page.
* Provide a test for at least 1 react component and 1 reducer.


## Notes
* I've choosen Mocha as a test runner, Chai as assertion library and Enzyme to traverse the react components
* As you'll see I've written two simple test cases in the folder 'src/test'
    - Header.spec.js for Header Component
    - Reducer_User.spec.js for the users reducer.
* Bonus point: Loading Spinner before users have been fetched.

Install dependencies:

```bash
$ npm install
```

Start the application:

```bash
$ npm start
```

Running the tests:

```bash
$ npm test
```
