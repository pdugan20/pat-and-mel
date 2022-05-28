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
            <PrimaryHeading>Shuttles</PrimaryHeading>
            <span>
                Shuttles will be departing from Skaneateles and Auburn beginning
                at 3:45pm and from Aurora at 4:25pm. Please refer to the
                sechedule below for additional details.
            </span>

            <DateTitle>Pickup from Skaneateles and Auburn</DateTitle>
            <EventDescription>
                3:45pm - Between the Tops and Town Hall in Skaneateles (40
                Fennell St, Skaneateles)
            </EventDescription>
            <EventDescription>
                4:15pm - Bus parking garage on Lincoln and Williams in Auburn (1
                Auburn (1 Lincoln St, Auburn NY)
            </EventDescription>

            <DateTitle>Pickup from Aurora</DateTitle>
            <EventDescription>
                4:25pm - 391 Main Street Aurora NY
            </EventDescription>
            <EventDescription>
                4:45pm - 391 Main Street Aurora NY
            </EventDescription>

            <DateTitle>Evening return departures</DateTitle>
            <EventDescription>
                10:00pm, 10:30pm, 10:50pm - Return to Main Street Aurora
            </EventDescription>
            <EventDescription>
                10:15pm - Return to Skaneateles and Auburn
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
