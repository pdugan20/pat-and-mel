import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/main';
import Navigation from '../components/page/Navigation';
import { RootView, StyledDescription } from '../styles/page';
import AuroraMap from '../components/Map';
import { PrimaryHeading } from '../styles/headings';
import spacing from '../constants/spacing';

class AccommodationPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Accommodations & Travel',
        };
    }

    renderDescription = () => (
        <StyledDescription>
            <PrimaryHeading>Accommodations & Travel</PrimaryHeading>
            <span>
                A reserved room block is available in Auburn and can be reserved
                by referencing the Gunderson Dugan wedding when calling{' '}
                <a href='tel:315-252-7247'>315-252-7247</a>.
            </span>
            <HotelDescription>
                The Springside Inn
                <br />
                <a
                    href='https://goo.gl/maps/YYo7Xc8dwdu6B6MJA'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    6141 W Lake Rd, Auburn, NY 13021
                </a>
            </HotelDescription>
            <AuroraMap />
            <span>
                <br />
                Additional accomodation recommendations include:
            </span>
            <HotelDescription>
                Hilton Garden Inn
                <br />
                <a
                    href='https://goo.gl/maps/j6cAczQDMwp5ZXTW9'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    74 State St, Auburn, NY 13021
                </a>
            </HotelDescription>
            <HotelDescription>
                Packwood House
                <br />
                <a
                    href='https://goo.gl/maps/EkXhCEWWSSW8FS9X9'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    14 W Genesee St, Skaneateles, NY 13152
                </a>
            </HotelDescription>
            <HotelDescription>
                Arbor House
                <br />
                <a
                    href='https://goo.gl/maps/FRCMvcmy1fziujvN7'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    41 Fennell St, Skaneateles, NY 13152
                </a>
            </HotelDescription>
            <span>
                <br />
                The airports nearest to Aurora are Ithaca (ITH), Syracuse (SYR),
                and Rochester (ROC).
            </span>
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

export default AccommodationPage;

const HotelDescription = styled.div`
    margin-top: ${spacing.md};
`;
