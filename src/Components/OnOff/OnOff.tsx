import React, {useState} from 'react';

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

const OnOff = (props: PropsType) => {
    console.log('OnOff rendering')
    // const [on, setOn] = useState(false)
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on? 'green' : ''
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: !props.on ?'red' : ''
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on? 'green' : 'red'

    };
    return (
        <div>
            <div style={onStyle} onClick={() => props.onChange(true)}>On</div>
            <div style={offStyle} onClick={() => props.onChange(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;