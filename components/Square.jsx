import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Square = () => {
    const rand = Math.floor(Math.random() * 5);
    const [nuts, setNuts] = useState(rand);
    const [dug, setDug] = useState(false);

    const handlePress = () => {
        const rand = Math.floor(Math.random() * 5);
        setNuts(rand);
        alert(`${nuts} nuts!`);
        setDug(true);
    }

    let dugSquare = 'brown';

    return (
        <View style={styles.rowContainer}>
            <TouchableOpacity onPress={handlePress}>
            <View style={[styles.rowSquare, dug && {backgroundColor: dugSquare}]}></View> 
            </TouchableOpacity>
        </View>
    )
}

export default Square;
const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'purple',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    rowSquare: {
        backgroundColor: 'green',
        borderColor: 'yellow',
        borderWidth: 1,
        width: 45,
        height: 45
}
});
