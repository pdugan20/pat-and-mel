import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Page from '../layouts/main';
import PageContent from './PageContent';

const propTypes = {
    title: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
};

class PageBase extends React.PureComponent {
    renderMainColumn() {
        const { title, description } = this.props;

        return <PageContent title={title} description={description} />;
    }

    render() {
        const { title } = this.props;

        return (
            <Page
                title={RichText.asText(title)}
                mainColumn={this.renderMainColumn()}
            />
        );
    }
}

PageBase.propTypes = propTypes;

export default PageBase;
