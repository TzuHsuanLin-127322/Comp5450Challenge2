import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

interface TestimonialProps {
    quote: string;
    author: string;
    imageSrc: string;
}

interface ClientStoryProps {
    storyNumber: number;
    imageSrc: string;
    title: string;
    content: string;
}

const CustomerSatisfaction = () => (
    <View style={styles.satisfactionContainer}>
        <Image
            source={{ uri: 'https://i.imgur.com/wNPMtQT.png' }}
            style={styles.avatar}
        />
        <View style={styles.ratingInfoContainer}>
            <Image
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8edaffecb37d572f23873c8c0da38da682d4d560?placeholderIfAbsent=true&apiKey=9e29ae4db99f44f6a9f54e0fb085d424' }}
                style={styles.stars}
            />
            <Text style={styles.ratingText}>4.9/5</Text>
            <Text style={styles.nameText}>Ashley Doyle</Text>
        </View>
    </View>
);

const Testimonial = ({ quote, author, imageSrc }: TestimonialProps) => (
    <View style={styles.testimonialContainer}>
        <View style={styles.testimonialContent}>
            <Text style={styles.quoteText}>{`"${quote}"`}</Text>
            <Image
                source={{ uri: imageSrc }}
                style={styles.testimonialImage}
            />
        </View>
        <Text style={styles.authorText}>{author}</Text>
    </View>
);

const ClientStory = ({ storyNumber, imageSrc, title, content }: ClientStoryProps) => (
    <View style={styles.clientStoryContainer}>
        <View style={styles.storyImageContainer}>
            <Image
                source={{ uri: imageSrc }}
                style={styles.storyImage}
            />
            <View style={styles.storyNumber}>
                <Text style={styles.storyNumberText}>Story {storyNumber}</Text>
            </View>
        </View>
        <View style={styles.storyContent}>
            <Text style={styles.storyTitle}>{title}</Text>
            <Text style={styles.storyText}>{content}</Text>
        </View>
    </View>
);

const TestimonialsSlider = () => {
    const testimonials = [
        {
            quote: "She made my car buying experience smooth and stress-free. I couldn't be happier with my new car!",
            author: "Sarah P.",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/440f2953aaf8ff961cf5a6d9defbe12a67b05369?placeholderIfAbsent=true&apiKey=9e29ae4db99f44f6a9f54e0fb085d424"
        },
        {
            quote: "A big thank you to Ashley for helping me find the right car within my budget. Great service all around!",
            author: "Kevin T.",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2d2d3f3d4fe88fa8a2ecbdaa4c6a0b02b2976de?placeholderIfAbsent=true&apiKey=9e29ae4db99f44f6a9f54e0fb085d424"
        },
        {
            quote: "Excellent service from start to finish. Found me the perfect car that matched all my requirements!",
            author: "Michael R.",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/90b5b910df83c22234ad6669001113858b96598a?placeholderIfAbsent=true&apiKey=9e29ae4db99f44f6a9f54e0fb085d424"
        },
        {
            quote: "Highly recommended! The whole process was seamless and I got a great deal on my dream car.",
            author: "Emily S.",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2d2d3f3d4fe88fa8a2ecbdaa4c6a0b02b2976de?placeholderIfAbsent=true&apiKey=9e29ae4db99f44f6a9f54e0fb085d424"
        }
    ];

    const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width*0.4)).current;

    useEffect(() => {
        Animated.timing(
            slideAnim,
            {
                toValue: 0,
                duration: 600,
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
            }
        ).start();
    }, []);

    const columnWidth = Dimensions.get('window').width * 0.8;
    const columnMargin = 20;

    return (
        <View style={styles.testimonialsSlider}>
            <Text style={[styles.sectionHeader, { marginTop: 40 }]}>Testimonials</Text>
            <Animated.View
                style={{
                    transform: [{ translateX: slideAnim }]
                }}
            >
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.testimonialsContainer}
                    snapToInterval={columnWidth + columnMargin}
                    snapToAlignment="start"
                    decelerationRate="fast"
                >
                    {/* First Column */}
                    <View style={styles.testimonialColumn}>
                        <Testimonial {...testimonials[0]} />
                        <Testimonial {...testimonials[1]} />
                    </View>

                    {/* Second Column */}
                    <View style={styles.testimonialColumn}>
                        <Testimonial {...testimonials[2]} />
                        <Testimonial {...testimonials[3]} />
                    </View>
                </ScrollView>
            </Animated.View>
        </View>
    );
};

const CustomerReviews = () => {
    return (
        <ScrollView style={styles.container}
                    contentContainerStyle={{ paddingBottom: 40 }}>
            <View style={styles.section}>
                <Text style={[styles.sectionHeader, { marginTop: 40 }]}>Customer Satisfaction</Text>
                <CustomerSatisfaction />
                <Text style={styles.descriptionText}>
                    On my platform, I'm thrilled to have an average rating of 4.9/5, which
                    places me ahead of 98% of my competitors. My customers often rave
                    about their experiences, and I'd love for you to see what they have to
                    say!
                </Text>

                <TestimonialsSlider />

                <Text style={[styles.sectionHeader, { marginTop: 20 }]}>Client Stories</Text>
            </View>

            <ClientStory
                storyNumber={1}
                imageSrc="https://i.imgur.com/BEXGSw0.png"
                title="The Anderson Family's New Family Car"
                content={
                    `The Anderson family came to Ashley Doyle looking for a safe and reliable vehicle for their growing family. After a detailed consultation, our team recommended a spacious SUV that perfectly met their needs. With all the safety features they required and plenty of room for their kids, they drove off with a smile on their faces.\n\n"Ashley Doyle helped us choose the perfect family car. The process was so easy, and we felt completely supported. Thank you for making our car buying experience so enjoyable!"\n\n– The Anderson Family`
                }
            />

            <ClientStory
                storyNumber={2}
                imageSrc="https://i.imgur.com/JkWVOK0.png"
                title="Tom's First Car Purchase"
                content={`Tom, a recent college graduate, needed a car that was both affordable and reliable. Our team worked closely with him to find a used car that fit his budget and lifestyle. Tom's excitement as a first-time buyer was contagious, and we made sure the process was as smooth as possible.\n\n"I couldn't have asked for a better first car buying experience. Thanks to Ashley Doyle, I was able to find a car that fits my needs and my budget. I'm so grateful!"\n\n– Tom H.`}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        maxWidth: 480,
        width: '100%',
        alignSelf: 'center',
    },
    section: {
        paddingHorizontal: 20,
        width: '100%',
    },
    sectionHeader: {
        fontSize: 22,
        color: 'black',
    },
    satisfactionContainer: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        paddingVertical: 15,
        paddingRight: 64,
        paddingLeft: 20,
        marginTop: 20,
        backgroundColor: '#f5f5f4',
    },
    avatar: {
        width: 53,
        height: 53,
        borderRadius: 26.5,
        backgroundColor: '#404040',
    },
    ratingInfoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    stars: {
        width: 140,
        height: 37,
    },
    ratingText: {
        fontSize: 16,
        color: '#404040',
        marginLeft: 8,
        position: 'absolute',
        left: 140,
        top: 8,
    },
    nameText: {
        fontSize: 16,
        color: 'black',
        marginTop: 4,
    },
    descriptionText: {
        fontSize: 20,
        fontWeight: '200',
        lineHeight: 28,
        color: 'black',
        marginTop: 20,
    },
    testimonialContainer: {
        paddingHorizontal: 12,
        paddingTop: 16,
        paddingBottom: 28,
        marginBottom: 16,
        width: '100%',
        backgroundColor: '#f5f5f4',
    },
    testimonialContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    quoteText: {
        flex: 1,
        marginRight: 16,
        fontStyle: 'italic',
        color: 'black',
        fontSize: 16,
        lineHeight: 20,
    },
    testimonialImage: {
        width: 54,
        height: 54,
        borderRadius: 27,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    authorText: {
        marginTop: 12,
        fontSize: 16,
        color: 'black',
    },
    clientStoryContainer: {
        marginTop:20,
    },
    storyImageContainer: {
        width: '100%',
        aspectRatio: 2.206,
        position: 'relative',
    },
    storyImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    storyNumber: {
        position: 'relative',
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: '#b91c1c',
        width: 71,
        marginBottom: -28,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    storyNumberText: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    storyContent: {
        alignSelf: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    storyTitle: {
        fontSize: 20,
        color: 'black',
        fontWeight: '400',
    },
    storyText: {
        fontSize: 20,
        fontWeight: '200',
        lineHeight: 28,
        color: 'black',
        marginTop: 8,
    },
    testimonialsSlider: {
        width: '100%',
    },
    testimonialsContainer: {
        paddingVertical: 16,
        paddingHorizontal: 0,
    },
    testimonialColumn: {
        width: Dimensions.get('window').width * 0.8,
        marginRight: 20,
    },
});

export default CustomerReviews;