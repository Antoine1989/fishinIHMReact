import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaAnchor} from "react-icons/fa";
import './ComposantsIcons.css'

function AnchorIcon() {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Ajouter un nouveau spot de pêche
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button  className="square bg-gris rounded-9 ms-3 me-3"><FaAnchor/></Button>
    </OverlayTrigger>
  );
}

export default AnchorIcon;