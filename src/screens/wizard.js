import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
  
        const progress = (slot) => {
            this.props.onNext({slot: slot, SlotID: slot.id});
        }

        const slots = this.props.slots.map(
            (s)=><SlotOutline key={s.name} widthToHeightRatio={s.widthToHeightRatio} name={s.name} onClick={()=>progress(s)}/>
        );

        return (
            <div>
                <h2>Choose a slot type!</h2>
                {slots}
            </div>
        );
  
    }

}

class ComponentChooserScreen extends Component {

    render() {

        console.log("Rendering component chooser screen. My components are");
        console.log(this.props.components);

        const progress = (id) => {
            this.props.onNext({ComponentID: id});
        }
        
        const components = this.props.components
            .filter((c)=>c.SlotID === this.props.slot.id)
            .map((c)=>
                <SlotOutline 
                    key={c.Name} 
                    widthToHeightRatio={this.props.slot.widthToHeightRatio} 
                    name={c.Name} 
                    onClick={()=>progress(c.ID)}
                />
            );
        return (
            <div>
                <h2>Choose a visual component!</h2>
                {components}
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
            name: "",
            abtest: ""
        };

    }

    render() {

        const { contributor, adblock, somethingelse } = this.state;

        const progress = () => {
            this.props.onNext({
                Name: this.state.name, 
                Conditions: {
                    IsContributor: this.state.contributor,
                    ABTest: this.state.abtest
                }
            });
        }

        const nameChanged = (n) => {
            this.setState({name: n.target.value});
        }

        const abtestChanged = (a) => {
            this.setState({abtest: a.target.value});
        }

        const handleChange = (a)=> {
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

            <h2>Enter Configuration!</h2>

            <form className="rules-form">

                <div><FormControl margin="normal" fullWidth={true}>
                    <InputLabel htmlFor="name-input">Name</InputLabel>
                    <Input id="name-input" value={this.state.name} fullWidth={true} aria-describedby="name-helper-text" onChange={nameChanged}/>
                    <FormHelperText id="name-helper-text">A name for your slot profile</FormHelperText>
                </FormControl></div>

                <div><FormControl margin="normal" fullWidth={true}>
                    <InputLabel htmlFor="abtest-input">AB Test</InputLabel>
                    <Input id="abtest-input" value={this.state.abtest} fullWidth={true} aria-describedby="abtest-helper-text" onChange={abtestChanged} />
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

        </div>
        );
  
    }

}

class FinishedScreen extends Component {

    render() {

        return (
            <div>
                <p>Success! Your slot profile has been created.</p>
                <p><Link to="/">Back to home</Link></p>
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
            currentScreenIdx : 0,
            wizardData: {}
        };

    }
  
    render() {

        const screens = [
            <SlotChooserScreen slots={this.props.slots} onNext={(d)=>progress(screens, d)}/>,
            <ComponentChooserScreen slot={this.state.wizardData.slot} components={this.props.components} onNext={(d)=>progress(screens, d)} />,
            <RulesScreen onNext={(d)=>progress(screens, d)} />,
        ];

        // move to next screen

        const progress = (screens, screenData) => {

            var tmp = this.state.wizardData;
            Object.assign(tmp, screenData);
            this.setState({wizardData: tmp});

            if(this.state.currentScreenIdx < screens.length-1){
                console.log("Moving to next screen");
                this.setState({
                    currentScreenIdx: this.state.currentScreenIdx + 1
                });
            } else {
                console.log("Moving to final screen");
                this.props.save(this.state.wizardData);
                this.setState({ finished: true });
            }

        }

        const screenToShow = this.state.finished ? <FinishedScreen /> : screens[this.state.currentScreenIdx];

        return (
            <div className="wizard">

                <ProgressIndicator page={this.state.currentScreenIdx+1}/>

                { screenToShow }


            </div>
        );
  
    }

  }
  
  export default Wizard;
  