import { Button } from "react-native";
import React from "react";
import { View, Text } from "react-native";
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Text>Call Container Here </Text>
                <Button
                    title="To Do List"
                    onPress={() => {
                        this.props.navigation.navigate('List', { titleParam: 'To Do List' })
                    }} />

            </View>
        );
    }
}

export default HomeScreen
