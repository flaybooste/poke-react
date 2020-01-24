import React from 'react';
import {Container, Paper} from '@material-ui/core';
import Pokemon from './components/pokemon';

function App() {
    return (
        <div className="App">
            <Container>
                <Paper variant="outlined">
                    <Pokemon idpoke='1'/>
                    <Pokemon idpoke='14'/>
                </Paper>
            </Container>
        </div>
    );
}

export default App;
