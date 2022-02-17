import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1 className='m-1 text-center'>Marvel Screen</h1>
            <hr />
            <HeroList
            publisher="Marvel Comics"
            />
        </div>
    )
}
