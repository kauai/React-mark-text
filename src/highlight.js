import React from 'react'
import { lower } from './utils'

const Highlight = ({ children, toHighLight }) => {
    const regex = new RegExp(`(${toHighLight})`,'i')
    return (
        children.split(regex).map((item,key) => {
            if(lower(item) == lower(toHighLight)){
                return <mark key={key}>{ item }</mark>
            }else{
                return item
            }
        })
    )
}

export default Highlight
