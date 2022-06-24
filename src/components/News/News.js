import React from 'react';
import { Col, Card } from 'react-bootstrap';

const News = (props) => {
   const {title, description, author, urlToImage, url, publishedAt, content} = props.news;
   return (
      <Col>
         <Card>
         <Card.Img variant="top" src={urlToImage} />
         <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
               {description}
            </Card.Text>
         </Card.Body>
         </Card>
      </Col>
   );
};

export default News;