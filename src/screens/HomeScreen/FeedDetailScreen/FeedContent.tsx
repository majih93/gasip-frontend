import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Spacer from '@components/common/Spacer';

import { COLORS } from '@styles/colors';
import { FeedResult } from 'types/searchTypes';

import icon_like from '@assets/icon_like.png';
import icon_comments from '@assets/icon_comments.png';

export default function FeedContent({
  feedData,
}: {
  feedData: FeedResult | null;
}) {
  // if (!feedData) return <View />;

  return (
    <View style={styles.container}>
      <FeedContentHeader regDate={'ss'} userNickName="nickName" />
      {/* <FeedContentHeader regDate={feedData.regDate} userNickName="nickName" /> */}
      <Spacer type="height" value={10} />
      {/* <FeedContentText content={feedData.content} /> */}
      <FeedContentText content={'fff'} />
      <Spacer type="height" value={10} />
      <FeedContentFooter likeCount={1} />
    </View>
  );
}
const FeedContentHeader = ({
  regDate,
  userNickName,
}: {
  regDate: string;
  userNickName: string;
}) => {
  // TODO - 함수 구현
  const getFeedCreatedTimeString = () => {
    return regDate;
  };

  return (
    <Text style={styles.feedHeaderText}>
      {getFeedCreatedTimeString()} | {userNickName}
    </Text>
  );
};

const FeedContentText = ({ content }: { content: string }) => {
  return <Text style={styles.feedContentText}>{content}</Text>;
};

const FeedContentFooter = ({ likeCount }: { likeCount: number }) => {
  return (
    <View style={styles.footerContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={icon_like} style={{ width: 15, height: 15 }} />
        <Spacer type="width" value={5} />
        <Text style={{ fontSize: 15, color: 'red', fontWeight: '500' }}>
          {likeCount}
        </Text>
      </View>

      <Spacer type="width" value={15} />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={icon_comments} style={{ width: 15, height: 15 }} />
        <Spacer type="width" value={5} />
        <Text style={{ fontSize: 15, color: '#4490d8', fontWeight: '500' }}>
          {3}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#28292A',
  },
  feedHeaderText: {
    color: '#4b5159',
    fontWeight: '500',
  },
  feedContentText: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: '500',
  },
  footerContainer: {
    flexDirection: 'row',
  },
});