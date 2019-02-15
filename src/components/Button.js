import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 30,
        height: Dimensions.get('window').width / 4.5,
        width: Dimensions.get('window').width / 4.5,
        padding: 20,
        backgroundColor: '#a9a9a9',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.8)',
        borderRadius: 100,
        justifyContent: 'space-between',
        marginBottom: 6,
        
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    operationButton2: {
        color: 'rgba(0,0,0,0.8)',
        backgroundColor: '#a9a9a9'
    },

    buttonDouble: {
        width: (Dimensions.get('window').width / 4.5 * 2),
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4.5 * 3),
    }
})

export default props => {

    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    if (props.operation2) stylesButton.push(styles.operationButton2)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}