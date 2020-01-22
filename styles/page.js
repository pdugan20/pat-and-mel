import styled from 'styled-components';
import colors from '../constants/colors';
import { lineHeight } from '../constants/type';
import { device } from '../constants/breakpoints';
import spacing from '../constants/spacing';

export const RootView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: calc(${spacing.sm} + ${spacing.md});
    box-sizing: border-box;

    a:hover {
        text-decoration: underline;
        color: ${colors.purple};
    }

    @media ${device.tablet} {
        height: initial;
    }
`;

export const StyledDescription = styled.div`
    line-height: ${lineHeight.lh_13};

    a {
        color: ${colors.blackText};
    }
`;

export default { RootView, StyledDescription };
