import React, {Component} from 'react';
import { Typography } from '@material-ui/core';
import axios from 'axios';


export default class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            img: '',
            abi:''
        }
    }

    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon/" + this.props.idpoke
        axios
            .get(url)
            .then(resp => {
                this.setState({nome: resp.data.name, img: resp.data.sprites.front_default, abi:resp.data.abilities[0].ability.name});
            });
        }

        render() {
            return (
            <>
                <img alt='poke' width='180vmin;' src={this.state.img} />
                <Typography variant="h4">{this.state.nome.toUpperCase()}</Typography>
                <Typography variant="subtitle1">{this.state.abi.toUpperCase()}</Typography>
            </ >)
        }
    }
