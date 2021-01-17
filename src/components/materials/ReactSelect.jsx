// ReactSelect.jsx
import React from 'react'
import Select from 'react-select';
import axios from 'axios';
import {
    Button,
    Card,
    ListItem
} from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)` 
    display: flex;
    justify-content: space-around;
    background-color: lightgreen;
    margin: 10px;
    padding: 100px;
`;

// const StyledButton = styled(Button)`
//     display: flex;
//     margin: auto;
//     padding: '0 2px 0 2px';
//     background-color: purple;
//     color: white;
//     text-transform: none;
// `;

// const StyledButton = styled.button`
const StyledButton = styled(Button)`
    background: transparent;
    margin: 0 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    padding: 0.25em 1em;
    font-size: 16px;
    text-transform: none;
    color: palevioletred;
    cursor: pointer;
    transition: 0.5s all ease-out;
 
    &:hover {
        background-color: palevioletred;
        color: white;
    }
`;

const StyledDynButton = styled.button`
    background: transparent;
    margin: 0 1em;
    border-radius: 3px;
    border: ${props =>
        props.primary ? '2px solid violet' : '2px solid palevioletred'};
    padding: 0.25em 1em;
    color: ${props => (props.primary ? 'violet' : 'palevioletred')};
    text-transform: none;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s all ease-out;

    &:hover {
        color: white;
        background-color: ${props =>
        props.primary ? 'violet' : 'palevioletred'};
    }
`;

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

class ReactSelect extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectOptions : [],
            // id: "",
            // name: ''
            value: []
        }
    }

    async getOptions() {
        const res = await axios.get(baseUrl);
        const data = res.data
    
        const options = data.map(d => ({
          "value" : d.id,
          "label" : d.name
        }))
        this.setState({selectOptions: options})
    }

    componentDidMount(){
        this.getOptions()
    }

    handleChange(e){
        this.setState({value:e})
    }

    render() {
        console.log(this.state.value)
        return (
            <div>
                <Select 
                    options={this.state.selectOptions} 
                    onChange={this.handleChange.bind(this)} 
                    isMulti 
                />
                <StyledCard border="secondary">
                {
                this.state.value === null ? "" : this.state.value.map(v =>
                    <StyledDynButton>{v.label}</StyledDynButton>)
                }
                </StyledCard>
            </div>
        )
    }
}
 
export default ReactSelect;

// eof