//import 'bootsrap/dist/css/bootsrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Card,Col,Row,ListGroup,Accordion} from 'react-bootstrap';
import FishinService from '../Service/FishinService';
import React, {Component,useState,useEffect} from 'react'
import './ListSpots.css'
import ListCaptures from './ListCaptures';
import ModalDelete from './ModalDelete';
import ModalSpot from './ModalSpot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faFish } from '@fortawesome/free-solid-svg-icons';
import LobsterIcon from '../ComposantsIcons/LobsterIcon';
import CrabIcon from '../ComposantsIcons/CrabIcon';
import FishIcon from '../ComposantsIcons/FishIcon';
import SquidIcon from '../ComposantsIcons/SquidIcon';
import AnchorIcon from '../ComposantsIcons/AnchorIcon';
import '../ComposantsIcons/ComposantsIcons.css';
import './ModalCapture';
import ModalCapture from './ModalCapture';
import BubbleBackground from './BubbleBackground';

function ListSpots() {

    const [spots, setSpots]=useState([])
    const [captures, setCaptures]=useState([])
    useEffect(()=>{
        getSpots()
        addSpot()
      //getCaptures()
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
    const getCaptures=()=>{
       // var spot=spot;
        
        console.log('getCaptures spot Id: ',spots);
        FishinService.getCaptures2(spots).then((response)=>{
            setCaptures(response.data)
            console.log(response.data);
           
        });
    };  
    const[message,setMessage]=useState('');

  return (
   
    <div >
      
     
        
  
   <Container className='p-4 "justify-content-md-center"'>
        <Row className="justify-content-md-center">
            <Col md={{ span: 4, offset: 4 }}>
            <ModalSpot getSpots={getSpots}/>       
            </Col>   
         </Row>
    </Container>
    <Row className="justify-content-md-center">
     <BubbleBackground /> 
     
    { spots.map(
        spot=>
        <div key={spot.id}>
        <Container className='p-4 '>
        <Row className="justify-content-md-center">
        <Col md="4">  
        </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col md="4">      
            <ListGroup variant="flush">
                <ListGroup.Item>            
                <Card className="border-white ">
                <Accordion >
                <Accordion.Header >{spot.nomSpot}<Container className='ml-4 '> <FontAwesomeIcon icon={faAnchor} />
               <ModalDelete spot={spot.id} getSpots={getSpots}/>
                </Container>
                </Accordion.Header>
                <Accordion.Body> 
                 <ListCaptures spot={spot.id}  getSpots={getSpots}/>
                </Accordion.Body>             
               </Accordion>  
                </Card>
                </ListGroup.Item>
            </ListGroup>          
        </Col>
        </Row>
        </Container>
        </div>
    )}
    </Row>
    
    </div>
    
    
  )
}

export default ListSpots;