import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';

import SecondView from '../components/secondView';
import FirstView from '../components/firstView';
import { GetData } from '../redux/action/action';
import { ImagesResponseData } from '../interface/imageData';




const Home = ({ navigation }) => {
    const layout = useWindowDimensions();

    const { ReduxData } = useSelector(state => state.reducerAPI);

    const [index, setIndex] = useState(0);

    const dispatch = useDispatch();

    const sortedData = ReduxData.sort((a, b) => {
        const dateA = new Date(a.createdAt)
        const dateB = new Date(b.createdAt)

        if (dateA > dateB) return 1;
        if (dateA < dateB) return -1;
        return 0;
    })


    const [routes] = useState([
        { key: 'Recent', title: 'Recent' },
        { key: 'favorited', title: 'favorited' },
    ]);


    const FirstRoute = () => {
        return (
            <FirstView data={sortedData} navigation={navigation} />
        )
    };
    const SecondRoute = () => {
        return (
            <SecondView data={sortedData} navigation={navigation} />
        )
    };
    const renderScene = SceneMap({
        Recent: FirstRoute,
        favorited: SecondRoute,
    });

    useEffect(() => {

        dispatch(GetData());

    }, []);

    return (
        <View style={styles.mainScreen}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                style={styles.tabView}
                indicatorStyle={{ backgroundColor: "black" }}

            />
        </View>
    )
}

export default Home;


const styles = StyleSheet.create({
    mainScreen: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
        width: '100%',

    },
    tabView: {
        marginLeft: 10,
        marginRight: 10,
    },

})
