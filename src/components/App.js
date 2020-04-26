import React, {Component} from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import '../styles/index.css';
import {Container , Row , Col} from 'reactstrap';
import SquadStats from './SquadStats';



class App extends  Component {
    render() {

        return(
            <div className='App'>
                <h1>SuperSquad</h1>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <Container>

                
                <Row>
                <Col xs="4">
                <CharacterList/>
                </Col>
                <Col xs="4">
                <HeroList/>
               </Col>
                <Col xs="4">
                    <SquadStats/>
               </Col>
                </Row>
                
                </Container>
                
                
               
            </div>

        )
    }
}

export default App;