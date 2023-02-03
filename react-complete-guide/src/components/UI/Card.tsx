import { ReactNode } from 'react';
import './Card.css'

interface Props {
  children : ReactNode;
  className : string;
}

function Card (props : Props) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>
}

export default Card;