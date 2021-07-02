import { Card,Button } from "react-bootstrap"
export default function Moviecard({el}){
    return (<Card className="pro" style={{ width: "'18rem'"  }}>
    <Card.Img variant="top" src={el.src} style={{ width: '350px' ,height:"200px" }}/>
    <Card.Body>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text>
        {el.description}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>)
}