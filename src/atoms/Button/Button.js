import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './styles.css'

const Button = ({ children, type }) =>
    <button
        className={classNames('button', {
            [`type-${type}`]: type
        })}>{children}</button>

export default Button

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf['primary', 'secondary']
}

Button.defaultProps = {
    type: 'primary'
}

