# React Axios Task

# Task 1 React Router

- First install react router `npm i react-router-dom`
- Import `BrowserRouter` and wrap it around `<App/>` in `index.js`
- Go to `App.js` and add your `Routes` and `Route` for each page
  - `Home` -> `path='/'`
  - `PetList` -> `path='/pets'`
  - `PetDeital` -> `path='/pets/:petId'`
- Go to `Navbar.js` and edit each `<a>` tag to be `<NavLink>` dont forget to add the `to='pathName'` and remove `href`
- Go to `PetItem.js` and wrap a `<Link>` to the `button` so when you click on it, it taks you to the petDetail page.
  - Dont forget to pass the id of the pet
  - Hint: `<Link to="/pets/${pet.id}"`>
- Go to `PetDetail.js` and get the `petId` from the url using `useParams`
  - Hint: `const {petId} = useParams()`
  - Then try to use the find method on `petsData` to get the correct pet from the list
  - If there is no pet with the same `petId` return `<h1>There is no pet with the id: ${petId}</h1>`

# Task 2 React Axios

## Seting up Axios

- install axios using `npm i axios`
- Create a folder called `api` in the `src` directory
- inside this folder create a file called `index.js`
- inside `index.js` import `axios`
- use the bellow table to figure out whats the `baseURL`
- Then create an instance using this `axios.create({baseURL: baseURL})`. refer to the docs for [axios](https://axios-http.com/docs/intro)
- export as default your `instance`
 Hint: 
```js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://pets-react-query-backen.herokuapp.com",
});

export default instance;
```

## Creating our first api

- create another file in api called `pets.js`
- inside `pets.js` import the instance you just created
- create a function for each enpoint

  - one for getting all the pets
  - one for getting one pet by ID
  - one for adding a new pet
  - one for updating a pet by ID
  - one for deleting a pet by ID

- In `PetList.js` call the api using useEffect and remove the petsData `Its no longer needed pur data is now coming from the backend.`
- In `PetDetail.js` call the get by id function to get the pet and remove the `petsData`
- In `PetDetail.js` make the update button work
- In `PetDetail.js` make the delete button work
- In `Modal.js` call the api and send the new pet data 

# Endpoints

| Title            | Method   | Endpoint                                                       | Data required                               |
| ---------------- | -------- | -------------------------------------------------------------- | ------------------------------------------- |
| Get all pets     | `GET`    | `https://pets-react-query-backen.herokuapp.com/pets/`          | `no data requierd`                          |
| Get one pet by ID     | `GET`    | `https://pets-react-query-backen.herokuapp.com/pets/${pet.id}`          | `petId`                          |
| Add a new pet       | `POST`   | `https://pets-react-query-backen.herokuapp.com/pets/` | `name`, `type`, `image`,`adopted as 1 or 0` |
| Update pet by ID | `PUT`    | `https://pets-react-query-backen.herokuapp.com/pets/${pet.id}` | `name`, `type`, `image`,`adopted as 1 or 0` |
| Delete pet by ID | `DELETE` | `https://pets-react-query-backen.herokuapp.com/pets/${pet.id}` | `no data requierd`                          |
# TASK-AXIOS-react-query
