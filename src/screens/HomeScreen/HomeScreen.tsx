import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  getAllFeedsForHomeScreen,
  getPopularFeedsForHomeScreen,
} from '@api/index';

import SearchButton from './HomeScreen/SearchButton';
import HomeFeedList from './HomeScreen/HomeFeedList';
import HomeScreenHeader from './HomeScreen/HomeScreenHeader';
import WriteProfessorReview from './HomeScreen/WriteProfessorReview';

import Spacer from '@components/common/Spacer';
import SafeAreaLayout from '@components/common/SafeAreaLayout';

import icon_fire from '@assets/icon_fire.png';
import icon_papers from '@assets/icon_papers.png';

import { Feed } from '@types/searchTypes';

export default function HomeScreen({ navigation }) {
  const [allReviews, setAllReviews] = useState<Feed[] | []>([]);
  const [popularReviews, setPopularReviews] = useState<Feed[] | []>([]);

  useEffect(() => {
    const fetchAllReviews = async () => {
      const reviews = await getAllFeedsForHomeScreen();
      setAllReviews([...reviews]);
    };
    const fetchPopularReviews = async () => {
      const reviews = await getPopularFeedsForHomeScreen();
      setPopularReviews([...reviews]);
    };

    fetchAllReviews();
    fetchPopularReviews();
  }, []);

  return (
    <SafeAreaLayout noBottomPadding style={{ paddingHorizontal: 16 }}>
      <Spacer type="height" value={10} />
      <HomeScreenHeader />
      <Spacer type="height" value={24} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SearchButton />
        <Spacer type="height" value={32} />
        <WriteProfessorReview />
        <Spacer type="height" value={28} />
        <HomeFeedList
          title="전체 피드"
          headerIcon={icon_papers}
          onSeeMorePress={() => navigation.navigate('AllReviewsScreen')}
          data={allReviews}
        />
        <Spacer type="height" value={24} />
        <HomeFeedList
          title="인기글"
          headerIcon={icon_fire}
          onSeeMorePress={() => navigation.navigate('PopularReviewsScreen')}
          data={popularReviews}
        />
        <Spacer type="height" value={100} />
      </ScrollView>
    </SafeAreaLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
