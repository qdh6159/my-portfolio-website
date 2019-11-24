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
          <p id="titles">Rick's World API</p>
          
          <Button theme="primary" size="lg"  block squared><span class="view">View</span></Button>

        </CardImgOverlay>
      </Card>
          </li>

          <li>
          <Card >
        <CardImg width="100%" src="my-portfolio-website/images/UNADJUSTEDNONRAW_thumb_23e8.jpg" alt="Card image cap" />
        <CardImgOverlay>
        <p id="titles">Resume</p>
          
          <Button theme="primary" size="lg"  block squared><span class="view">View</span></Button>
        </CardImgOverlay>
      </Card>
          </li>

          <li>
          <Card >
        <CardImg width="100%" src="" alt="Card image cap" />
        <CardImgOverlay>
        <p id="titles">ClientVault App</p>
          
          <Button theme="primary" size="lg"  block squared><span class="view">View</span></Button>
        </CardImgOverlay>
      </Card>
          </li>


          <li>
          <Card >
        <CardImg width="100%" src="" alt="Card image cap" />
        <CardImgOverlay>
        <p id="titles">About</p>
          
          <Button theme="primary" size="lg"  block squared><span class="view">View</span></Button>
        </CardImgOverlay>
      </Card>
          </li>
      </ul>
    </div>
  );
};

export default Cards;