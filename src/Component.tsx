import styled from 'styled-components/native';

interface styleProps {
  background?: string;
  width?: number;
  height?: number;
  color?: string;
  margin: string;
  padding: string;
}
interface TextProps {
  color?: string;
  fontSize?: number;
}
export const ItemText = styled.Text<TextProps>`
  font-size: ${props => props.fontSize + `px`};
  color: ${props => props.color};
`;
ItemText.defaultProps = {
  color: 'black',
  fontSize: 20,
};

export const ItemTouch = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
`;
export const ItemView = styled.View`
  flex-direction: column;
  flex: 1;
  background-color: #f9c2ff;
  height: 100px;
  padding: 20px;
  margin-top: 5px;
  margin-left:5px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
`;

interface ContainerProps {
  marginTop?: number;
}
export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: ${props => props.marginTop + `px`};
`;

Container.defaultProps = {
  marginTop: 0,
};
