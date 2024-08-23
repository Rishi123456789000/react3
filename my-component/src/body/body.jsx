import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Body({text,title}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>The player controls Mario,</ListGroup.Item>
      </ListGroup>
    
    </Card>
  
  );
}

export default Body;