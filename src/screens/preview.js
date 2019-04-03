import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Slider from "@material-ui/lab/Slider";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import debounce from "lodash.debounce";

const slots = [
    {
        name: "small",
        height: 100,
        width: 200
    },
    {
        name: "medium",
        height: 300,
        width: 400
    },
    {
        name: "large",
        height: 600,
        width: 900
    }
];

const paperStyle = (height, width) => ({
    height: height + "px",
    width: width + "px",
    margin: "30px auto"
});

const fetchJSON = url => {};

class Preview extends Component {
    default = slots.find(slot => slot.name === "medium");

    state = {
        componentURL: "",
        format: this.default.name,
        height: this.default.height,
        width: this.default.width,
        componentMarkup: ""
    };

    handleChange = name => (event, value) => {
        this.setState({ [name]: value });

        if (name === "format") {
            const format = slots.find(slot => slot.name === value);
            this.setState({
                height: format.height,
                width: format.width
            });
        }
    };

    fetchComponent = event => {
        const value = event.target.value;
        this.setState({ componentURL: value });

        fetch(value)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    componentMarkup: json.markup
                });
            });
    };

    // press 'r' to refresh component from URL

    render() {
        return (
            <div className="preview">
                <Typography variant="h3">Preview</Typography>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        placeholder="http://localhost:3050/components/MyComponent"
                        fullWidth
                        value={this.state.componentURL}
                        onChange={this.fetchComponent}
                        margin="normal"
                    />
                    <RadioGroup
                        row
                        aria-label="Format"
                        name="format"
                        value={this.state.format}
                        onChange={this.handleChange("format")}
                    >
                        <FormControlLabel
                            value="small"
                            control={<Radio />}
                            label="Small"
                        />
                        <FormControlLabel
                            value="medium"
                            control={<Radio />}
                            label="Medium"
                        />
                        <FormControlLabel
                            value="large"
                            control={<Radio />}
                            label="Large"
                        />
                    </RadioGroup>
                    <div>
                        <Typography id="height-slider-label">Height</Typography>
                        <Slider
                            value={this.state.height}
                            aria-labelledby="height-slider-label"
                            onChange={this.handleChange("height")}
                            min={0}
                            max={1200}
                        />
                    </div>
                    <div>
                        <Typography id="width-slider-label">Width</Typography>
                        <Slider
                            value={this.state.width}
                            aria-labelledby="width-slider-label"
                            onChange={this.handleChange("width")}
                            min={0}
                            max={1200}
                        />
                    </div>
                </form>

                <Paper style={paperStyle(this.state.height, this.state.width)}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: this.state.componentMarkup
                        }}
                    />
                </Paper>
            </div>
        );
    }
}

export default Preview;
