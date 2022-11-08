import React, {useState} from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion'
import {Rating, RatingValueType} from './Components/Rating/Rating'
import {UncontrolledRating} from "./Components/Rating/UncontrolledRating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from './Components/Accordion/UncontrolledAccordion';
import UncontrolledOnOff from "./Components/OnOff/UncontrolledOnOff";

function App() {
    console.log("App rendering")
    const [switchOn, setSwitchOn] = useState(false)
    const [collapsedAccordion, setCollapsedAccordion] = useState(false)
    const [ratingValue, setRatingValue]= useState<RatingValueType>(0)
    return (
        <div className={'App'}>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            <Accordion titleValue={"Menu"} collapsed={collapsedAccordion} onChange={() => setCollapsedAccordion(!collapsedAccordion)}/>
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledRating/>*/}
        </div>
    )
};


export default App;
