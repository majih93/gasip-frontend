import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { getPopularFeeds } from '@api/index';

import FeedSummary from '@screens/HomeScreen/FeedsScreen/FeedSummary';

interface Feed {
  content: string;
  likeCount: number;
  clickCount: number;
  regDate: string;
}

export default function TopFeedsTab() {
  const [page, setPage] = useState(0);
  const [popularFeedsList, setPopularFeedsList] = useState([]);

  const onListEndReached = async () => {
    setPage(prev => prev + 1);

    const posts: [] = await getPopularFeeds(page);

    if (posts.length > 0) {
      setPopularFeedsList([...popularFeedsList, ...posts]);
    }
  };

  // TODO - fetch하는 조건 설정 필요
  useEffect(() => {
    const fetchPopularFeeds = async () => {
      const posts = await getPopularFeeds(page);

      setPopularFeedsList(posts);
    };

    fetchPopularFeeds();
  }, []);

  return (
    <View>
      <FlatList
        data={popularFeedsList}
        renderItem={({ item }: { item: Feed }) => (
          <FeedSummary
            content={item.content}
            likeCount={item.likeCount}
            clickCount={item.clickCount}
            regDate={item.regDate}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={onListEndReached}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        ListFooterComponent={() => <View style={{ height: 150 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
