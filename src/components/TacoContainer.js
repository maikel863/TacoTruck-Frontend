import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index'
import TacoCard from './TacoCard'

export default function TacoContainer() {

    const [tacos, setTacos] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + '/tacos')
        .then(r => r.json())
        .then(json => setTacos(json))
    }, [])

    function showTacos() {
        return tacos.map(taco => <TacoCard taco={taco} key={taco.id} />)
    }

    return (
        <div>
            {tacos && showTacos()}
        </div>
    )
}