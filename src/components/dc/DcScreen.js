import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <h1 className='m-1 text-center'>DC Screen</h1>
            <hr/>
            <HeroList
            publisher="DC Comics"
            />
        </div>
    )
}
