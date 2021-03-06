import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { dynamicPixels, epgDurationToWidth } from 'utils/styles';

interface Props {
  duration: number;
  isFocused: boolean;
}

export default ({ duration, isFocused }: Props) => {
  const container: ViewStyle = {
    backgroundColor: '#fff',
    marginHorizontal: dynamicPixels(1),
    padding: dynamicPixels(8),
    width: epgDurationToWidth(duration),
    height: '100%',
  };

  const text: TextStyle = {
    color: '#000',
  };

  if (isFocused) {
    text.color = '#fff';
    container.backgroundColor = '#000';
  }

  return StyleSheet.create({
    container,
    text,
    title: {
      fontWeight: 'bold',
      fontSize: dynamicPixels(14),
    },
    time: {
      fontWeight: 'bold',
      fontSize: dynamicPixels(12),
      opacity: 0.4,
    },
  });
};
