import React, { Component } from "react";
import { Personal } from "./personal";

class CvForm extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Personal/>
            </div>
        )
    }
}

export {CvForm}