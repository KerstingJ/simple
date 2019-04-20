import React from 'react';
import styled from 'styled-components';
import {NavLink, withRouter} from 'react-router-dom';

import {theme} from '../config'

export default withRouter(function(props){
    const pushHome = event => {
        console.log(props.history.push("/"))
    }
    return(
        <Header>
            <h1 onClick={pushHome}>Simple</h1>
            <nav>
                <NavLink exact to="/">Home</NavLink>
            </nav>
        </Header>
    )
})

const Header = styled.header`
    width: 100%;
    min-height: 100px;
    padding: 0 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        padding: 10px 0;
    }

    nav {
        height: 100%;

        a {
            display: block;
            font-size: 2rem;
            height: 100%;
            transition: .25s;

            &:hover {
                border-bottom: 1px solid white;
            }
        }
    }
`