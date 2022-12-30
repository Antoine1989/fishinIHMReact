//import 'bootsrap/dist/css/bootsrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Card,Col,Row,ListGroup,Accordion} from 'react-bootstrap';
import FishinService from '../Service/FishinService';
import React, {Component,useState,useEffect} from 'react'
import './ListSpots.css'
import ListCaptures from './ListCaptures';
import ModalSpot from './ModalSpot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faFish } from '@fortawesome/free-solid-svg-icons';
import LobsterIcon from '../ComposantsIcons/LobsterIcon';
import CrabIcon from '../ComposantsIcons/CrabIcon';
import FishIcon from '../ComposantsIcons/FishIcon';
import SquidIcon from '../ComposantsIcons/SquidIcon';
import AnchorIcon from '../ComposantsIcons/AnchorIcon';
import '../ComposantsIcons/ComposantsIcons.css';
import { FaAudioDescription } from 'react-icons/fa';

function ListSpots() {

    const [spots, setSpots]=useState([])

    useEffect(()=>{
        getSpots()
        addSpot()
    }, [])

    const getSpots=()=>{
        FishinService.getSpots().then((response)=>{
            setSpots(response.data)
            console.log(response.data);
        });
    };

    const addSpot=()=>{
        FishinService.addSpot().then((response)=>{
            setSpots(response.data)
            console.log(response.data);
        });
    }
    

  return (
    

    <div >
    <Container className='p-4 '>
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
            {/*<AnchorIcon/> */}
            <ModalSpot/>       
            </Col>   
         </Row>
    </Container>
    
    { spots.map(
        spot=>
        <div key={spot.id}>
        <Container className='p-4 '>
        <Col md="4">
       
            <ListGroup variant="flush">
                <ListGroup.Item>
              
                <Card className="border-white ">
                <Accordion >
                    
                
        
                <Accordion.Header style={{ backgroundColor: '#07E79D' }}>{spot.nomSpot}<Container className='ml-4 '> <FontAwesomeIcon icon={faAnchor} /></Container>{/*{spot.ville}*/}</Accordion.Header>
               {/* <Card.Body >*/}
                <Accordion.Body>
                <FishIcon/>
                <CrabIcon/>
                <LobsterIcon/>
                <SquidIcon/>
                
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