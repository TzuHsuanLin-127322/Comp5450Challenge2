import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const COLORS = {
  primary: 'black',
  background: 'white',
  card: '#f5f5f5',
  red: '#B03737',
};

export default function StoryMatchingRightCar() {
  return (
    <ScrollView style={{ backgroundColor: COLORS.background }} contentContainerStyle={styles.container}>
      {/* 大标题（可保持更大一点） */}
      <Text style={styles.title}>Matching the Right Car</Text>

      {/* 小节 1 */}
      <Text style={styles.sectionHeader}>Customer Background & Initial Need</Text>
      <Text style={styles.description}>
        Earlier this year, a customer who had recently moved from a small town to the city was seeking a compact SUV that balances fuel efficiency, urban drivability, and occasional long-distance travel.
      </Text>

      {/* 小节 2 */}
      <Text style={styles.sectionHeader}>Analysis Process</Text>

      {/* 2-1 */}
      <View style={styles.cardRow}>
        <Image source={require('../assets/images/analysis_pie.png')} style={styles.icon} />
        <Text style={styles.mainText}>
          Helped with a side-by-side spec comparison of three models.
        </Text>
      </View>

      {/* 2-2 */}
      <View style={styles.cardRow}>
        <Image source={require('../assets/images/analysis_table.png')} style={styles.icon} />
        <Text style={styles.mainText}>
          Used internal tools to show price trends and explained the value of a certified-used model over a new base trim.
        </Text>
      </View>

      {/* 结果 & 引用 */}
      <Text style={styles.sectionHeader}>Result & Customer Quote</Text>
      <Image source={require('../assets/images/customer_key.png')} style={styles.customerImg} resizeMode="cover" />

      <View style={styles.quoteCard}>
        <Image source={require('../assets/images/quoteMark.png')} style={styles.quoteIcon} />
        <Text style={styles.quote}>
          “You didn't just sell me a car.
          {'\n'}You helped me avoid making the wrong one.”
        </Text>
        <Image source={require('../assets/images/closing_quote_icon.png')} style={styles.quoteIcon} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    paddingBottom: 50,
  },

  /* 文字层级 */
  title: { fontSize: 30, fontWeight: 'bold', color: COLORS.primary, marginBottom: 20 },
  sectionHeader: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary, marginTop: 18, marginBottom: 6 },
  mainText: { fontSize: 20, fontWeight: '200', color: COLORS.primary, lineHeight: 24, flex: 1 },
  description: { fontSize: 16, color: COLORS.primary, lineHeight: 22, marginBottom: 10 },

  /* 图+文行卡片 */
  cardRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  icon: { width: 30, height: 30, marginRight: 12 },

  /* 客户图片 */
  customerImg: { width: '100%', height: 150, borderRadius: 10, marginVertical: 12 },

  /* 引用卡片 */
  quoteCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.red,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
  },
  quoteIcon: { width: 24, height: 24, tintColor: COLORS.red, marginRight: 8 },
  quote: { fontSize: 16, color: COLORS.primary, fontStyle: 'italic', flex: 1, lineHeight: 24 },
});
