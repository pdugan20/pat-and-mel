import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/main';
import HeroImage from '../components/HeroImage';
import { RootView, StyledDescription } from '../styles/page';
import Navigation from '../components/page/Navigation';

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Home',
        };
    }

    renderHeroImage = () => <HeroImage />;

    renderDescription = () => (
        <StyledDescription>
            Melanie and Pat are so excited to invite you to join us for our
            rescheduled wedding, which will be taking place in early June of
            2022 in Aurora, NY.
        </StyledDescription>
    );

    renderLinkGroup = () => <Navigation centered />;

    renderMainColumn = () => (
        <HomeRootView>
            {this.renderHeroImage()}
            {this.renderDescription()}
            {this.renderLinkGroup()}
        </HomeRootView>
    );

    render() {
        const { title } = this.state;

        return (
            <Page
                singleColumn
                title={title}
                mainColumn={this.renderMainColumn()}
            />
        );
    }
}

export default HomePage;

const HomeRootView = styled(RootView)`
    height: 100vh;
    text-align: center;
`;
