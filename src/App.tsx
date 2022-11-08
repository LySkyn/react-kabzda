import React, {useState} from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion'
import {Rating, RatingValueType} from './Components/Rating/Rating'
import {UncontrolledRating} from "./Components/Rating/UncontrolledRating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from './Components/Accordion/UncontrolledAccordion';

function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue]= useState<RatingValueType>(0)
    return (
        <div className={'App'}>
            <OnOff/>
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
        </div>
    )
};


export default App;
