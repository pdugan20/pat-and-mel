import styled from 'styled-components';
import colors from '../constants/colors';
import spacing from '../constants/spacing';
import { fontSize } from '../constants/type';

export const LinkContainer = styled.div`
    display: inline;
    color: ${colors.gray};
`;

export const GlobalLink = styled.a`
    color: ${colors.gray};
    cursor: pointer;
    text-decoration: none;
    margin: 0 ${spacing.xs};
    font-size: ${fontSize.md};
`;

export const SecondaryLinkContainer = styled.div`
    display: block;
    text-align: ${(props) => (props.centered ? 'center' : 'left')};
    margin-top: 16px;
    color: ${colors.gray};
    width: 100%;
    border-top: solid ${colors.grayLight};
    border-width: ${(props) => (props.centered ? '0' : '1px')};
    padding-top: ${(props) => (props.centered ? '4px' : '8px')};

    a {
        &:first-child {
            margin-left: 0;
        }
    }
`;

export default { LinkContainer, SecondaryLinkContainer, GlobalLink };
