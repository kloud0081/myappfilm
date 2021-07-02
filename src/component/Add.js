import { useState } from "react"
import {Form,Button} from "react-bootstrap"
export default function Add({setMovie,movie}){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [posturl,setPosturl]=useState("")
    const [rating,setRating]=useState("")

 const Ajouter=()=>{
    setMovie([...movie,{title,description,posturl,rating}])
 }
    return (<div className="Add"><Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title </Form.Label>
          <input type="text" onChange={e=>setTitle(e.target.value)}/>
          <Form.Label>Description </Form.Label>
          <input type="text" onChange={e=>setDescription(e.target.value)}/>
          <Form.Label>Post Url </Form.Label>
          <input type="text" onChange={e=>setPosturl(e.target.value)}/>
          <Form.Label>Rating </Form.Label>
          <input type="text" onChange={e=>setRating(e.target.value)}/>
        </Form.Group>
        
      
      
        <Button className="buttonAdd" variant="primary" onClick={Ajouter} >
          Submit
        </Button>
      </Form></div>)
}