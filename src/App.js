import { useState } from "react";
import data from "./component/AllData"
import Movielist from "./component/Movielist"
import Navb from "./component/Navb";
import Add from "./component/Add"
 import ReactStars from "react-rating-stars-component";
import "./Style.css"
function App() {
  const [movie,setMovie]=useState(data)
  const [search,setSearch]=useState("")
  const [show,setShow]=useState(false)
 const [rating,setRating]=useState(null)
const ratingChanged = (newRating) => {
  setRating(newRating);
};
  return (
    <div className="App">
         <ReactStars classNames="Starr"count={5} onChange={ratingChanged} size={24} activeColor="#ffd700"
  />
      <Navb setSearch={setSearch} rating={rating} setRating={setRating}/>
    <Movielist movie={movie} search={search} rating={rating} />
    <button className="buttontoogle" onClick={()=>setShow(!show)}>{show ? "close Add":"add new movie"}</button>
    {show  &&     <Add movie={movie} setMovie={setMovie} />
 }
    </div>
  );
}

export default App;
