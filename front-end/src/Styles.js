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
        textAlign: "center",
        padding: 20,
        color: 'white',
        width: '100%',
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
    },
    containerWeb: {
        backgroundColor: 'rgba(206, 206, 206, 0.42)',
        height: '100%',
        minWidth: '960px',
        maxWidth: '960px',
        alignItems: 'center'
    },
    containerMobile: {
        backgroundColor: 'rgba(206, 206, 206, 0.42)',
        height: '100%',
        width: '100%'
    },
    picContainerWeb: {
        // position: 'absolute',
        backgroundColor: '#264C7F',
        flex: 1,
        width: '100%',
        maxHeight: '30%',
        alignItems: 'center',
        justifyContent: 'center'
        // height: '100%'
    },
    picContainerMobile: {
        backgroundColor: '#264C7F',
        flex: 1,
        maxHeight: '25%',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    profilePicContainerWeb: {
        backgroundColor: '#0056CC',
        height: '250px',
        width: '250px',
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePicContainerMobile: {
        backgroundColor: '#0056CC',
        height: 190,
        width: 190,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addHeaderImgButton: {
        position: 'absolute',
        right: '1%',
        bottom: '3%',
        backgroundColor: '#0056CC'
    },
    addProfileImgButton: {
        backgroundColor: '#264C7F',
    }
});