import Moviecard from "./MovieCard"
export default function Movielist({movie,search,rating}){

console.log(rating)
if (rating===null)
    return (<div className="listmovie" >{movie.filter(el=>el.title.toLowerCase().includes(search) ).map((el,i)=><Moviecard el={el}/>)}</div>)
  else return (<div className="listmovie" >{movie.filter(el=>el.title.toLowerCase().includes(search) &&   el.rating>=rating ).map((el,i)=><Moviecard el={el}/>)}</div>)  
}