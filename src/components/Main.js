import React ,{ Component } from "react";
import { emptyState } from "./utils/emptyState";
import { CvForm } from "./cvForm/mainForm";
class Main extends Component{
    constructor(){
        super()

        this.state = emptyState
    }


    render(){
        return(
            <div>
                <CvForm/>
            </div>
        )
    }
}

export {Main}