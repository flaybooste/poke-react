import React from 'react';
import {Container, Grid } from '@material-ui/core';
import Pokemon from './components/pokemon';
import './App.css'

function App() {
    return (
        <div className="App">
            <Container>
                <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={4}>
                    <Pokemon className="poke" idpoke='1'/>
                    </Grid>
                    <Grid item xs={4}>
                    <Pokemon className="poke" idpoke='14'/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
