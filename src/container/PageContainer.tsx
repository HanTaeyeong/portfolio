import React from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import { IntroPage, StackPage, LifeStoryPage, ContactPage } from '../pages';

const PageBox=styled.div`
display:flex;
width:calc(90% - 20rem);
background:yellow;
`;

const PageContainer = () => {
    return (
        <PageBox>
            <Route path={["/intro", "/"]} exact={true} component={IntroPage} />
            <Route path="/stack" component={StackPage} />
            <Route path="/career" component={LifeStoryPage} />
            <Route path="/contact" component={ContactPage} />
        </PageBox>
    )
}

export default PageContainer;
