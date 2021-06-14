import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Page from '../layouts/main';
import Navigation from '../components/page/Navigation';
import { RootView } from '../styles/page';
import { PrimaryHeading } from '../styles/headings';
import { getPageData } from '../utils/page';

const propTypes = {
    title: PropTypes.array.isRequired,
    story: PropTypes.array.isRequired,
};

class StoryPage extends React.PureComponent {
    static async getInitialProps(context) {
        const { req } = context;
        const page = await getPageData(req, 'our_story');

        return {
            title: page.data.title,
            story: page.data.story,
        };
    }

    renderMainColumn = () => (
        <StyledRootView>
            {this.renderStory()}
            {this.renderLinkGroup()}
        </StyledRootView>
    );

    renderLinkGroup = () => <Navigation />;

    renderStory = () => {
        const { title, story } = this.props;
        return (
            <>
                <PrimaryHeading>{RichText.asText(title)}</PrimaryHeading>
                <RichText render={story} />
            </>
        );
    };

    render() {
        const { title } = this.props;
        return (
            <Page
                singleColumn
                title={RichText.asText(title)}
                mainColumn={this.renderMainColumn()}
            />
        );
    }
}

StoryPage.propTypes = propTypes;

export default StoryPage;

const StyledRootView = styled(RootView)`
    display: flex;
`;
