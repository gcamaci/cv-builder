import React ,{ Component } from "react";
import '../styles/mainContent.css'
import { emptyState } from "./utils/emptyState";
import { CvForm } from "./cvForm/mainForm";
import { Preview } from "./preview/mainPreview";
class Main extends Component{
    constructor(){
        super()

        this.state = emptyState
        this.onNameChange = this.onNameChange.bind(this)
    }

    setEducation(e){

    }
    onNameChange(e){
        //spreads the name and value of target
        const { name, value } = e.target
        this.setState({
            personal: {
                //spread personal object to only select and update value of specific property
                ...this.state.personal,
                [name]:value,
            },
        })
    }
    render(){
        
        return (
            <main className="main-content">
                <CvForm onNameChange={this.onNameChange}/>
                <Preview cvInfo={this.state}/>
            </main>
        )
    }
}

export { Main }