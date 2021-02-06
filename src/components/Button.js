import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return <button onClick={onClick} style={{ backgroundColor: color }} className="btn">{text}</button>
}

Button.defaultProps = {
  text: "Button",
  color: "steelblue"
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Button