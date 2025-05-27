import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface CarItem {
    id: string;
    model: string;
    price: string;
    image: any;
    mileage: string;
    year: string;
    horsepower: string;
}

const dealsData: CarItem[] = [
    {
        id: '1',
        model: '2022 BMW M5 Competition',
        price: '$112,995',
        image: require('@/assets/images/cars/BMWM5E60.png'),
        mileage: '12,300 mi',
        year: '2022',
        horsepower: '617 hp',
    },
    {
        id: '2',
        model: '2021 Ford Mustang Mach-E GT',
        price: '$58,800',
        image: require('@/assets/images/cars/FordMustang.png'),
        mileage: '8,900 mi',
        year: '2021',
        horsepower: '480 hp',
    },
    {
        id: '3',
        model: '2023 Tesla Model S Plaid',
        price: '$94,990',
        image: require('@/assets/images/cars/2023TeslaModelS.jpg'),
        mileage: '500 mi',
        year: '2023',
        horsepower: '1,020 hp',
    },
    {
        id: '4',
        model: '2020 Toyota Camry XSE',
        price: '$28,450',
        image: require('@/assets/images/cars/ToyotaCamry.png'),
        mileage: '34,500 mi',
        year: '2020',
        horsepower: '301 hp',
    },
    {
        id: '5',
        model: '2023 Porsche 911 Carrera 4S',
        price: '$142,000',
        image: require('@/assets/images/cars/Porsche911.png'),
        mileage: '2,200 mi',
        year: '2023',
        horsepower: '379 hp',
    },
    {
        id: '6',
        model: '2022 Honda Civic FD',
        price: '$33,999',
        image: require('@/assets/images/cars/HondaCivicFD.png'),
        mileage: '15,800 mi',
        year: '2022',
        horsepower: '190 hp',
    },
    {
        id: '7',
        model: '2019 Chevrolet Camaro',
        price: '$62,500',
        image: require('@/assets/images/cars/ChevroletCamaro.png'),
        mileage: '9,100 mi',
        year: '2019',
        horsepower: '355 hp',
    },
    {
        id: '8',
        model: '2021 Mercedes-Benz S-Class W 140',
        price: '$118,900',
        image: require('@/assets/images/cars/Mercedes-BenzS-Class.png'),
        mileage: '18,400 mi',
        year: '2021',
        horsepower: '496 hp',
    },
    {
        id: '9',
        model: '2023 Audi e-tron GT',
        price: '$105,000',
        image: require('@/assets/images/cars/AudiE-tron.png'),
        mileage: '3,400 mi',
        year: '2023',
        horsepower: '522 hp',
    },
    {
        id: '10',
        model: '2022 Jeep Wrangler Rubicon',
        price: '$48,750',
        image: require('@/assets/images/cars/JeepWranglerRubicon.png'),
        mileage: '22,000 mi',
        year: '2022',
        horsepower: '285 hp',
    },
];

const { width: screenWidth } = Dimensions.get('window');

const DealsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const renderItem = ({ item }: { item: CarItem }) => (
        <View style={styles.carouselItem}>
            <ImageBackground source={item.image} style={styles.image}>
                <LinearGradient
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
                    style={styles.gradient}
                >
                    <View style={styles.header}>
                        {/* <Pressable style={styles.iconButton}>
                            <MaterialIcons name="favorite-border" size={24} color="white" />
                        </Pressable>
                        <Pressable style={styles.iconButton}>
                            <MaterialIcons name="share" size={24} color="white" />
                        </Pressable> */}
                    </View>

                    <View style={styles.details}>
                        <Text style={styles.model}>{item.model}</Text>
                        <Text style={styles.price}>{item.price}</Text>

                        <View style={styles.specs}>
                            <SpecItem icon="calendar-today" value={item.year} />
                            <SpecItem icon="place" value={item.mileage} />
                            <SpecItem icon="speed" value={item.horsepower} />
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                loop={false}
                width={screenWidth}
                height={400}
                autoPlay={false}
                data={dealsData}
                scrollAnimationDuration={100}
                onSnapToItem={(index) => setActiveIndex(index)}
                renderItem={renderItem}
            />

            <View style={styles.indicatorContainer}>
                {dealsData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            index === activeIndex && styles.activeIndicator
                        ]}
                    />
                ))}
            </View>
            <Text style={styles.listHeader}>All Available Cars</Text>
        </View>
    );
};

const SpecItem = ({ icon, value }: { icon: string; value: string }) => (
    <View style={styles.specItem}>
        <MaterialIcons name={icon as any} size={20} color="white" />
        <Text style={styles.specText}>{value}</Text>
    </View>
);

const DealsScreen = () => {
  return (
    <FlatList
      data={dealsData}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={styles.carouselPadding}>
          <DealsCarousel />
        </View>
      }
      renderItem={({ item }) => (
        <Pressable 
          style={styles.listItem}
        >
          <ImageBackground 
            source={item.image} 
            style={styles.listImage}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
              style={styles.listGradient}
            >
              <View style={styles.listTextContainer}>
                <Text style={styles.listModel}>{item.model}</Text>
                <Text style={styles.listPrice}>{item.price}</Text>
              </View>
              
              <View style={styles.listSpecs}>
                <SpecItem icon="calendar-today" value={item.year} />
                <SpecItem icon="speed" value={item.horsepower} />
                <SpecItem icon="directions-car" value={item.mileage} />
              </View>
            </LinearGradient>
          </ImageBackground>
        </Pressable>
          )}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    carouselItem: {
        flex: 1,
        borderRadius: 12,
        overflow: 'hidden',
        marginRight: 24,
    },
    carouselPadding: {
        marginTop: 16,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    gradient: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 12,
    },
    iconButton: {
        padding: 8,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
    },
    details: {
        gap: 8,
    },
    model: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    price: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
    specs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    specItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    specText: {
        color: 'white',
        fontSize: 14,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginTop: 16,
        marginBottom: 24,
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
    },
    activeIndicator: {
        backgroundColor: '#007AFF',
    },
    listHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
        paddingHorizontal: 8,
    },

    listContent: {
        paddingHorizontal: 12,
        paddingBottom: 32,
    },
    listItem: {
        height: 120,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 16,
    },
    listImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    listGradient: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    listTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    listModel: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
    },
    listPrice: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    listSpecs: {
        justifyContent: 'space-between',
        marginLeft: 16,
    },
});

export default DealsScreen;
