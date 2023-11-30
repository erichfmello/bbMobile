import { Image, Text, View } from "react-native";
import LogoStyle from "./logoStyle";

const Logo = () => {
    return (
        <View style={LogoStyle.logoContent}>
            <Image source={require('../../assets/img/bbIcon.png')} style={LogoStyle.logoImage} />
        </View>
    );
}

export default Logo;