
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Card,Col,Row,ListGroup} from 'react-bootstrap';
import FishinService from '../Service/FishinService';
import React, {Component,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './ListCaptures.css';
import { GiSquid} from "react-icons/gi";
import { FaFish } from "react-icons/fa";
import { GiCrab} from "react-icons/gi";
import { GiShrimp} from "react-icons/gi";
import '../ComposantsIcons/ComposantsIcons.css';
import ModalDeleteCapture from './ModalDeleteCapture';
import ModalCapture from './ModalCapture';
import CaptureDetail from './CaptureDetail';
import {GiCanoe} from "react-icons/gi";
import {GiBoatFishing} from "react-icons/gi";
import {GiFishingPole} from "react-icons/gi";
function ListCaptures(props) {

    const [captures, setCaptures]=useState([])
    const [spots, setSpots]=useState([])


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

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

   function nameToAnimalIcon(type){

    if(type==="POISSON"){
        return<FaFish className="margin"/>
    }
    else if(type==="CEPHALOPODE"){
        return  <GiSquid className="margin"/>
    }
    else if (type==="PALINURIDAE"){
   
        return <GiShrimp className="margin"/>
        
    }
    else return <GiCrab className="margin"/>
}

    function embarcationToEmbarcationIcon(embarcation){

        if(embarcation==="Aucune"){
            return<GiFishingPole size={28} className="margin"/>
        }
        else if(embarcation==="Canoë"){
            return  <GiCanoe size={28} className="margin"/>
        }
        else if (embarcation==="Bateau"){
       
            return <GiBoatFishing size={28} className="margin"/>
            
        }
    }
  /*  else if (type==="CRUSTACE"&& name==="Langouste"){
        return <GiShrimp className="margin"/>
    }
    else if (type==="CRUSTACE"&& name==="Bouquet"){
        return <GiShrimp className="margin"/>
    }
    else if (type==="CRUSTACE"&& name==="Crevettes"){
        return <GiShrimp className="margin"/>
    }*/
    const showDetails=(nom,date,quantite,poids,longueur,spot,technique,embarcation,maree,coef,commentaires,photo)=>{
        return <CaptureDetail show={show} nom={nom} date={date} quantite={quantite} poids={poids} longueur={longueur}
                            spot={spot} technique={technique} embarcation={embarcation} maree={maree} coef={coef} commentaires={commentaires} photo={photo}/>
    }
    
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
        (capture,id)=>
        <div key={id}   >
{/* <CaptureDetail show={show} key={capture.id} handleClose={handleClose} nom={capture.nomCapture} date={capture.date_peche} quantite={capture.quantite} poids={capture.poid} longueur={capture.longueur}
                             technique={capture.technique} embarcation={capture.embarcation} maree={capture.maree} coef={capture.coef} commentaires={capture.commentaires} photo={capture.photo}/>*/ }
        
        <Container className='p-4 captures' >         
        <Row >
             <Col onClick={() => setShow(true)}>{nameToAnimalIcon(capture.type)} </Col> 
             <Col> {embarcationToEmbarcationIcon(capture.embarcation)}</Col>  
             <Col><ModalDeleteCapture capture={capture.id} getCaptures={getCaptures}/></Col>
        </Row>                         
         <Row>
             <Col><span hidden="hidden"> {capture.type}: </span></Col>
        </Row>
        <Row>
            <Col><span className="margin"> {capture.nomCapture}</span></Col>
            <Col><span className="margin">{" "+capture.poids+" kg"} {" "+capture.longueur+" cm"}</span> </Col></Row>
        <Row>
            <Col> <span className="margin"> {capture.date_peche} </span></Col>
            <Col><span className="margin"> {capture.technique} </span></Col>               
        </Row> 

        <CaptureDetail show={show} capture={capture.id} handleClose={handleClose} nom={capture.nomCapture} date={capture.date_peche} quantite={capture.quantite} poids={capture.poids} longueur={capture.longueur}
                             technique={capture.technique} embarcation={capture.embarcation} maree={capture.maree} coef={capture.coef} commentaires={capture.commentaires} photo={capture.photo} spot={spot}/>
        </Container>
       
        </div>
    )}

    </>
    
    
  )
}
export default ListCaptures;