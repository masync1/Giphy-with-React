import React from "react";
import { Row,Card } from "react-bootstrap";
export const GifGridItem = ({ title, url }) => (
    <Row >
    <Card  className="animate__animated animate__fadeInUp"  style={{ marginRight:'5rem',marginTop:'2px',height:'20rem',width: '25rem'}} >
    <Card.Img variant="top"  style={{ height:'15rem'}} src={url} />
    <Card.Body >
    <Card.Text className="text-center" style={{fontSize:'1.1rem'}}>
            {title}
      </Card.Text>
      </Card.Body>
  </Card>
  </Row>
  
  );
