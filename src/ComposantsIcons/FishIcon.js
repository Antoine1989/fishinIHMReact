import { FaFish } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './ComposantsIcons.css'

function LobsterIcon() {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Ajouter un poisson
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button className="square bg-gris rounded-9 ms-3 me-3"><FaFish/></Button>
    </OverlayTrigger>
  );
}

export default LobsterIcon;