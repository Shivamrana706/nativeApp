import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useDispatch } from 'react-redux';
import { DeleteData, FavoriteData } from "../redux/action/action";
import { ImagesResponseData } from '../interface/imageData';

const FirstView = ({ data, navigation }) => {
    const dispatch = useDispatch();

    const deleteDataFunction = (id) => {
        dispatch(DeleteData(id));
    }
    const favoriteDataFunction = (value, id) => {
        dispatch(FavoriteData({ favorited: !value }, id))
    }

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Detail", { item })}
                    >
                        <View style={styles.item}>
                            <View style={styles.leftView}>
                                <Image style={styles.image} source={{ uri: item.url }} />
                            </View>
                            <View style={styles.rightView}>
                                <View style={styles.rightUpperView}>
                                    <Text style={styles.rightViewText}>
                                        Name:- {item.filename.slice(0, -4)}
                                    </Text>
                                    <Text style={styles.rightViewText}>
                                        Uploded by:- {item.uploadedBy}
                                    </Text>
                                </View>
                                <View style={styles.rightBottomView}>
                                    {item.favorited ? (
                                        <MaterialIcons onPress={() => favoriteDataFunction(item.favorited, item.id)} name="favorite" size={28} color="black" />
                                    ) : (
                                        <MaterialIcons onPress={() => favoriteDataFunction(item.favorited, item.id)} name="favorite-border" size={28} color="black" />
                                    )
                                    }
                                    <AntDesign onPress={() => deleteDataFunction(item.id)} name="delete" size={28} color="black" />
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default FirstView;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "White",
        marginTop: 5,
        marginBottom: 20,

    },

    item: {
        flexDirection: "row",
        marginBottom: 2,
        marginTop: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 3,
        width: '100%'

    },
    leftView: {
        width: '35%',
    },
    rightView: {
        flexDirection: "column",
        backgroundColor: "white",
        width: '65%',
        padding: 5,
    },
    rightUpperView: {

    },
    rightBottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 25,
        paddingLeft: 5,
        paddingRight: 5
    },
    rightViewText: {
        fontSize: 12,
        fontWeight: "500",
        marginTop: 5,
    },
    image: {
        width: 150,
        height: 100,
    },

});
