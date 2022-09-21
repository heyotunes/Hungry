import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.Colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.Space[3]};
  background-color: ${(props) => props.theme.Colors.bg.primary};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.Fonts.body};
  font-size: ${(props) => props.theme.FontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.Space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.Space[2]};
  padding-bottom: ${(props) => props.theme.Space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
