import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from './servicesTheme';
import { TouchableOpacity } from 'react-native';

export const ACHIEVEMENTS = [
    { id: 1, title: "Top Salesman Award (18x)", icon: "🏆" },
    { id: 2, title: "$50K/Quarter Saved", icon: "💰" },
    { id: 3, title: "70% Sales Growth", icon: "📈" },
    { id: 4, title: "$50M+ Sales", icon: "🚀" },
];

const { width } = Dimensions.get('window');

const ServicesScreen = () => (
    <ScrollView style={styles.container}>

        {/* Section: Services */}
        <ImageBackground
            source={require('../assets/images/car_dealership.jpeg')}
            style={styles.section}
            blurRadius={3}
        >
            <View style={styles.overlay}>
                <Text style={styles.sectionTitle}>EXPERTISE</Text>
                <View style={styles.divider} />

                <View style={styles.serviceItem}>
                    <MaterialCommunityIcons
                        name="account-tie"
                        size={40}
                        color={Colors.color}
                        style={styles.serviceIcon}
                    />
                    <View style={styles.serviceTextContainer}>
                        <Text style={styles.serviceSubtitle}>Client-Centric Selling</Text>
                        <Text style={styles.serviceDescription}>
                            Structured needs analysis driving 98% satisfaction
                        </Text>
                    </View>
                </View>

                <View style={styles.serviceItem}>
                    <MaterialCommunityIcons
                        name="cash"
                        size={40}
                        color={Colors.color}
                        style={styles.serviceIcon}
                    />
                    <View style={styles.serviceTextContainer}>
                        <Text style={styles.serviceSubtitle}>Tailored Financing</Text>
                        <Text style={styles.serviceDescription}>
                            0% APR deals for 150+ clients
                        </Text>
                    </View>
                </View>

                <View style={styles.serviceItem}>
                    <MaterialCommunityIcons
                        name="warehouse"
                        size={40}
                        color={Colors.color}
                        style={styles.serviceIcon}
                    />
                    <View style={styles.serviceTextContainer}>
                        <Text style={styles.serviceSubtitle}>Inventory Optimization</Text>
                        <Text style={styles.serviceDescription}>
                            $50K/quarter savings through strategic acquisitions
                        </Text>
                    </View>
                </View>

                <View style={styles.serviceItem}>
                    <MaterialCommunityIcons
                        name="cash"
                        size={40}
                        color={Colors.color}
                        style={styles.serviceIcon}
                    />
                    <View style={styles.serviceTextContainer}>
                        <Text style={styles.serviceSubtitle}>Digital Customer Journeys</Text>
                        <Text style={styles.serviceDescription}>
                            40% faster deal closure via CRM automation
                        </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>

        {/* SECTION: PREMIUM SERVICES */}
        <View style={[styles.section, { backgroundColor: Colors.card }]}>
            <Text style={styles.sectionTitle}>PREMIUM SERVICES</Text>
            <View style={styles.divider} />

            {/* Flexible Financing */}
            <View style={styles.serviceItem}>
                <MaterialCommunityIcons name="finance" size={40} color={Colors.color} style={styles.serviceIcon} />
                <View style={styles.serviceTextContainer}>
                    <Text style={styles.serviceSubtitle}>Flexible Financing</Text>
                    <Text style={styles.serviceDescription}>
                        0% APR deals for qualified buyers, 84-month terms
                    </Text>
                </View>
            </View>

            {/* Bespoke Sourcing */}
            <View style={styles.serviceItem}>
                <MaterialCommunityIcons name="magnify" size={40} color={Colors.color} style={styles.serviceIcon} />
                <View style={styles.serviceTextContainer}>
                    <Text style={styles.serviceSubtitle}>Bespoke Vehicle Sourcing</Text>
                    <Text style={styles.serviceDescription}>
                        Nationwide rare model procurement service
                    </Text>
                </View>
            </View>

            {/* Lifetime Maintenance */}
            <View style={styles.serviceItem}>
                <MaterialCommunityIcons name="car-wrench" size={40} color={Colors.color} style={styles.serviceIcon} />
                <View style={styles.serviceTextContainer}>
                    <Text style={styles.serviceSubtitle}>Lifetime Maintenance</Text>
                    <Text style={styles.serviceDescription}>
                        45% client retention through premium packages
                    </Text>
                </View>
            </View>

            {/* Fleet Management */}
            <View style={styles.serviceItem}>
                <MaterialCommunityIcons name="car-multiple" size={40} color={Colors.color} style={styles.serviceIcon} />
                <View style={styles.serviceTextContainer}>
                    <Text style={styles.serviceSubtitle}>Corporate Fleet Management</Text>
                    <Text style={styles.serviceDescription}>
                        50+ vehicle fleet solutions with bulk discounts
                    </Text>
                </View>
            </View>
        </View>

        {/* SECTION: INDUSTRY LEADERSHIP */}
        <View style={[styles.section, { backgroundColor: Colors.background }]}>
            <Text style={styles.sectionTitle}>INDUSTRY LEADERSHIP</Text>
            <View style={styles.divider} />

            <Text style={styles.textBlockContent}>
                Partnering with top-tier automotive brands
            </Text>

            {/* Partner Logos */}
            <View style={styles.galleryContainer}>
                <Image
                    source={require('../assets/images/carbrands-popular.png')}
                    style={styles.galleryImage}
                />
            </View>
        </View>

        {/* SECTION: ACHIEVEMENT GALLERY */}
        <View style={[styles.section, { backgroundColor: Colors.card }]}>
            <Text style={styles.sectionTitle}>ACHIEVEMENTS</Text>
            <View style={styles.divider} />

            <View style={styles.achievementGrid}>
                {ACHIEVEMENTS.map((achievement) => (
                    <View key={achievement.id} style={styles.achievementBadge}>
                        <Text style={styles.achievementIcon}>{achievement.icon}</Text>
                        <Text style={styles.achievementText}>{achievement.title}</Text>
                    </View>
                ))}
            </View>
        </View>
        

        {/* Section: SUCCESS STORIES */}
        <View style={[styles.section, { backgroundColor: Colors.background }]}>
            <Text style={styles.sectionTitle}>SUCCESS STORIES</Text>
            <View style={styles.divider} />

            <View style={styles.textBlock}>
                <Text style={styles.textBlockContent}>
                    Just a brief description that tells
                    the story behind your work and passion for automotive excellence.
                </Text>
            </View>

            <View style={styles.galleryContainer}>
                <TouchableOpacity
                    style={styles.ctaButton}
                //onPress={() => navigation.navigate('SuccessStories')}
                >
                    <Text style={styles.ctaText}>View Client Testimonials →</Text>
                </TouchableOpacity>
            </View>
        </View>


    </ScrollView>
);

const styles = StyleSheet.create({
    // Global Styles
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    section: {
        width: '100%',
        minHeight: 400,
        paddingVertical: 40,
    },
    sectionTitle: {
        color: Colors.lightText,
        fontSize: 28,
        fontWeight: '300',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
        letterSpacing: 2,
    },
    divider: {
        height: 2,
        backgroundColor: Colors.color,
        width: '40%',
        alignSelf: 'center',
        marginBottom: 20,
    },

    // Image Background Styles
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    // Service Item Styles
    serviceItem: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    serviceIcon: {
        marginRight: 20,
    },
    serviceTextContainer: {
        flex: 1,
    },
    serviceSubtitle: {
        color: Colors.color,
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
    },
    serviceDescription: {
        color: Colors.lightText,
        fontSize: 16,
        lineHeight: 24,
    },

    // Achievement Styles
    achievementGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    achievementBadge: {
        width: 150,
        padding: 20,
        margin: 10,
        backgroundColor: '#2a2a2a',
        alignItems: 'center',
        borderRadius: 8,
    },
    achievementIcon: {
        fontSize: 32,
        marginBottom: 8,
    },
    achievementText: {
        color: Colors.lightText,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 18,
    },

    // Strategic Additions
    partnerGrid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 30,
    },
    insightCard: {
        backgroundColor: Colors.color,
        margin: 20,
        padding: 20,
        borderRadius: 8,
    },
    insightTitle: {
        color: Colors.lightText,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    insightText: {
        color: Colors.lightText,
        fontSize: 14,
        lineHeight: 20,
    },

    // Image Gallery
    galleryContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    galleryImage: {
        width: width - 40,
        height: 350,
        marginBottom: 20,
    },

    // Text Block
    textBlock: {
        backgroundColor: Colors.card,
        marginHorizontal: 20,
        padding: 25,
        marginTop: 5,
        marginBottom: 20,
    },
    textBlockContent: {
        color: Colors.lightText,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },

    // Interactive Elements
    ctaButton: {
        backgroundColor: Colors.color,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    ctaText: {
        color: Colors.ctaText,
        fontWeight: 'bold',
    },
});

export default ServicesScreen;