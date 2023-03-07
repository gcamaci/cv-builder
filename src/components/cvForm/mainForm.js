import React, { Component } from "react";
import { Personal } from "./personal";
class CvForm extends Component{
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