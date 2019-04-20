import React, {useEffect} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

import Header from '../components/Header'

function MainView(props){
    useEffect(()=>{
    }, [])

    return (<>
        <Header />
        <div>
        </div>
    </>)
}

export default connect(state => ({
}), {
})(MainView)