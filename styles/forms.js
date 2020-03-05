import styled from 'styled-components';
import colors from '../constants/colors';
import { fontSize, typeface } from '../constants/type';
import { borderRadius, input } from '../constants/dimensions';
import spacing from '../constants/spacing';

export const StyledInput = styled.input`
    border-radius: ${borderRadius.sm};
    outline: none;
    border: 1px solid ${colors.grayBorder};
    padding: ${input.padding};
    padding-left: ${spacing.sm};
    font-size: ${fontSize.md};
    box-sizing: border-box;
    width: ${input.width};
    margin: 0 auto ${spacing.sm} auto;
    color: ${colors.blackText};

    &::-webkit-input-placeholder {
        color: ${colors.grayMedium};
    }

    &::-moz-placeholder {
        color: ${colors.grayMedium};
    }
`;

export const StyledTextArea = styled.textarea`
    border-radius: ${borderRadius.sm};
    outline: none;
    border: 1px solid ${colors.grayBorder};
    padding: ${input.padding};
    padding-left: ${spacing.sm};
    font-size: ${fontSize.md};
    box-sizing: border-box;
    font-family: ${typeface.sansSerif};
    resize: none;
    width: ${input.width};
    margin: 0 auto ${spacing.sm} auto;
    color: ${colors.blackText};
    height: ${input.height};

    &::-webkit-input-placeholder {
        color: ${colors.grayMedium};
    }

    &::-moz-placeholder {
        color: ${colors.grayMedium};
    }
`;

export const StyledDropdown = styled.select`
    border-radius: ${borderRadius.sm};
    outline: none;
    border: 1px solid ${colors.grayBorder};
    padding: ${input.padding};
    font-size: ${fontSize.md};
    box-sizing: border-box;
    width: ${input.width};
    margin: 0 auto ${spacing.sm} auto;
    color: ${colors.blackText};
    background: url(/icons/arrow.svg) no-repeat ${colors.white};
    background-size: 11px;
    background-position: right ${spacing.sm} center;
    -webkit-appearance: none;
    -moz-appearance: none;

    option {
        padding: 0;
    }

    &::-webkit-input-placeholder {
        color: ${colors.grayMedium};
    }

    &::-moz-placeholder {
        color: ${colors.grayMedium};
    }
`;

export const StyledButton = styled.button`
    border-radius: ${borderRadius.sm};
    outline: none;
    border: 1px solid ${colors.purple};
    padding: ${input.padding};
    font-size: ${fontSize.md};
    box-sizing: border-box;
    font-family: ${typeface.sansSerif};
    background: ${colors.purpleLight};
    width: ${input.width};
    margin: 0 auto ${spacing.sm} auto;
    color: ${colors.white};

    &:hover {
        cursor: pointer;
        background: ${colors.purple};
    }

    &::-webkit-input-placeholder {
        color: ${colors.grayMedium};
    }

    &::-moz-placeholder {
        color: ${colors.grayMedium};
    }
`;

export default { StyledInput, StyledTextArea, StyledDropdown, StyledButton };
