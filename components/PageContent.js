import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { PrimaryHeading } from '../styles/headings';
import { Card } from '../styles/card';
import spacing from '../constants/spacing';

const propTypes = {
    title: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    hideFooter: PropTypes.bool,
};

const defaultProps = {
    hideFooter: false,
};

class PageContent extends React.PureComponent {
    render() {
        const { title, description, hideFooter } = this.props;

        return (
            <RootView>
                <Card hideGutter={hideFooter}>
                    <PrimaryHeading>{RichText.asText(title)}</PrimaryHeading>
                    <RichText render={description} />
                </Card>
            </RootView>
        );
    }
}

PageContent.propTypes = propTypes;
PageContent.defaultProps = defaultProps;

export default PageContent;

const RootView = styled.div`
    h1 {
        margin-bottom: ${spacing.md};
    }
`;
