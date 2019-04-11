import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function(props){

    return(
        <Header>
            {/* Logo */}
            <h1>Simple</h1>
            {/* Nav */}
            <nav>
                <NavLink to="/contacts">Contacts</NavLink>
                <NavLink exact to="/">Calendar</NavLink>
                <NavLink to="/invoices">Invoices</NavLink>
            </nav>
        </Header>
    )
}

const Header = styled.header`
    height: 75px;

    padding: 10px 30px;

    box-shadow: 0px 2px 2px rgba(0,0,0,0.4);

    display: flex;
    justify-content: space-between;
    align-items: center;

    nav a {
        text-decoration: none;
        color: darkgrey;
        margin-left: 20px;

        &:first-child {
            margin-left: 0;
        }

        &:hover {
            border-bottom: 2px solid darkgrey;
        }

        &.active {
            color: black;
            border-bottom: 2px solid black;
        }
    }
`