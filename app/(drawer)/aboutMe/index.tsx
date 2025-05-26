import { aboutMeCarImage } from '@/utils/imageUtils';
import useAboutMeViewModel from '@/viewModels/aboutMeViewModel';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AboutMe() {
  const router = useRouter();
  const {aboutMe, featuredCars} = useAboutMeViewModel();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('@/assets/images/ashley_doyle_portrait.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Ashley Doyle</Text>
        <Text style={styles.role}>Professional Car Dealer</Text>
      </View>

      {/* Car Gallery */}
      <Text style={styles.sectionTitle}>Featured Cars</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 8 }}>
        {featuredCars.map((car, index) => (
          <Image key={index} source={aboutMeCarImage[car.imagePath]} style={{ width: 120, height: 70, borderRadius: 8, marginRight: 8 }} />
        ))}
      </ScrollView>

      {aboutMe.map((item, index) => (
        <View key={index}>
          <Text style={styles.sectionTitle}>{item.header}</Text>
          {item.paragraph.split('\n').map(((paragraph,index) => (
            <Text key={index} style={styles.paragraph}>{paragraph}</Text>
          )))}
          
        </View>
      ))}

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