import "./App.css";
import MiddleDividers from "./component/BooksContain";
import SimpleBottomNavigation from "./component/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Charts from "./component/Chart";

import { useState } from "react";
import SampleBooks from './SampleBooks.json';

function App() {

  const [search, setsearch] = useState("")
  
  const searchValue = (e) => {
    setsearch(e)
  }
  let title = [] , sales =[];
  SampleBooks.items.map((el) => {
    title.push(el.volumeInfo.title)
    sales.push(el.saleInfo.sales)
    // console.log(el)
  })

  return (
    <BrowserRouter>
      <SimpleBottomNavigation searchValue = {searchValue}/>
      <div className="container">
        <Routes>
          <Route path="/"  element={<MiddleDividers searchVal = {search} />} />
          <Route path="/charts" element={<Charts title = {title} sales = {sales} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
