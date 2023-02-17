import { StyleSheet, View, Text } from 'react-native';




const Header = () => {
    return (
        <View style={style.header}>
            <Text style={style.headerText}>Photo Gallery</Text>
        </View>
    )
}
export default Header;

const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: 'black',
        justifyContent: 'center',
        width: '100%',
        marginLeft: -20,
        height: 40

    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,

    }
})