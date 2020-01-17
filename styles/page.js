import styled from 'styled-components';
import colors from '../constants/colors';
import spacing from '../constants/spacing';
import { lineHeight } from '../constants/type';
import { device } from '../constants/breakpoints';

export const RootView = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0 auto;

    img {
        margin: 0 auto;
    }

    a:hover {
        text-decoration: underline;
        color: ${colors.purple};
    }

    @media ${device.tablet} {
        height: initial;
        margin-top: ${spacing.lg};
    }
`;

export const StyledDescription = styled.div`
    max-width: 450px;
    text-align: center;
    margin: 24px auto 28px auto;
    line-height: ${lineHeight.lh_13};
    padding: 0 ${spacing.lg};

    a {
        color: ${colors.blackText};
    }
`;

export default { RootView, StyledDescription };
