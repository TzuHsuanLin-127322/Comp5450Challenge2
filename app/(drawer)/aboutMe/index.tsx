import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AboutMe() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Header */}
      <Text style={styles.title}>About Me</Text>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('@/assets/images/profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Ashley Doyle</Text>
        <Text style={styles.role}>Professional Car Dealer</Text>
      </View>

      {/* Car Gallery */}
      <Text style={styles.sectionTitle}>Featured Cars</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 8 }}>
        <Image source={require('@/assets/images/car1.jpeg')} style={{ width: 120, height: 70, borderRadius: 8, marginRight: 8 }} />
        <Image source={require('@/assets/images/car2.jpeg')} style={{ width: 120, height: 70, borderRadius: 8, marginRight: 8 }} />
        <Image source={require('@/assets/images/car3.jpeg')} style={{ width: 120, height: 70, borderRadius: 8, marginRight: 8 }} />
        <Image source={require('@/assets/images/car4.jpeg')} style={{ width: 120, height: 70, borderRadius: 8, marginRight: 8 }} />
      </ScrollView>

      {/* Introduction */}
      <Text style={styles.sectionTitle}>My Journey</Text>
      <Text style={styles.paragraph}>
        With over 5 years in the automotive industry, I specialize in connecting people with the perfect vehicle
        for their lifestyle. I’ve helped more than 500 happy clients find their ideal cars while providing 
        top-notch customer service and after-sales support.
      </Text>

      {/* Education & Training */}
      <Text style={styles.sectionTitle}>Education & Training</Text>
      <Text style={styles.paragraph}>🎓 MBA Student at Lakehead University</Text>
      <Text style={styles.paragraph}>📘 Certified in Automotive Sales & Customer Relations</Text>

      {/* Experience */}
      <Text style={styles.sectionTitle}>Work Experience</Text>
      <Text style={styles.paragraph}>🚗 Car Sales Consultant - 3+ years at Gisande Ltd.</Text>
      <Text style={styles.paragraph}>🔧 Automotive Assistant - Supported construction and maintenance crews.</Text>

      {/* Contact Links */}
      <Text style={styles.sectionTitle}>Connect With Me</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginVertical: 5 }}>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:myves@lakeheadu.ca')}>
          <Text style={styles.link}>📧 Email</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, color: '#888', marginHorizontal: 6 }}>|</Text>
        <TouchableOpacity onPress={() => Linking.openURL('tel:+8077071111')}>
          <Text style={styles.link}>📞 +807 707 1111</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, color: '#888', marginHorizontal: 6 }}>|</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/YOUR_PROFILE')}>
          <Text style={styles.link}>🔗 LinkedIn</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Bar */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 10 }}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={[styles.link, { color: '#007aff', fontWeight: 'bold' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/aboutMe')}>
          <Text style={[styles.link, { color: '#007aff', fontWeight: 'bold' }]}>About</Text>
        </TouchableOpacity>
        {/* Add more links as needed */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#222',
    textAlign: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 4,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  role: {
    fontSize: 16,
    color: '#777',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
    color: '#000',
  },
  paragraph: {
    fontSize: 15,
    color: '#444',
    marginVertical: 5,
  },
  link: {
    fontSize: 16,
    color: '#007aff',
    marginVertical: 5,
  },
});