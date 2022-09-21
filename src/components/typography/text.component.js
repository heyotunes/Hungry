import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.Fonts.body};
  font-weight: ${theme.FontWeights.regular};
  color: ${theme.Colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.FontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.FontSizes.body};
`;

const error = (theme) => `
    color: ${theme.Colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.FontSizes.caption};
    font-weight: ${theme.FontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.Fonts.heading};
    font-size: ${theme.FontSizes.body};
    font-weight: ${theme.FontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
