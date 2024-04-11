import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Spacer from '@components/common/Spacer';

import { COLORS } from '@styles/colors';

import icon_reply from '@assets/icon_reply.png';
import icon_like from '@assets/icon_like.png';

export default function FeedCommentReply() {
  return (
    <View style={styles.container}>
      <Image source={icon_reply} style={{ width: 15, height: 15 }} />
      <ReplyHeader regDate="2021-08-01" userNickName="nickName" />
      <ReplyBody content="content" />
      <ReplyFooter likeCount={1} />
    </View>
  );
}

const ReplyHeader = ({
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
    <Text style={styles.commentHeaderText}>
      {getFeedCreatedTimeString()} | {userNickName}
    </Text>
  );
};

const ReplyBody = ({ content }: { content: string }) => {
  return <Text style={styles.commentBodyText}>{content}</Text>;
};

const ReplyFooter = ({ likeCount }: { likeCount: number }) => {
  return (
    <View style={styles.footerContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={icon_like} style={{ width: 15, height: 15 }} />
        <Spacer type="width" value={5} />
        <Text style={{ fontSize: 15, color: 'red', fontWeight: '500' }}>
          {likeCount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
  commentHeaderText: {
    fontSize: 14,
    color: '#4b5159',
    fontWeight: '500',
  },
  commentBodyText: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: '500',
  },
  footerContainer: {
    flexDirection: 'row',
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.WHITE,
  },
});
