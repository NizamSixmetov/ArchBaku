import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { BiChevronRight } from 'react-icons/bi'

const Button = ({ text, buttonStyle, icon, link }) => {
  let universalClass = ''
  switch (buttonStyle) {
    case 'brown':
      universalClass = styles.brownButton
      icon = <BiChevronRight />
    default:
      break;
    case 'green':
      universalClass = styles.greenButton
      icon = <BiChevronRight />
      break;
    case 'transparent':
      universalClass = styles.transparentButton
      icon = <BiChevronRight />
      break;
    case 'transparentWhite':
      universalClass = styles.transparentButtonWhite
      icon = <BiChevronRight />
      break;
  }
  return (
    <Link to={link}>
      <button className={`d-flex align-items-center ${universalClass}`}>{text}{icon}</button>
    </Link>
  )
}

export default Button;