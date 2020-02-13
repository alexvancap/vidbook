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
    registerCombinedFormsMobile: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        backgroundColor: '#0056CC', 
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
        height: 965,
        width: '100%'

    },
    profileHeaderContainerWeb: {
        alignItems: 'center',
        flexDirection: 'row',
        height: '35%',
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
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    picContainerMobile: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#264C7F',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
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
        width: '100%',
        marginTop: 8,
        backgroundColor: '#264C7F',
        borderRadius: 10,
        justifyContent: 'flex-start',
        paddingBottom: '4%'
    },
    profileInfoMobile: {
        backgroundColor: 'red',
        width: '100%',
        marginTop: 8,
        backgroundColor: '#264C7F',
        borderRadius: 10,
        justifyContent: 'flex-start',
        paddingBottom: '12%',
    },
    profileInfoHeader: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: '2%'
    },
    profileInfoTextBlock: {
        color: 'white',
        marginLeft: '5%',
        marginBottom: '2%',
        maxWidth: '90%',
    },
    profileInfoTextBlockMobile: {
        color: 'white',
        marginLeft: '10%',
        marginBottom: '2%',
        maxWidth: '90%',
    },
    editInfoButton: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        width: 70,
        backgroundColor: '#0056CC',
    },
    profileInfoTextTitle: {
        color: 'white',
        fontSize: 16,
        marginLeft: 30,
        marginTop: 5
    },
    profileInfoText: {
        color: 'white',
        marginTop: 3,
        marginLeft: 40,
    },
    profileVideoContainer: {
        height: 450, 
        backgroundColor: '#264C7F', 
        borderRadius: 10, 
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -3
    },
    settingsCurrentInfo: {
        backgroundColor: 'red',
        height: '33%',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(206, 206, 206, 0.42)',
        marginBottom: 60,
        zIndex: -1
    },
    settingsItem: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 2
    },
    settingsSubmit: {
        marginTop: 20,
        height: 50
    },
    homeContainer: {
        width: 960, 
        height: '100%', 
        backgroundColor: 'rgba(206, 206, 206, 0.42)', 
        alignItems: 'center'
    },
    homeContainerMobile: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(206, 206, 206, 0.42)',
        height: '100%'
        
    },
    homeProfileCard: {
        justifyContent: 'flex-start',
        width: '60%',
        backgroundColor: '#264C7F', 
        borderRadius: 10,
        height: 450,
    },
    homeProfileCardMobile: {
        width: '100%', 
        height: 420,
        backgroundColor: '#264C7F', 
        borderRadius: 10,
    },
    homeCardHeaderContainer: {
        height: '12%',
        backgroundColor: '#264C7F',
        flexDirection: 'row',
        alignContent: 'center',
    },
    homeCardHeaderContainerMobile:{
        height: 70,
        backgroundColor: '#264C7F',
        flexDirection: 'row',
        alignContent: 'center',
    },
    homeCardProfilePicture: {
        height: '90%',
        width: '8.5%',
        marginLeft: '5%',
        marginTop: '0.5%',
        backgroundColor: 'red',
        borderRadius: 100,
    },
    homeCardProfilePictureMobile: {
        height: '80%',
        width: '13%',
        marginLeft: '5%',
        marginTop: '2%',
        backgroundColor: '#4C97FF',
        borderRadius: 30,
        justifyContent: 'center'
    },
    homeCardProfileName: {
        marginLeft: 20,
        fontSize: 15,
        color: 'white',
        alignSelf: 'center',
        top: '35%'
    },
    homeCardCurrentRole: {
        position: 'absolute',
        alignSelf: 'center',
        right: 50,
        fontSize: 14,
        color: 'white'
    },
    homeCardVideoContainer: {
        height: '75%',
        width: '90%',
        backgroundColor: 'black',
        alignSelf: 'center'
    },
    homeCardVideoContainerMobile: {
        height: '65%',
        width: '90%',
        backgroundColor: 'black',
        alignSelf: 'center'
    },
    homeCardBottom: {
        height: '14%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    homeCardBottomMobile: {
        height: '14%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    homeCardBottomLikes: {
        marginLeft: '5%',
        color: 'white'
    },
    homeCardBottomComments: {
        marginLeft: 10,
        color: 'white'
    },
    homeCardBottomButtons: {
        flexDirection: 'row',
        position: 'absolute',
        right: '4%'
    },
    homeCardComments: {
        backgroundColor: '#4C97FF',
        width: 100,
        marginLeft: '1%',
        width: '98%',
        justifyContent: 'flex-start',
        padding: 10,
        marginTop: -7.3,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    homeCardCommentsMobile: {
        backgroundColor: '#4C97FF',
        width: 100,
        marginLeft: '1%',
        width: '98%',
        justifyContent: 'flex-start',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        maxHeight: 140,
    },
    homeCommentsPicture: {
        height: 55,
        width: 55,
        borderRadius: 100,
        backgroundColor: '#264C7F',
        justifyContent: 'center'
    },
    homeCardSingleCommentContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    homeSingleComment: {
        marginLeft: '3%',
        marginBottom: 10,
        width: '80%',
        backgroundColor: 'rgba(206, 206, 206, 0.42)',
        alignSelf: 'center',
        borderRadius: 25,
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignContent: 'center',
        padding: 10 ,
    }
});