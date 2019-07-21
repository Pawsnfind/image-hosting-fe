import React from "react";
import { connect } from 'react-redux';
import { Card,  Button } from "react-bootstrap";

import "./topnine.css";

export default class ImageCard extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      showForm: false,
    }
  }
  
  delete = (event) => {
  
  }

  render() {
    const image_url = this.props.item.image_url !== null &&  this.props.item.image_url !== "" ? this.props.item.image_url : './img/logo.png';
    console.log(this.props);
    return (
      <React.Fragment>
 
      <Card className="item-card">
 
        <div className='card-img-container'> 
          <Card.Img className='card-img' variant="top" src={image_url} />
        </div>
        <div className='buttons'>
       
          <Button onClick={this.delete} size="sm" variant="danger">Delete</Button>
        </div>  
         
      </Card>
      </React.Fragment>
    
    );
  }
}
 