import React from 'react';
import {Menu, Container, Button} from 'semantic-ui-react';

export default function NavBar(){
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='img.jpg'/>
                    Reactivity
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item header>
                    <Button positive content='create activity'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    );
}