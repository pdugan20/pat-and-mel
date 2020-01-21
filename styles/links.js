import styled from 'styled-components';
import colors from '../constants/colors';
import { fontSize } from '../constants/type';

export const LinkContainer = styled.div`
    display: inline;
    color: ${colors.gray};

    &::before {
        content: ' · ';
    }

    &:first-child {
        margin-left: 0;

        &::before {
            content: '';
        }
    }
`;

export const GlobalLink = styled.a`
    color: ${colors.gray};
    cursor: pointer;
    text-decoration: none;
    margin: 0;
    font-size: ${fontSize.md};
`;

export const SecondaryLinkContainer = styled.div`
    display: block;
    text-align: ${(props) => (props.centered ? 'center' : 'left')};
    margin-top: 16px;
    color: ${colors.gray};
    width: 100%;
    line-height: 1.3;
    border-top: solid ${colors.grayLight};
    border-width: ${(props) => (props.centered ? '0' : '1px')};
    padding-top: ${(props) => (props.centered ? '4px' : '8px')};
`;

export default { LinkContainer, SecondaryLinkContainer, GlobalLink };
