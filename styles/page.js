import styled from 'styled-components';
import colors from '../constants/colors';
import { lineHeight } from '../constants/type';
import { device } from '../constants/breakpoints';

export const RootView = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 24px;
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
