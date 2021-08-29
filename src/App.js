import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import FullRecipe from "./components/FullRecipe";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const MyContext = React.createContext();

function App() {
  const [mealData, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [text, setText] = useState("");

  const APP_ID = "3e9b93d9";
  const APP_KEY = "84414dabba455cda071962932155fae4";

  useEffect(() => {
    async function getData() {
      await fetch(
        `https://api.edamam.com/search?q=${text}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data.hits);
        })

        .catch((error) => console.log(alert(error)));
    }
    getData();
  }, [text]);

  const handleChange = (e) => {
    e.preventDefault();
    // console.log("from handleChange",e.target.value);
    setInputText(e.target.value);
  };

  //needed to sepreate onSubmit function as due to `onchange` every time
  //user enters a alphabet use effect runs (when useEffect has `inputText` dependency)

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(inputText);
  };

  return (
    <Router>
      <div>
        <h1> Recipe Finder </h1>
        <form className="search-bar">
          <input
            placeholder="enter recipe name"
            type="text"
            value={inputText}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <button onClick={handleSubmit}> Search </button>
        </form>

        <MyContext.Provider value={{ mealData }}>
          <Route exact path="/">
            <div className="recipes">
              <Recipe />
            </div>
          </Route>

          <Route path="/:index">
            <FullRecipe />
          </Route>
        </MyContext.Provider>
      </div>
    </Router>
  );
}

export default App;

