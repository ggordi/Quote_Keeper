Quote keeper project - v2 

backend:
- utilize class based views for CRUD operation
- one model, for the Quote 
- use django's built in user model
- use prebuilt views for JWT token management

1. create model for Quote and serializers for Quote and user
2. create views for CRUD operations, both Quote and user
3. create links for CRUD operations and token/user management

frontend:
- use create react app for starting structure of project
- utilize protected routes so certain components are rendered only if the user is
  authorized, otherwise redirect the user to the login page
- home page: login form, register form option, or user dashboard information with logout option
- use context api so components have access to authorized state of user
- use jwt tokens for authentication, handle refresh of tokens periodically, decode for user information
- may use fetch, but try to implement use of axios for handling HTTP requests to django server

--> Set up react project with axios for http requests
1. set up routing with react router dom
2. create components for user login and registration
3. implement authentication context api to manage user's global authorized state
4. develop home page to conditionally show login form (w/ registration option) or greeting message (w/ logout option)
5. create a component (form) for creating Quotes --> use axios to send post request to backend api
6. create pages for viewing all Quotes, and viewing only a user's Quotes
7. add delete functionality to user specific page
8. add styling using tailwind css