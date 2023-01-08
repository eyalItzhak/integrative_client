import { observer } from 'mobx-react-lite';
import React from 'react';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';

export default observer(function HomePage() {
    const {modalStore } = useStore();


    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    TLVibe
                </Header>

                <>
                    <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted>
                        Login!
                    </Button>
                    <Button onClick={() => modalStore.openModal(<RegisterForm />)} size='huge' inverted>
                        Register!
                    </Button>
                </>


            </Container>
        </Segment>
    )
})