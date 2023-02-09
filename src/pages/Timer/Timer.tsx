import React from 'react';
import {View} from 'react-native';
import colors from '../../values/colors/colors';
import {ButtonText, TimerButton, TimerText, TimerWrapper} from './Timer.styles';
import useTimer from './useTimer';

const Timer = () => {
  const {isRunning, timer, handlePress} = useTimer();
  return (
    <View>
      <TimerWrapper>
        <TimerText>
          {timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}:
          {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}:
          {timer.milliseconds < 10
            ? `0${timer.milliseconds}`
            : timer.milliseconds}
        </TimerText>
      </TimerWrapper>
      <TimerButton
        onPress={handlePress}
        background={isRunning ? colors.red : colors.green}>
        <ButtonText>{isRunning ? 'Stop' : 'Start'}</ButtonText>
      </TimerButton>
    </View>
  );
};

export default Timer;
