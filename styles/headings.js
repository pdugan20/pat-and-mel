import styled from 'styled-components';
import colors from '../constants/colors';
import { fontSize, fontWeight } from '../constants/type';
import spacing from '../constants/spacing';

export const PrimaryHeading = styled.h1`
    font-size: ${fontSize.xl};
    font-weight: ${fontWeight.medium};
    margin-bottom: ${spacing.md};
    border-bottom: 1px solid ${colors.grayLight};
    padding-bottom: 6px;
`;

export default { PrimaryHeading };
