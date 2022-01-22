import { SafeAreaView, Text, View, FlatList, StyleSheet, StatusBar, Image } from "react-native";
import data from '../data';


export default function MovieList() {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (

                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title} - {item.year} </Text>
                        <Image style={styles.image} source={{uri:item.poster}} />
                    </View>
                )

                }
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#072227',
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#35858B',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 100/2,
    },
    title: {
        fontSize: 32,
        color: '#ffffff'
    },
    image: {
        width: 260,
        height: 300,
        borderWidth: 2,
        borderColor: '#4FBDBA',
        resizeMode: 'contain',
        margin: 8

    }
});
