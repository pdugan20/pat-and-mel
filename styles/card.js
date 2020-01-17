import styled from 'styled-components';
import colors from '../constants/colors';
import spacing from '../constants/spacing';
import { borderRadius, grid } from '../constants/dimensions';
import { lineHeight, fontSize } from '../constants/type';
import { device } from '../constants/breakpoints';

export const Card = styled.div`
    background-color: ${colors.white};
    border: 1px solid ${colors.gray};
    border-radius: ${borderRadius.sm};
    padding: ${(props) => (props.noPadding ? 0 : spacing.md)};
    margin-bottom: ${(props) => (props.lastChild ? grid.gutter : spacing.md)};

    @media ${device.tablet} {
        border-radius: 0;
        border: none;
        border-bottom: solid ${colors.grayLight};
        border-width: ${(props) => (props.hideGutter ? 0 : '3px')};
        margin-bottom: 0;
    }
`;

export const CardContent = styled.div`
    border-top: 1px solid ${colors.gray};
    padding: ${spacing.md};
    line-height: ${lineHeight.lh_13};

    @media ${device.tablet} {
        border-top: 3px solid ${colors.grayLight};
        font-size: ${fontSize.sm};
    }
`;

export default { Card, CardContent };
