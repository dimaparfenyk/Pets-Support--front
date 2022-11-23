import { LinkBasic } from 'components/Button/Button.styled';
import styled from 'styled-components';

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-left: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    height: 44px;
    width: 180px;
  }
`;

export const ButtonAuthLink = styled(LinkBasic)`
  background-color: ${prop =>
    prop.primary ? prop.theme.colors.accent : prop.theme.colors.white};
  color: ${prop =>
    prop.primary ? prop.theme.colors.white : prop.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
