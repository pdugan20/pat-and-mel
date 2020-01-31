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

    renderDescription = () => {
        return (
            <StyledDescription>
                <PrimaryHeading>Schedule</PrimaryHeading>
                <span>
                    The wedding ceremony and reception will take place at the{' '}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://innsofaurora.com/'
                    >
                        Aurora Inn
                    </a>{' '}
                    on the evening of Saturday, June 13th and there will be a
                    breakfast at a yet to be determined location the morning of
                    Sunday, June 14th.
                </span>
                <DateTitle>Saturday, June 13</DateTitle>
                <EventDescription>
                    5:00pm - Wedding Ceremony, The Aurora Inn,{' '}
                    <a
                        href='https://goo.gl/maps/xucn3TY2MDF9Ncyo7'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        391 Main St, Aurora, NY 13026
                    </a>
                </EventDescription>
                <EventDescription>
                    6:00pm - Reception, The Aurora Inn,{' '}
                    <a
                        href='https://goo.gl/maps/xucn3TY2MDF9Ncyo7'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        391 Main St, Aurora, NY 13026
                    </a>
                </EventDescription>
                <EventDescription>
                    11:00pm - Afterparty, The Fargo{' '}
                    <a
                        href='https://goo.gl/maps/RgcMvb7MF1EMV5Rc9'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        384 Main St, Aurora, NY 13026
                    </a>
                </EventDescription>
                <DateTitle>Sunday, June 14</DateTitle>
                <EventDescription>
                    Breakfast, Time & location to be announced
                </EventDescription>
            </StyledDescription>
        );
    };

    renderLinkGroup = () => {
        return <Navigation />;
    };

    renderMainColumn = () => {
        return (
            <RootView>
                {this.renderDescription()}
                {this.renderLinkGroup()}
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
