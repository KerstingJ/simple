import React, {useState} from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

export default withRouter(function(props){
    const {client} = props;
    const [isToggled, setToggle] = useState(false);

    const toggleExpand = event => {
        event.preventDefault();
        setToggle(!isToggled)
    }

    return (
        <Contact>
            <div 
                className="cName"
                onClick={toggleExpand}
            >
                <h3>{client.name.toUpperCase()}</h3>
                <button 
                    className="exBtn"
                    onClick={event => event.preventDefault()}
                >{isToggled ? "COLLAPSE" : "EXPAND"}</button>
            </div>
            <div className={`cInfo${isToggled ? " expanded" : ""}`}>
                <div className="quickInfo">
                    <p><strong>Phone: </strong>{client.phone}</p>
                    <p><strong>Email: </strong>{client.email}</p>
                </div>
                <button 
                    className="clientViewButton"
                    onClick={event => {
                        event.preventDefault()
                        props.history.push(`/client/${client.id}`)
                    }}
                >See More</button>
            </div>
        </Contact>
    )
})

const Contact = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 15px;
    border-bottom: 1px solid black;

    width: 100%;
    max-width: 600px;

    /* border: 1px solid red; */

    .cName {
        width: 100%;
        padding: 15px 0;

        display: flex;
        justify-content: space-between;

        .exBtn {
            border: none;
            background: none;

            font-size: 1rem;
            color: grey;
        }
    }

    .cInfo {
        text-align: left;
        display: none;
        width: 100%;

        &.expanded {
            display: flex;
            justify-content: space-between;
        }

        .clientViewButton {
            padding: 0 1rem;
            border: 1px solid lightgrey;
            border-radius: 5px;
            background: inherit;
        }
    }

`