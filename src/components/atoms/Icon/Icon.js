import React from 'react'
import { mapType } from './helpers'
import PropTypes from 'prop-types'
import './icon.css'

// TODO: Use the Atom Picture
const Icon = ({ type }) => (
  <div>
    <img src={mapType(type)}></img>
  </div>
)

Icon.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Icon
