import { AsyncStorage } from 'react-native';


export const loginFN = async (data) => {
    console.log(data)
    if (data.email_phone == '1' && data.password == '1') {
        try {
            await AsyncStorage.setItem('Islogin', JSON.stringify(true));
            await AsyncStorage.setItem('isJymOwner', JSON.stringify(true));
        } catch (error) {
        }
    }
}

export const registrationFN = async (data) => {

}
