import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Page from '../layouts/main';
import { RootView, StyledDescription } from '../styles/page';
import { SecondaryLinkContainer, GlobalLink } from '../styles/links';
import { PrimaryHeading } from '../styles/headings';
import { device } from '../constants/breakpoints';
import spacing from '../constants/spacing';
import { fontWeight } from '../constants/type';
import { grid } from '../constants/dimensions';

class SchedulePage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Schedule',
        };
    }

    renderDescription = () => {
        return (
            <ScheduleDescription>
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
                    11:00pm - Afterparty, Location to be announced
                </EventDescription>
                <DateTitle>Sunday, June 14</DateTitle>
                <EventDescription>
                    Breakfast, Time & location to be announced
                </EventDescription>
            </ScheduleDescription>
        );
    };

    renderLinkGroup = () => {
        return (
            <SecondaryLinkContainer>
                <Link href='/'>
                    <GlobalLink href='/'>Home</GlobalLink>
                </Link>
                ·
                <Link href='/accomodations'>
                    <GlobalLink href='/accomodations'>
                        Accomodations & Travel
                    </GlobalLink>
                </Link>
            </SecondaryLinkContainer>
        );
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

const ScheduleDescription = styled(StyledDescription)`
    text-align: left;
    max-width: ${grid.centerCol};
    margin-bottom: ${spacing.md};

    @media ${device.tablet} {
        margin: 0 0 ${spacing.md} 0;
    }
`;

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
