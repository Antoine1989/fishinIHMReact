
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Card,Col,ListGroup} from 'react-bootstrap';
import FishinService from '../Service/FishinService';
import React, {Component,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './ListCaptures.css'

function ListCaptures(props) {

    const [captures, setCaptures]=useState([])

    useEffect(()=>{
        getCaptures()
    }, [])

    const {spot}= props;
    console.log('spot Id2: '+spot);
    const getCaptures=()=>{
        //var {spotId}=props;
        console.log('getCaptures spot Id: ',spot);
        FishinService.getCaptures2(spot).then((response)=>{
            setCaptures(response.data)
            console.log(response.data);
        });
    };

    const getDonnees=()=>{
        FishinService.getDonnees()
        ;
    };
    // test récupération id des params url 
    /*const { spotId } = useParams();
    console.log('spot Id: ',spotId);

    const capturesSpot = getDonnees.toString;
    console.log('captures spotId'+capturesSpot);*/
    //const {spot}= props;
   // console.log ('props capture spot : '+spot);
    

  return (
    

    < >
    
    { captures.map(
        capture=>
        <div key={capture.id} className>
        <Container className='p-4 captures'>              
               
                    {capture.type}: 
                      {capture.nomCapture} 
                
        </Container>
       
        </div>
    )}

    </>
    
    
  )
}
export default ListCaptures;