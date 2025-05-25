import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const COLORS = {
  primary: 'black',
  background: 'white',
  card: '#f5f5f5',
  red: '#B03737',
};

export default function Case2Story() {
  return (
    <ScrollView style={{ backgroundColor: COLORS.background }} contentContainerStyle={styles.container}>
      {/* 大标题 */}
      <Text style={styles.title}>From Hesitation to Confidence — Supporting a High-Stakes Upgrade</Text>

      {/* 1. 背景 */}
      <Text style={styles.sectionHeader}>1. Customer Background & Initial Need</Text>
      <Text style={styles.description}>
        A returning client came to me looking to upgrade from their 10 year-old sedan. Their family had just grown, and they now needed a vehicle that provided more space, comfort, and—above all—safety for two.
      </Text>

      {/* 2. 分析过程 */}
      <Text style={styles.sectionHeader}>2. Analysis Process</Text>

      {/* Needs Assessment */}
      <View style={styles.cardRow}>
        <Image source={require('../../assets/images/analysis_pie.png')} style={styles.icon} />
        <Text style={styles.mainText}>Needs Assessment</Text>
      </View>
      <Text style={styles.description}>
        We talked through their current driving routines, travel habits, and seating/storage needs.
      </Text>

      {/* Model Comparison */}
      <View style={styles.cardRow}>
        <Image source={require('../../assets/images/analysis_table.png')} style={styles.icon} />
        <Text style={styles.mainText}>Model Comparison Chart</Text>
      </View>
      <Text style={styles.description}>
        I provided a custom comparison between the Toyota&nbsp;RAV4, Honda&nbsp;CR-V, and Subaru&nbsp;Forester, focusing on safety ratings, cabin space, tech features, and child-seat compatibility.
      </Text>

      {/* 3. 结果 & 引用 */}
      <Text style={styles.sectionHeader}>3. Result & Customer Quote</Text>
      <Image source={require('../../assets/images/customer_mom_kid.png')} style={styles.customerImg} />

      <View style={styles.quoteCard}>
        <Image source={require('../../assets/images/quoteMark.png')} style={styles.quoteIcon} />
        <Text style={styles.quote}>
          “I thought upgrading would be stressful and expensive.{'\n'}
          But Ashley made it feel like a milestone, not a burden.”
        </Text>
        <Image source={require('../../assets/images/closing_quote_icon.png')} style={styles.quoteIcon} />
      </View>
      <Text style={styles.quoteSource}>— Family car buyer, Toronto</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 22, paddingBottom: 50 },

  /* 文字层级 */
  title: { fontSize: 30, fontWeight: 'bold', color: COLORS.primary, marginBottom: 20 },
  sectionHeader: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary, marginTop: 18, marginBottom: 6 },
  mainText: { fontSize: 20, fontWeight: '200', color: COLORS.primary, flex: 1, lineHeight: 24 },
  description: { fontSize: 16, color: COLORS.primary, lineHeight: 22, marginBottom: 10 },

  /* 图+文行卡片 */
  cardRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  icon: { width: 30, height: 30, marginRight: 12 },

  /* 客户图片 */
  customerImg: { width: '100%', height: 160, borderRadius: 10, marginVertical: 12 },

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
  quote: { fontSize: 16, color: COLORS.primary, fontStyle: 'italic', lineHeight: 24, flex: 1 },
  quoteSource: { fontSize: 14, color: COLORS.primary, marginTop: 4 },
});
