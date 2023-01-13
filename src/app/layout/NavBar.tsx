import { constants } from "buffer";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Menu, Image, Dropdown } from "semantic-ui-react";
import { useStore } from "../stores/store";
import { history } from "../..";

export default observer(function NavBar() {
  const {userStore: { user, logout },userStore} = useStore();
  let avatar = "defult";
  const avatarType = "avataaars";
  const avatarBackGround = "ffdfbf";

  if(!user){
    history.push("/");
  }

  if (user?.avatar) {
    avatar = user?.avatar;
    console.log(userStore.user?.avatar)
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          TLVibe
        </Menu.Item>
        <Menu.Item as={NavLink} to="/Services" name="Services" />
        <Menu.Item position="right">
          <Image
            src={`https://api.dicebear.com/5.x/${avatarType}/svg?seed=${avatar}&backgroundColor=${avatarBackGround}`}
            avatar
            spaced="right"
            size="mini"
          />
          <Dropdown pointing="top left" text={user?.username}>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to={`/profiles/${user?.username}`}
                text="My Profile"
                icon="user"
              />
              <Dropdown.Item onClick={logout} text="Logout" icon="power" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Container>
    </Menu>
  );
});
