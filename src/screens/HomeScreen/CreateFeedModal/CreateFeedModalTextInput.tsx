import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { COLORS } from '@styles/colors';

export default function CreateFeedModalTextInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="자유롭게 의견을 작성해 주세요.."
        placeholderTextColor={'#7d7878'}
        multiline
        maxLength={500}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    borderColor: 'white',
    padding: 10,
    color: COLORS.WHITE,
    textAlignVertical: 'top',
    lineHeight: 23,
  },
});
