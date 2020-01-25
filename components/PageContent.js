import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { PrimaryHeading } from '../styles/headings';
import spacing from '../constants/spacing';

const propTypes = {
    title: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
};

class PageContent extends React.PureComponent {
    render() {
        const { title, description } = this.props;

        return (
            <RootView>
                <PrimaryHeading>{RichText.asText(title)}</PrimaryHeading>
                <RichText render={description} />
            </RootView>
        );
    }
}

PageContent.propTypes = propTypes;

export default PageContent;

const RootView = styled.div`
    h1 {
        margin-bottom: ${spacing.md};
    }
`;
