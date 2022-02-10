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
            We are so excited to invite you to join us for our thrice
            rescheduled wedding reception which will take place on Saturday,
            June 4th, 2022 in Aurora, NY. We hope waiting an additional 721 days
            means you’re ready to party.
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
