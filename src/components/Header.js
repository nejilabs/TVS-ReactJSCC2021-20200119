import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="btn1" />
      <Button color="blue" text="btn2" />
      <Button color="red" text="btn3" />
      <Button />
    </header>
  )
}

Header.defaultProps = {
  title: "Default Header Title"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header


