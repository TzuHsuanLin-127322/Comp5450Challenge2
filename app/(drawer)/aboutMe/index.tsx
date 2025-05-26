import { useRouter } from 'expo-router';
import * as SQLite from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AboutMe() {
  const router = useRouter();
  const [aboutMe, setAboutMe] = useState<{header: string, paragraph: string}[]>([]);
  useEffect(() => {
    const db = SQLite.openDatabaseSync('mydb.db');
    db.execSync(`
      CREATE TABLE IF NOT EXISTS about_me (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        header TEXT,
        paragraph TEXT
      );
    `)
    const existing = db.getAllSync('SELECT * FROM about_me;');
    if (existing.length === 0) {
      db.execSync(`
        INSERT INTO about_me (header, paragraph) VALUES
        ('My Journey', 'With over 5 years in the automotive industry, I specialize in connecting people with the perfect vehicle for their lifestyle. I’ve helped more than 500 happy clients find their ideal cars while providing top-notch customer service and after-sales support.');
      `);
      db.execSync(`
        INSERT INTO about_me (header, paragraph) VALUES
        ('Education & Training', '🎓 MBA Student at Lakehead University\n📘 Certified in Automotive Sales & Customer Relations');
      `);
    
      db.execSync(`
        INSERT INTO about_me (header, paragraph) VALUES
        ('Work Experience', '🚗 Car Sales Consultant - 3+ years at Gisande Ltd.\n🔧 Automotive Assistant - Supported construction and maintenance crews.');
      `);
    }
    const result = db.getAllSync<{header: string, paragraph: string}>('SELECT * FROM about_me;');
    console.log(result);
    setAboutMe(result);
  }, []);
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Header */}
      <Text style={styles.title}>About Me</Text>

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
        <Image source={require('@/assets/images/car1.jpeg')} style={{ width: 120, height: 70, borderRadius: 8, marginRight: 8 }} />
        <Image source={require('@/assets/images/car2.jpeg')} style={{ width: 120, height: 70, borderRadius: 8, marginRight: 8 }} />
        <Image source={require('@/assets/images/car3.jpeg')} style={{ width: 120, height: 70, borderRadius: 8, marginRight: 8 }} />
        <Image source={require('@/assets/images/car4.jpeg')} style={{ width: 120, height: 70, borderRadius: 8, marginRight: 8 }} />
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