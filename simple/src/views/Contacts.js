import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Header from "../components/Header";
import Contact from "../components/Contact";

import { getClients } from "../actions/clientActions";

/* 

    This should be a contacts list like view.
    showing a list of names in alphabetical order
        - when you click on a name it should expand to show contact information
        - and also give you the ability to expand into a view showing all information for that contact

*/

function ContactsView(props) {
  const { clients } = props;

  useEffect(() => {
    props.getClients();
  }, []);

  return (
    <div>
      <Header />
      <Contacts>
        {clients ? (
          clients.map(client => <Contact key={client.id} client={client} />)
        ) : (
          <div>You dont have any clients\nWhy dont you add one!</div>
        )}
      </Contacts>
    </div>
  );
}

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const mstp = state => {
  console.log(state);
  return {
    clients: state.clients.clients
  };
};

export default connect(
  mstp,
  {
    getClients
  }
)(ContactsView);
