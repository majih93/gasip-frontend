import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS } from '@styles/colors';

const ICON_SIZE = 27;

export default function CreateFeedModalHeader() {
  return (
    <View style={styles.container}>
      <HeaderCloseButton />

      <HeaderTitle />

      <HeaderLetterCount />
    </View>
  );
}

const HeaderCloseButton = () => {
  const navigation = useNavigation();

  const closeModal = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.closeButtonContainer}>
      <TouchableOpacity style={{ flex: 1 }} onPress={closeModal}>
        <Icon
          name="close-outline"
          size={ICON_SIZE}
          style={{ color: COLORS.WHITE }}
        />
      </TouchableOpacity>
    </View>
  );
};

const HeaderTitle = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>피드 작성</Text>
    </View>
  );
};

const HeaderLetterCount = () => {
  return (
    <View style={styles.letterCountContainer}>
      <Text style={styles.letterCountText}>0/500</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    color: COLORS.WHITE,
  },
  letterCountContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  letterCountText: {
    color: COLORS.WHITE,
    fontSize: 12,
  },
  closeButtonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});