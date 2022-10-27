import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Header = () => {

    const [remainingTime, setRemainingTime] = useState("");
    const [collected, setCollected] = useState('');

    const handlePress = () => {
        setRemainingTime('60')
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(remainingTime - 1)
        }, 1000);

        if(remainingTime == 0) {
            clearInterval(intervalId);
        }

        return() => {
            clearInterval(intervalId);
        }
    }, [remainingTime]);

    const updateRemainingTime = () => {
        console.log("time")
    }

    return (
        <View style={styles.headerContainer}>
            <View style={styles.info}>
                <Text>Squirrell away!</Text>
                <Text>Find as many seeds and nuts as you can in 60 seconds!</Text>
            </View>
            <View style={styles.stats}>
                <Button title="Start" onPress={handlePress}></Button>
                {/* seconds left */}
                <Text>{remainingTime}</Text>
                {/* number of things found */}
                <Text>{collected}/50</Text>
            </View>

        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'yellow'
    },
    info: {
        marginTop: 30
    },
    stats: {
        flexDirection:'row',
        justifyContent: 'space-evenly',
        marginTop: 5
    }
})
