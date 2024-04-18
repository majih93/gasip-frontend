import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import MyPageElement from './MyPageElement';

import { COLORS } from '@styles/colors';

// TODO - ICON_SIZE 여기 선언하는게 맞는가?
const ICON_SIZE = 27;

const FixNickNameButton = () => {
  return (
    <View style={styles.fixNickNameButtonContainer}>
      <Text style={styles.fixNickNameButtonText}>수정</Text>
    </View>
  );
};

export default function ProfileData({ nickname }: { nickname: string | null }) {
  const navigation = useNavigation();

  const nickenameText = nickname ? `${nickname} 님` : 'Guest 님';

  const handleMyFeedsPress = async () => {
    navigation.navigate('MyFeedsScreen');
  };

  return (
    <View style={styles.container}>
      <MyPageElement
        title={nickenameText}
        onPress={() => {}}
        rightButtonElement={<FixNickNameButton />}
      />
      <MyPageElement
        title="내가 쓴 글"
        onPress={handleMyFeedsPress}
        rightButtonElement={
          <Icon
            name="chevron-forward-outline"
            size={ICON_SIZE}
            style={{ color: COLORS.WHITE }}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#28292A',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  fixNickNameButtonContainer: {
    paddingHorizontal: 15,
    backgroundColor: COLORS.BTN_MAIN,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixNickNameButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});
