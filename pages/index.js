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

    renderHeroImage = () => {
        return <HeroImage />;
    };

    renderDescription = () => {
        return (
            <StyledDescription>
                Melanie and Pat are so excited to invite you to join us for our
                wedding which will take place at 5:00PM on Saturday, June 13,
                2020 at the{' '}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://innsofaurora.com/'
                >
                    Aurora Inn
                </a>{' '}
                in Aurora, NY.
            </StyledDescription>
        );
    };

    renderLinkGroup = () => {
        return <Navigation centered />;
    };

    renderMainColumn = () => {
        return (
            <HomeRootView>
                {this.renderHeroImage()}
                {this.renderDescription()}
                {this.renderLinkGroup()}
            </HomeRootView>
        );
    };

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
