import React ,{ Component } from "react";
import { emptyState } from "./utils/emptyState";
import { CvForm } from "./cvForm/mainForm";
import { Preview } from "./preview/mainPreview";
class Main extends Component{
    constructor(){
        super()

        this.state = emptyState
    }


    render(){
        
        return (
            <div>
                <CvForm/>
                <Preview cvInfo={this.state}/>
            </div>
        )
    }
}

export { Main }