import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './styles.css'

const Button = ({ children, type, isBlock }) => (
  <button
    className={classNames('button', {
      [`type-${type}`]: type,
      'is-block': isBlock,
    })}
  >
    {children}
  </button>
)

export default Button

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf[('primary', 'secondary', 'tertiary')],
  isBlock: PropTypes.bool,
}

Button.defaultProps = {
  type: 'primary',
  isBlock: true,
}
