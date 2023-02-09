import styled from 'styled-components/native';

type TimerButtonProps = {
  background: string;
};

export const TimerWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const TimerText = styled.Text`
  font-size: 40px;
  font-weight: bold;
`;

export const TimerButton = styled.TouchableOpacity<TimerButtonProps>`
  width: 50%;
  height: 45px;
  background-color: ${({background}: TimerButtonProps) => background};
  align-self: center;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
`;
