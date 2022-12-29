//import 'bootsrap/dist/css/bootsrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Card,Col,ListGroup} from 'react-bootstrap';
import FishinService from '../Service/FishinService';
import React, {Component,useState,useEffect} from 'react'
import './ListSpots.css'
import ListCaptures from './ListCaptures';


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
    

    <div >
    
    { spots.map(
        spot=>
        <div key={spot.id}>
        <Container className='p-4'>
        <Col md="4">
       
       
                  
            <ListGroup variant="flush">
                <ListGroup.Item>
              
                <Card className="border-white">
                <Card.Header className="entete">{spot.nomSpot} {spot.ville}</Card.Header>
                <Card.Body >
                    
                    <ListCaptures spot={spot.id}/>
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