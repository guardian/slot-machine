import React, { Component } from 'react';
//import Button from '@material-ui/core/Button';
import { Exception } from 'handlebars';

class SlotOutline extends Component {

    render() {
        
        if(!this.props.widthToHeightRatio){
            throw new Exception("No width to height ratio defined for slot outline");
        }

        const slotStyle = {
            height: "10em",
            width: 10*this.props.widthToHeightRatio + "em"
        }

        return (
            <span className="slot-outline" style={slotStyle} onClick={this.props.onClick}>
                {this.props.name}
            </span>
        )

    }

}

class SlotChooserScreen extends Component {

    render() {
  
        // TODO: parameterise slot outlines, they come from the API

        if(!this.props.onNext){
            throw new Exception("No onNext defined for slot outline");
        }

        const progress = (typ) => {
            this.props.onNext();
        }

        return (
        <div>

            <SlotOutline widthToHeightRatio={3} name="banner" onClick={()=>progress("banner")}/>
            <SlotOutline widthToHeightRatio={1} name="ad" onClick={()=>progress("ad")}/>
            <SlotOutline widthToHeightRatio={1.5} name="onwards" onClick={()=>progress("onwards")}/>

            <h2>Choose a slot type!</h2>
            
        </div>
        );
  
    }

}

class ComponentChooserScreen extends Component {

    render() {
  
        // TODO: parameterise components, they come from the API

        const progress = (typ) => {
            this.props.onNext();
        }

        return (
        <div>

            <SlotOutline widthToHeightRatio={1} name="RelatedStories" onClick={()=>progress("RelatedStories")}/>
            <SlotOutline widthToHeightRatio={1} name="CookieBanner" onClick={()=>progress("CookieBanner")}/>
            <SlotOutline widthToHeightRatio={1} name="ConsentScreen" onClick={()=>progress("ConsentScreen")}/>
            <SlotOutline widthToHeightRatio={1} name="GiveUsMoney" onClick={()=>progress("GiveUsMoney")}/>
            <SlotOutline widthToHeightRatio={1} name="MostRead" onClick={()=>progress("MostRead")}/>

            <h2>Choose a visual component!</h2>

        </div>
        );
  
    }

}

class ProgressIndicator extends Component {

    render() {

        return (
        <div className="progress-indicator">
            {this.props.page}
        </div>)

    }

}

class Wizard extends Component {

    constructor() {

        super();

        this.state = {
            currentScreen : 0
        }

    }
  
    render() {

        const progress = () => {

            console.log("progressing");

            this.setState({
                currentScreen: this.state.currentScreen + 1
            })
        }
  
        const screens = [
            <SlotChooserScreen onNext={progress}/>,
            <ComponentChooserScreen onNext={progress} />
        ]

        return (
        <div className="wizard">

            <h1>New Profile!</h1>
            {screens[this.state.currentScreen]}

            <ProgressIndicator page={this.state.currentScreen+1}/>

        </div>
        );
  
    }

  }
  
  export default Wizard;
  