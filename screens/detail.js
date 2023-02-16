import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Detail = ({ navigation, route }) => {

    const { item } = route.params

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={{ uri: item.url }} />
                </View>
                <View style={styles.detailView}>
                    <Text style={styles.detailViewText}>Name:- {item.filename.slice(0, -4)}</Text>
                    <Text style={styles.detailViewText}>Uploded by:- {item.uploadedBy}</Text>
                    <Text style={styles.detailViewText}>Created At:- {item.createdAt}</Text>
                    <Text style={styles.detailViewText}>Updated At:- {item.updatedAt}</Text>
                </View>
                <View style={styles.descriptionView}>
                    {
                        item.description ? <Text style={styles.descriptionViewText} >Description:-{item.description}</Text> : <Text style={styles.descriptionViewText} >{item.description}</Text>
                    }

                </View>
                <View style={styles.otherView}>
                    {
                        item.favorited ? <MaterialIcons name="favorite" size={34} color="black" /> : <MaterialIcons name="favorite-border" size={34} color="black" />
                    }


                </View>
            </View>

        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: 3

    },
    item: {
        justifyContent: 'flex-start'
    },
    imageView: {
        alignItems: 'center'

    },
    detailView: {
        padding: 2,
    },
    detailViewText: {
        fontFamily: 'Arial',
        fontWeight: '700'
    },
    descriptionView: {
        padding: 2,
    },
    descriptionViewText: {
        marginTop: 10,
        fontFamily: 'Times New Roman',
        fontWeight: '600'
    },
    otherView: {
        marginTop: 30,
        alignItems: 'center'

    },
    image: {
        width: 408,
        height: 250

    }


})