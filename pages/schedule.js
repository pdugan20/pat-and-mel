import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/main';
import { RootView, StyledDescription } from '../styles/page';
import { PrimaryHeading } from '../styles/headings';
import spacing from '../constants/spacing';
import { fontWeight } from '../constants/type';
import Navigation from '../components/page/Navigation';

class SchedulePage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Schedule',
        };
    }

    renderDescription = () => (
        <StyledDescription>
            <PrimaryHeading>Schedule</PrimaryHeading>
            <span>
                The wedding ceremony and reception will take place at the Dugan
                Farm (also know as the Aurora White House) at{' '}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://goo.gl/maps/MSetDYP1CFGw41hU9'
                >
                    1600 Sherwood Rd, Aurora, NY 13026
                </a>{' '}
                on the evening of Saturday, June 4, 2022.
                <br />
                <br />
                We ask that guests ride a shuttle from one of three pick-up
                locations rather than park directly at the farm. We will provide
                a list of locations closer to the ceremony.
            </span>
            <DateTitle>Saturday, June 4</DateTitle>
            <EventDescription>
                4:00pm - 4:30pm - Shuttle service from Aurora, Auburn, &
                Skaneateles
            </EventDescription>
            <EventDescription>
                5:00pm - Renawal of Vows, The Farm,{' '}
                <a
                    href='https://goo.gl/maps/MSetDYP1CFGw41hU9'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    1600 Sherwood Rd, Aurora, NY 13026
                </a>
            </EventDescription>
            <EventDescription>
                5:30pm - Cocktail hour, followed by reception, The Farm,{' '}
                <a
                    href='https://goo.gl/maps/MSetDYP1CFGw41hU9'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    1600 Sherwood Rd, Aurora, NY 13026
                </a>
            </EventDescription>
            <EventDescription>
                10:00pm - 11:00pm - Shuttle service to Aurora, Auburn, &
                Skaneateles
            </EventDescription>
            <DateTitle>Sunday, June 5</DateTitle>
            <EventDescription>
                Brunch, Time & location to be announced
            </EventDescription>
        </StyledDescription>
    );

    renderLinkGroup = () => <Navigation />;

    renderMainColumn = () => (
        <RootView>
            {this.renderDescription()}
            {this.renderLinkGroup()}
        </RootView>
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

export default SchedulePage;

const DateTitle = styled.div`
    margin-top: ${spacing.md};
    text-decoration: underline;
    font-weight: ${fontWeight.medium};
    font-size: ${spacing.md};
`;

const EventDescription = styled.div`
    display: block;
    margin: ${spacing.xs} 0;
`;
