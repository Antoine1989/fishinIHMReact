import './bubbleBackground.css';
import ListSpots from './ListSpots';
import ModalSpot from './ModalSpot';
import {Container,Card,Col,Row,ListGroup,Accordion} from 'react-bootstrap';

function BubbleBackground(props) {
    const getSpots=()=>{
        const {getSpots}=props;
    }
    
return (
<body>

<div className='wrapper'>

       { /*<Container className='p-4 "justify-content-md-center"'>
        <Row className="justify-content-md-center">
            <Col md={{ span: 4, offset: 4 }}>
            <ModalSpot getSpots={getSpots}/>       
            </Col>   
         </Row>
</Container>*/}
        
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         <div><span class="dot"></span></div>
         </div>
         
</body>
)

}
export default BubbleBackground;