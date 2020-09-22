import React from 'react';

function Dinner(props){
    return(
    <div>
        <h1>Today we have {props.dishName} in dinner</h1>
        <h1>Today we have {props.sweet} in dinner</h1>
        
    </div>
    );
}

export default Dinner