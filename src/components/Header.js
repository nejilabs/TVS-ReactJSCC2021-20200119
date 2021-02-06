import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title }) => {
  const eventClick = () => {
    console.log("Clicked!")
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={eventClick} />
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


