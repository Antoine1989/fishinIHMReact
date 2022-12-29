//import 'bootsrap/dist/css/bootsrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Card,Col,ListGroup,Accordion} from 'react-bootstrap';
import FishinService from '../Service/FishinService';
import React, {Component,useState,useEffect} from 'react'
import './ListSpots.css'
import ListCaptures from './ListCaptures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faFish } from '@fortawesome/free-solid-svg-icons';


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
        <Container className='p-4 '>
        <Col md="4">
       
            <ListGroup variant="flush">
                <ListGroup.Item>
              
                <Card className="border-white ">
                <Accordion >
                    
                
        
                <Accordion.Header style={{ backgroundColor: '#07E79D' }}>{spot.nomSpot} <FontAwesomeIcon icon={faAnchor} />{/*{spot.ville}*/}</Accordion.Header>
               {/* <Card.Body >*/}
                <Accordion.Body>
                <FontAwesomeIcon icon={faFish} />
                <FontAwesomeIcon icon={faFish} />
                    <ListCaptures spot={spot.id}/>
                </Accordion.Body>
               {/* </Card.Body>*/}
               
               </Accordion>
                
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