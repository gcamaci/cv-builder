import React ,{ Component } from "react";
import { emptyState } from "./utils/emptyState";
class Main extends Component{
    constructor(){
        super()

        this.state = emptyState
    }


    render(){
        return(
            <div>{this.state.personal.name}</div>
        )
    }
}

export {Main}