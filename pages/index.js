import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/main';
import HeroImage from '../components/HeroImage';

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
                Melanie and I are so excited to invite you to join us for
                wedding which will take place at 5:00PM on Saturday, June 2020
                June 2020 at the{' '}
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

    renderMainColumn = () => {
        return (
            <RootView>
                {this.renderHeroImage()}
                {this.renderDescription()}
            </RootView>
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

const RootView = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0 auto;

    img {
        margin: 0 auto;
    }
`;

const StyledDescription = styled.div`
    max-width: 450px;
    text-align: center;
    margin: 24px auto 28px auto;
    line-height: 1.3;

    a {
        color: #333;
    }
`;
