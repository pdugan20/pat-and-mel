import styled from 'styled-components';
import colors from '../constants/colors';
import spacing from '../constants/spacing';
import { fontSize } from '../constants/type';
import { device } from '../constants/breakpoints';

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
    width: 600px;
    text-align: left;
    margin: 0 auto;
    color: ${colors.gray};

    a {
        &:first-child {
            margin-left: 0;
        }
    }

    @media ${device.tablet} {
        width: initial;
        margin: 0 ${spacing.lg};
    }
`;

export default { LinkContainer, SecondaryLinkContainer, GlobalLink };
