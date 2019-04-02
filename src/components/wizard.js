import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { Exception } from 'handlebars';

class SlotOutline extends Component {

    render() {

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
  
        const progress = (typ) => {
            this.props.onNext({slotType: typ});
        }

        const slots = this.props.slots.map(
            (s)=><SlotOutline widthToHeightRatio={s.widthToHeightRatio} name={s.name} onClick={()=>progress(s.name)}/>
        );

        return (
            <div>
                {slots}
                <h2>Choose a slot type!</h2>
            </div>
        );
  
    }

}

class RulesScreen extends Component {

    constructor() {

        super();

        this.state = {
            contributor: true,
            adblock: false,
            somethingelse: false,
          };

    }

    render() {

        const { contributor, adblock, somethingelse } = this.state;

        const progress = () => {
            this.props.onNext({
                name: "todo", 
                abtest: "todo", 
                flags: {
                    contributor: this.state.contributor,
                    adblock: this.state.adblock
                }
            });
        }

        const handleChange = (a)=>{
            if(a === "contributor"){
                this.setState({contributor: !this.state.contributor})
            } else if(a === "adblock"){
                this.setState({adblock: !this.state.adblock})
            } else if(a === "somethingelse"){
                this.setState({somethingelse: !this.state.somethingelse})
            }
        };
        
        return (
        <div>

            <form className="rules-form">

                <div><FormControl margin="normal" fullWidth={true}>
                    <InputLabel htmlFor="name-input">Name</InputLabel>
                    <Input id="name-input" fullWidth={true} aria-describedby="name-helper-text" />
                    <FormHelperText id="name-helper-text">A name for your slot profile</FormHelperText>
                </FormControl></div>

                <div><FormControl margin="normal" fullWidth={true}>
                    <InputLabel htmlFor="abtest-input">AB Test</InputLabel>
                    <Input id="abtest-input" fullWidth={true} aria-describedby="abtest-helper-text" />
                    <FormHelperText id="abtest-helper-text">All slot profiles must have an AB Test</FormHelperText>
                </FormControl></div>

                <FormControl component="fieldset" margin="normal" fullWidth={true}>
                    <FormLabel component="legend">Set Flags</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                        control={
                            <Checkbox checked={contributor} onChange={()=>handleChange('contributor')} value="gilad" />
                        }
                        label="Must be contributor"
                        />
                        <FormControlLabel
                        control={
                            <Checkbox checked={adblock} onChange={()=>handleChange('adblock')} value="jason" />
                        }
                        label="Must have adblock enabled"
                        />
                        <FormControlLabel
                        control={
                            <Checkbox
                            checked={somethingelse}
                            onChange={()=>handleChange('somethingelse')}
                            value="antoine"
                            />
                        }
                        label="Something else"
                        />
                    </FormGroup>

                    <div>
                        <FormControl margin="normal" fullWidth={true}>
                            <Button variant="contained" color="primary" onClick={progress}>
                                Finish
                            </Button>
                        </FormControl>
                    </div>



                </FormControl>

            </form>

            <h2>Enter Configuration!</h2>

        </div>
        );
  
    }

}

class ComponentChooserScreen extends Component {

    render() {
  
        const progress = (name) => {
            this.props.onNext({component: name});
        }

        const components = this.props.components.map(
            (s)=><SlotOutline widthToHeightRatio={1} name={s.name} onClick={()=>progress(s.name)}/>
        );

        return (
            <div>
                {components}
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
            </div>
        )

    }

}

class Wizard extends Component {

    constructor() {

        super();

        this.state = {
            currentScreen : 0,
            wizardData: {}
        }

    }
  
    render() {

        // wizard finished (no more screens)

        const finished = () => {
            this.props.onFinished(this.state.wizardData);
        }

        // move to next screen

        const progress = (screens, screenData) => {

            var tmp = this.state.wizardData;
            Object.assign(tmp, screenData);
            this.setState({wizardData: tmp});

            if(this.state.currentScreen === screens.length-1){
                finished();
                return;
            }

            this.setState({
                currentScreen: this.state.currentScreen + 1
            });

        }

        const screens = [
            <SlotChooserScreen slots={this.props.slots} onNext={(d)=>progress(screens, d)}/>,
            <ComponentChooserScreen components={this.props.components} onNext={(d)=>progress(screens, d)} />,
            <RulesScreen onNext={(d)=>progress(screens, d)} />
        ];

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
  