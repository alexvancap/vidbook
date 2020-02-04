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
    profileContainerWeb: {
        backgroundColor: 'rgba(206, 206, 206, 0.42)',
        height: '100%',
        minWidth: '960px',
        maxWidth: '960px',
    },
    profileContainerMobile: {
        backgroundColor: 'rgba(206, 206, 206, 0.42)',
        height: '100%',
        width: '100%',
    },
    profileHeaderContainerWeb: {
        alignItems: 'center',
        flexDirection: 'row',
        height: '30%',
        justifyContent: 'center'
    },
    profileHeaderContainerMobile: {
        alignItems: 'center',
        flexDirection: 'row',
        
        height: '25%',
        justifyContent: 'center'
    },


    picContainerWeb: {
        // position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#264C7F',
        // height: '100%'
    },
    picContainerMobile: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#264C7F',
    },
    profilePicContainerWeb: {
        position: 'absolute',
        backgroundColor: '#0056CC',
        height: '90%',
        width: '20%',
        borderRadius: 250,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto'
    },
    profilePicContainerMobile: {
        position: "absolute",
        backgroundColor: '#0056CC',
        height: '70%',
        width: '40%',
        borderRadius: 100,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    addHeaderImgButton: {
        position: 'absolute',
        right: '1%',
        bottom: '3%',
        backgroundColor: '#0056CC'
    },
    addProfileImgButton: {
        backgroundColor: '#264C7F',
    },
    profileInfo: {
        backgroundColor: 'red',
        height: 200,
        width: '100%',
        marginTop: 10,
        backgroundColor: '#264C7F',
        borderRadius: 10
    },
    profileInfoHeader: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: '2%'
    },
    editInfoButton: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        width: 70,
    },
    profileInfoTextTitle: {
        color: 'white',
        fontSize: 16,
        marginLeft: 5
    },
    profileInfoTextBlock: {
        color: 'white',
        marginLeft: 10
    }
});