import React from 'react';

import { Button } from "shards-react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardGroup,Row, Col } from 'reactstrap';

const Cards = (props) => {
  return (
    <div class="myCards">
      <ul>
          <li>
          <Card >
        <CardImg width="100%" src="https://cdn.shopify.com/s/files/1/1721/2115/products/RickandMorty_1024x1024.jpg?v=1539628583" alt="Card image cap" />
        <CardImgOverlay>
          <h1>Card Title</h1>
          
          <Button theme="secondary">Go</Button>

        </CardImgOverlay>
      </Card>
          </li>

          <li>
          <Card >
        <CardImg width="100%" src="https://cdn.shopify.com/s/files/1/1721/2115/products/RickandMorty_1024x1024.jpg?v=1539628583" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
          </li>

          <li>
          <Card >
        <CardImg width="100%" src="https://cdn.shopify.com/s/files/1/1721/2115/products/RickandMorty_1024x1024.jpg?v=1539628583" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
          </li>
      </ul>
    </div>
  );
};

export default Cards;