import React from "react";
import styled from "styled-components";


export default props => {
    const { client } = props;
    return (
        <ClientView>
            <img src={client.thumbnailUrl} />
            <h2>{client.name}</h2>
            <p><strong>Business:</strong> {client.business}</p>
            <p><strong>Phone:</strong> {client.phone}</p>
            <p><strong>Email:</strong> {client.email}</p>

        </ClientView>
    );
};

const ClientView = styled.div`

`