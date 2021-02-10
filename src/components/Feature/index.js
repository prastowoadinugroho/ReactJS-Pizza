import React from 'react'
import { 
    FeatureContainer,
    FeatureButton
} from './featureElement';
const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the day</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <FeatureButton>
                Order Now
            </FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;
