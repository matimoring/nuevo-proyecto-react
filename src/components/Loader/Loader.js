import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';



export default function CircularUnderLoad() {
    return (    
        <div>
        <div>
        <div> {!txt ? <CircularProgress/> : 
            <h1> Loading Complete </h1>}
        </div> </div>
    </div>
    );
}

