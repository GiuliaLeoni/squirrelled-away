import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Header = ({ collected }) => {

    const [remainingTime, setRemainingTime] = useState("");

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

    return (
        <View style={styles.headerContainer}>
            <View style={styles.info}>
                <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>Squirrel Time ʕ •̀ o •́ ʔ</Text>
                <Text style={{color: 'white', marginTop: 5, marginBottom: 20}}>It's squirrel time! Find as many nuts as you can in 60 seconds!</Text>
            </View>
            <View style={styles.stats}>
                <View>
                    <Button title="Start" onPress={handlePress}></Button>
                </View>
               
                {/* seconds left */}
                <Text style={{fontSize: 30, color: 'white'}}>{remainingTime}</Text>
                {/* number of things found */}
                <Text style={{fontSize: 30, color: 'white'}}>{collected}/50</Text>
            </View>

        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#5e4328',
    },
    info: {
        marginTop: 40,
        alignItems: 'center',
        marginHorizontal: 10
    },
    stats: {
        flexDirection:'row',
        justifyContent: 'space-evenly',
        marginTop: 5
    }
})
