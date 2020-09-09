import React from 'react'
import LazyHero from "react-lazy-hero";

const Hero = ({title}) => {
    return (
        <LazyHero 
            imageSrc="https://unsplash.it/2000/1000"
            color="rebeccapurple"
        >
            <h1>{title}</h1>
        </LazyHero>
    )
}

export default Hero
