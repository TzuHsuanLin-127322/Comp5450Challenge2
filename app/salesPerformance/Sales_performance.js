import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

/* ---------- 基础尺寸 ---------- */
const screenWidth = Dimensions.get('window').width;
const cardHorizontalMargin = 15;
const cardHeight = 300;
const cardWidth = screenWidth - cardHorizontalMargin * 2;
const gaugeCardGap = 5;
const gaugeCardWidth = Math.floor((screenWidth - 24 - gaugeCardGap * 2) / 3);
const gaugeCardHeight = gaugeCardWidth * 1;

/* ---------- 设计变量 ---------- */
const COLORS = {
  primary: 'black',
  background: 'white',
  card: '#f5f5f5',
  red: '#B03737',
};

/* ---------- 静态导入仪表盘图片 ---------- */
const GAUGE_IMAGES = [
  require('../../assets/images/gauge_1.png'),
  require('../../assets/images/gauge_2.png'),
  require('../../assets/images/gauge_3.png'),
];

/* ---------- 主页面 ---------- */
export default function SalesImpactDashboard() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    { img: require('../../assets/images/sales_growth.png') },
    { img: require('../../assets/images/inventory_cost_savings.png') },
  ];

  /* 自动轮播 */
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (currentIndex + 1) % carouselData.length;
      setCurrentIndex(next);
      if (carouselRef.current) {
        carouselRef.current.scrollTo({ x: cardWidth * next, animated: true });
      }
    }, 3500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <ScrollView
      style={{ backgroundColor: COLORS.background }}
      contentContainerStyle={styles.container}
    >
      {/* Section Header */}
      <Text style={styles.sectionHeader}>Sales Impact Dashboard</Text>

      {/* 轮播 */}
      <ScrollView
        ref={carouselRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContent}
        style={{ marginBottom: 12 }}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / cardWidth);
          setCurrentIndex(index);
        }}
      >
        {carouselData.map((item, idx) => (
          <View key={idx} style={styles.carouselCard}>
            <Image source={item.img} style={styles.carouselImage} resizeMode="contain" />
          </View>
        ))}
      </ScrollView>

      {/* 仪表盘 */}
      <View style={styles.gaugeRow}>
        {GAUGE_IMAGES.map((src, idx) => (
          <View key={idx} style={styles.gaugeCard}>
            <Image source={src} style={styles.gaugeImg} resizeMode="contain" />
          </View>
        ))}
      </View>

      <SuccessStories />
      <AwardsRecognition />
    </ScrollView>
  );
}

/* ---------- Success Stories ---------- */
function SuccessStories() {
  const router = useRouter();
  return (
    <View style={successStyles.wrapper}>
      <Text style={styles.sectionHeader}>Success Stories</Text>

      {/* 卡片 1 */}
      <View style={successStyles.card}>
        <View style={successStyles.row}>
          <Image source={require('../../assets/images/car.png')} style={successStyles.icon} />
          <Text style={successStyles.mainText}>
            Matching the Right Car to the Right Person—Not Just Selling One
          </Text>
        </View>
        <Text style={styles.description}>
          Earlier this year, worked a client who had recently relocated from a small town to the city. Early: looking for a compact SUV balancing fuel efficiency, urban drivability, and occasional long-distance travel.
        </Text>
        <Pressable style={successStyles.button} onPress={() => router.push('/Case_1')}>
          <Text style={successStyles.buttonText}>Learn More</Text>
        </Pressable>
      </View>

      {/* 卡片 2 */}
      <View style={successStyles.card}>
        <View style={successStyles.row}>
          <Image source={require('../../assets/images/key_hand.png')} style={successStyles.icon} />
          <Text style={successStyles.mainText}>
            From Hesitation to Confidence—Supporting a High-Stakes Upgrade
          </Text>
        </View>
        <Text style={styles.description}>
          One of my most rewarding deals involved a client upgrading from a 10-year-old sedan to a family-friendly crossover.
        </Text>
        <Pressable style={successStyles.button} onPress={() => router.push('/Case_2')}>
          <Text style={successStyles.buttonText}>Learn More</Text>
        </Pressable>
      </View>
    </View>
  );
}

/* ---------- Awards & Recognition （双卡布局） ---------- */
function AwardsRecognition() {
  const awards = [
    {
      title: 'Top Salesman Award (18×)',
      desc:
        'Over the course of my tenure at Major World I was honored with the Top Salesman Award 18 times — a reflection of consistent performance, customer trust, and my ability to exceed expectations in a highly competitive sales environment.',
      img: require('../../assets/images/star_badge.png'),
    },
    {
      title: 'Employee of the Month – Spectrum (6×)',
      desc:
        'During my early career I was recognized six times as Employee of the Month at Spectrum for surpassing sales targets and delivering exceptional customer experiences — a foundation that continues to define my client-first approach.',
      img: require('../../assets/images/profile_pic.png'),
    },
    {
      title: 'Premier Ford’s Top Sales Generator (2014)',
      desc:
        'While at Premier Ford Lincoln, I led sales growth with a 70% year-over-year increase, earning formal recognition as the dealership’s top sales generator. My personal tracking system for leads and contracts later became a team-wide best practice.',
      img: require('../../assets/images/2014_badge.png'),
    },
    {
      title: 'Featured in Internal Newsletter – “Closer’s Spotlight”',
      desc:
        'My customer-first negotiation approach and consistently high conversion rate earned me a spotlight in Major World’s internal newsletter as an example for sales excellence.',
      img: require('../../assets/images/star_badge_2.png'),
    },
  ];

  return (
    <View style={awardStyles.section}>
      <View style={awardStyles.headerRow}>
        <Image source={require('../../assets/images/trophy.png')} style={awardStyles.headerIcon} />
        <Text style={styles.sectionHeader}>Awards & Recognition</Text>
      </View>

      {awards.map((a, i) => (
        <View key={i} style={awardStyles.cardRow}>
          {/* 左侧缩略图卡片 */}
          <View style={awardStyles.thumbCard}>
            <Image source={a.img} style={awardStyles.thumbImg} resizeMode="cover" />
          </View>

          {/* 右侧文字卡片 */}
          <View style={awardStyles.textCard}>
            <Text style={styles.mainText}>{a.title}</Text>
            <Text style={styles.description}>{a.desc}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

/* ---------- 公共文字 + 轮播 / 仪表盘 样式 ---------- */
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: cardHorizontalMargin,
    paddingBottom: 36,
    alignItems: 'center',           // 保持轮播等居中
  },

  /* 文字层级 */
  sectionHeader: { fontSize: 22, color: COLORS.primary, fontWeight: 'bold' },
  mainText: { fontSize: 20, color: COLORS.primary, fontWeight: '200' },
  description: { fontSize: 16, color: COLORS.primary, lineHeight: 22 },

  /* 轮播 */
  carouselContent: { alignItems: 'center' },
  carouselCard: {
    width: cardWidth,
    height: cardHeight,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselImage: { width: cardWidth, height: cardHeight, borderRadius: 20 },

  /* 仪表盘 */
  gaugeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth - 24,
    marginBottom: 0,
  },
  gaugeCard: {
    width: gaugeCardWidth,
    height: gaugeCardHeight,
    backgroundColor: COLORS.card,
    borderRadius: 12,
    alignItems: 'center',
  },
  gaugeImg: { width: '100%', height: '100%', borderRadius: 12 },
});

/* ---------- SuccessStories 样式 ---------- */
const successStyles = StyleSheet.create({
  wrapper: { width: '100%', marginTop: 20 },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  icon: { width: 36, height: 36, marginRight: 10 },
  mainText: styles.mainText,
  button: {
    backgroundColor: COLORS.red,
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 12,
    alignSelf: 'flex-start',
    paddingHorizontal: 28,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

/* ---------- Awards 双卡布局样式 ---------- */
const awardStyles = StyleSheet.create({
  section: { width: '100%', marginTop: 30 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16, paddingHorizontal: 4 },
  headerIcon: { width: 34, height: 34, marginRight: 10, tintColor: COLORS.red },

  cardRow: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 4,
    marginBottom: 16,
  },

  thumbCard: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.card,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  thumbImg: { width: 40, height: 40, borderRadius: 6 },

  textCard: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 12,
  },
});
