import React from 'react'
import PropTypes from 'prop-types'
import { Button as Button_ } from 'reactstrap'

const Button = (props) => {
  const { text, color, onClick } = props
  return (
    <Button_ color={color} onClick={() => onClick()}>
      {text}
    </Button_>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  color: 'primary'
}

export default Button
