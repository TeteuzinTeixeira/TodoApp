import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    title: {
        flexDirection: 'row',
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    logo: {
        height: '100%',
        margin: 0,
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    selectionTitle: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        width: '75%',
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#7A58F9',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    confirmMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


    containerConfirmation: {
        flex: 1,
        position:'absolute',
        zIndex:100,
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems:'center',

    },
    confirmationContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: '70%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 50,
        padding: 15,
        
    },
    confirmButtons: {
        flexDirection: 'row',
    },
    confirmButton: {
        backgroundColor: '#69FF65',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    cancelButton: {
        backgroundColor: '#FF6A60',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
});

export default styles