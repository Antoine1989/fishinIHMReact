//import 'bootsrap/dist/css/bootsrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Card,Col,ListGroup} from 'react-bootstrap';
import FishinService from '../Service/FishinService';
import React, {Component,useState,useEffect} from 'react'




function ListSpots() {

    const [spots, setSpots]=useState([])

    useEffect(()=>{
        getSpots()
    }, [])

    const getSpots=()=>{
        FishinService.getSpots().then((response)=>{
            setSpots(response.data)
            console.log(response.data);
        });
    };
    

  return (
     /* <div className= "container">
          {
              spots.map(
                  spot=>
                  <div key={spot.id}>
        <Card>
      <Card.Header>{spot.id}</Card.Header>
      <Card.Body>
        {spot.nomSpot}
        {spot.ville}
       
      </Card.Body>
    </Card>

                  </div>
              )
    
    }
    </div>*/

    <div >
    
    { spots.map(
        spot=>
        <div key={spot.id}>
        <Container className='p-4'>
        <Col md="4">
       
       
                  
            <ListGroup variant="flush">
                <ListGroup.Item>
              
                <Card>
                <Card.Header>{spot.id} : {spot.nomSpot} </Card.Header>
                <Card.Body>
                    {spot.nomSpot}
                    {spot.ville}
                
                </Card.Body>
         </Card>
        
                </ListGroup.Item>
            </ListGroup>
            
        </Col>
        </Container>
        </div>
    )}

    </div>
    
    
  )
}


export default ListSpots;