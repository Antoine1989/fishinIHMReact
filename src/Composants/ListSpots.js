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
   /*const deleteSpot=(id)=>{  
        FishinService.deleteSpot(id).then((response)=>{
            setSpots(spots.filter(spot =>{return spot.id !== id;}))
            console.log(response.data)
            setMessage(response.data)
            getSpots();
        });
    }*/
   
    const captureFish="POISSON";
    const captureCrab="CRAB";
    const capturePalin="PALIN";
    const captureCephalopode="CEPHALOPODE";

  return (
    

    <div >
    <Container className='p-4 '>
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
            {/*<AnchorIcon/> */}
            {/*Test getSpots dans modale pour avoir un refresh après le post*/}
            <ModalSpot getSpots={getSpots}/>       
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
                    
                
        
                <Accordion.Header >{spot.nomSpot}<Container className='ml-4 '> <FontAwesomeIcon icon={faAnchor} />
               <ModalDelete spot={spot.id} getSpots={getSpots}/>
                </Container>{/*{spot.ville}*/}</Accordion.Header>
               {/* <Card.Body >*/}
                <Accordion.Body>
              {/* <ModalCapture spot={spot.id} capture={captureFish}  getSpots={getSpots} />
                <ModalCapture spot={spot.id} capture={captureCrab} getSpots={getSpots}/>
                <ModalCapture spot={spot.id} capture={capturePalin} getSpots={getSpots}/>
                <ModalCapture spot={spot.id} capture={captureCephalopode} getSpots={getSpots}/>*/}
               {/* <CrabIcon/>
                <LobsterIcon/>
               <SquidIcon/>*/}
                
                 <ListCaptures spot={spot.id}  getSpots={getSpots}/>
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