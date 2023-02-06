
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Card,Col,Row,ListGroup} from 'react-bootstrap';
import FishinService from '../Service/FishinService';
import React, {Component,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './ListCaptures.css';
import { GiSquid} from "react-icons/gi";
import { FaFish } from "react-icons/fa";
import { GiCrab} from "react-icons/gi";
import '../ComposantsIcons/ComposantsIcons.css';
import ModalDeleteCapture from './ModalDeleteCapture';
import ModalCapture from './ModalCapture';
function ListCaptures(props) {

    const [captures, setCaptures]=useState([])
    const [spots, setSpots]=useState([])

    useEffect(()=>{
        getCaptures()
        
    }, [])
    
    const {getSpots}=props;
    const {spot}= props;
    console.log('spot Id2: '+spot);
    const getCaptures=()=>{
        //var {spotId}=props;
        
        console.log('getCaptures spot Id: ',spot);
        FishinService.getCaptures2(spot).then((response)=>{
            setCaptures(response.data)
           // setSpots(response.data);
            getSpots();
            console.log(response.data);
        });
    };

    /*const getDonnees=()=>{
        FishinService.getDonnees()
        ;
    };/

    /*const type=()=>{
        getDonnees().type;
        console.log('type get donnees'+ getDonnees().type)
    }*/
    // test récupération id des params url 
    /*const { spotId } = useParams();
    console.log('spot Id: ',spotId);

    const capturesSpot = getDonnees.toString;
    console.log('captures spotId'+capturesSpot);*/
    //const {spot}= props;
   // console.log ('props capture spot : '+spot);

   /*function getIcon(capture.type){
    if (capture.type==="POISSON" ){

    }
   }*/
   const captureFish="POISSON";
   const captureCrab="CRAB";
   const capturePalin="PALIN";
   const captureCephalopode="CEPHALOPODE";

  return (
    

    < >
    <ModalCapture spot={spot} capture={captureFish}  getSpots={getSpots} getCaptures={getCaptures}/>
    <ModalCapture spot={spot} capture={captureCrab}  getSpots={getSpots} getCaptures={getCaptures}/>
    <ModalCapture spot={spot} capture={capturePalin}  getSpots={getSpots} getCaptures={getCaptures}/>
    <ModalCapture spot={spot} capture={captureCephalopode} getSpots={getSpots} getCaptures={getCaptures}/>
    { captures.map(
        capture=>
        <div key={capture.id} >
        <Container className='p-4 captures'>                             
                  <Row><span hidden="hidden"> {capture.type}: </span>
                   <span className="margin"> {capture.nomCapture} </span><span className="margin"> {capture.date_peche} </span>
              {capture.type==="POISSON"? <FaFish className="margin"/>:(capture.type==="CRUSTACE"?<GiCrab className="margin"/>:<GiSquid className="margin"/>)}  <ModalDeleteCapture capture={capture.id} getCaptures={getCaptures}/> </Row>             
        </Container>
       
        </div>
    )}

    </>
    
    
  )
}
export default ListCaptures;