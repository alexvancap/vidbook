import { StyleSheet, Text, View } from 'react-native';

export const Styles = StyleSheet.create({
    navBarContainer: {
        backgroundColor: "#00367F",
        flexDirection: "row",
        height: 60,
        width: '100%'
    },
    logo: {
        lineHeight: 60,
        textAlign: "center",
        padding: 20,
        color: 'white',
        marginRight: 30,
        fontSize: 25
    },
    navButton: {
        lineHeight: 60,
        textAlign: "center",
        padding: 20,
        color: 'white',
        width: '100%',
        flex: 1
    },
    logoutButton: {
        position: 'absolute',
        textAlign: "center",
        padding: 20,
        color: 'white',
        width: '100%',
        alignSelf: 'flex-end',
        right: 0
    },
    navButtonClicked: {
        lineHeight: 60,
        textAlign: "center",
        padding: 20,
        backgroundColor: '#0056CC',
        borderRadius: 8,
    },
    loginContainer: {
        position: 'absolute',
        top: '35%',
        flex: 1, 
        minWidth: 300, 
        maxHeight: 100,
        bottom: "20%", 
        alignSelf: "center"
    },
    loginButtons:{
        flexDirection: 'row',
    },
    loginButton: {
        marginTop: 5,
        padding: '3%',
        flex: 0.45
    },
    registerButton: {
        marginTop: 5,
        padding: '3%',
        marginLeft: 'auto',
        flex: 0.45
    },
    registerContainer: {
        top: '20%',
        width: 400,
        alignSelf: 'center',
        
    },
    registerContainerMobile: {
        position: 'absolute',
        top: '20%',
        alignSelf: "center",
    },
    registerCombinedForms: {
        flexWrap: 'wrap',
        alignContent: 'stretch',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    registerAndBackButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    navBarContainerMobile: {
        position: 'absolute', 
        bottom: 150, 
        width: '105%', 
        alignSelf: 'center', 
        height: 80, 
        bottom: 0,
        backgroundColor: '#00367F', 
        flexDirection: 'row',
    }
});