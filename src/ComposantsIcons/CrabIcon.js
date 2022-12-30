import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { GiCrab} from "react-icons/gi";
import './ComposantsIcons.css'

function CrabIcon() {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Ajouter un crustacé de type crabe
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button className="square bg-gris rounded-9 ms-3 me-3"><GiCrab/></Button>
    </OverlayTrigger>
  );
}

export default CrabIcon;