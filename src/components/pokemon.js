import React, {Component} from 'react';
import axios from 'axios';

export default class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            img: ''
        }
    }

    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon/" + this.props.idpoke
        axios
            .get(url)
            .then(resp => this.setState({nome: resp.data.name, img: resp.data.sprites.front_default}))
        }
        render() {
            return (
            <> 
            <h2>{this.state.nome}</h2>
            <img width='100vmin' src={this.state.img} alt='ola' />
            </ >)
        }
    }