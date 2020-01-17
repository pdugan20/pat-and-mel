import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Page from '../layouts/main';
import { RootView, StyledDescription } from '../styles/page';
import { SecondaryLinkContainer, GlobalLink } from '../styles/links';
import { PrimaryHeading } from '../styles/headings';
import { device } from '../constants/breakpoints';
import { grid } from '../constants/dimensions';
import spacing from '../constants/spacing';

class AccommodationPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Accommodations & Travel',
        };
    }

    renderDescription = () => {
        return (
            <AccommodationDescription>
                <PrimaryHeading>Accommodations & Travel</PrimaryHeading>
                <span>
                    Reserved room blocks will be available at the following
                    locations in Aurora and can be reserved by calling{' '}
                    <a href='tel:315-364-8888'>315-364-8888</a>. Please wait
                    until Monday, January 20 before calling to reserve your
                    Accommodations.
                </span>
                <HotelDescription>
                    The Aurora Inn
                    <br />
                    <a
                        href='https://goo.gl/maps/xucn3TY2MDF9Ncyo7'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        391 Main St, Aurora, NY 13026
                    </a>
                </HotelDescription>
                <HotelDescription>
                    Wallcourt Hall
                    <br />
                    <a
                        href='https://goo.gl/maps/6A75ULxbj4D5Ypit6'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        38 Lafayette St, Aurora, NY 13026
                    </a>
                </HotelDescription>
                <span>
                    <br />
                    The airports nearest to Aurora are Ithaca (ITH) and Syracuse
                    (SYR).
                </span>
            </AccommodationDescription>
        );
    };

    renderLinkGroup = () => {
        return (
            <SecondaryLinkContainer>
                <Link href='/'>
                    <GlobalLink href='/'>Home</GlobalLink>
                </Link>
                ·
                <Link href='/schedule'>
                    <GlobalLink href='/schedule'>Schedule</GlobalLink>
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

export default AccommodationPage;

const AccommodationDescription = styled(StyledDescription)`
    text-align: left;
    max-width: ${grid.centerCol};
    margin-bottom: ${spacing.md};

    @media ${device.tablet} {
        margin: 0 0 ${spacing.md} 0;
    }
`;

const HotelDescription = styled.div`
    margin-top: ${spacing.md};
`;
