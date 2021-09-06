import React from 'react'
import ButtonClicker from '../myComponents/ButtonClicker'
import DataFetching from '../myComponents/DataFetching'
import HeaderIntro from '../myComponents/HeaderIntro'

const Content = () => {
    return (
        <div>
            <HeaderIntro name="Bored API" buttonName="[GET A NEW SUGGESTION]"/>
            <DataFetching />
            <ButtonClicker />
        </div>
    );
};

export default Content
