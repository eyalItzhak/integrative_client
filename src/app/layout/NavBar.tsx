import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Container, Menu, Image, Dropdown } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default observer(function NavBar() {
    const { userStore: { user, logout } } = useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src='/assets/logo.png' alt='logo' style={{ marginRight: '10px' }} />
                    TLVibe
                </Menu.Item>
                <Menu.Item as={NavLink} to='/Services' name='Services' />
                <Menu.Item position='right'>
                    <Image src={'/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text="test">
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} 
                                text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
})