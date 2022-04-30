import React from 'react'
import Heading from '../../src/atoms/Heading'

export default {
    title: 'Atoms/Heading',
    component: Heading
}

export const Default = () => <Heading>Heading</Heading>
export const Primary = () => <Heading color="primary">Heading</Heading>
export const ExtraSmall = () => <Heading size="xs">Heading</Heading>
export const Small = () => <Heading size="sm">Heading</Heading>
export const Medium = () => <Heading size="md">Heading</Heading>



