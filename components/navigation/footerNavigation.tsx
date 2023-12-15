import { View, Text, FlatList } from "react-native";
import NavigationStyle from "./navigationStyle";
import IconButton from "../button/iconButton";
import { useEffect, useState } from "react";

interface props {
    index: number;
    navigation: any;
}

const FooterNavigation = ({ index, navigation }: props) => {
    const [selected, selectedSet] = useState<Array<boolean>>([false, false, false]);

    useEffect(() => {
        let items = [false, false, false];
        items[index] = true;
        selectedSet(items);
    }, [index])

    const aa = (i: number) => {
        switch (i) {
            case 0:
                navigation.navigate('HomeSystem')
                break;
            case 1:
                navigation.navigate('SerieSystem')
                break;
            case 2:
                navigation.navigate('HomeSystem')
                break;
            default:
                break;
        }
    }

    return (
        <View style={NavigationStyle.footerStyle}>
            <IconButton icon={"house"} isSelected={selected[0]} callback={() => aa(0)} LabelText={"Home"} />
            <IconButton icon={"academia"} isSelected={selected[1]} callback={() => aa(1)} LabelText={"Serie"} />
            <IconButton icon={"muscle"} isSelected={selected[2]} callback={() => aa(2)} LabelText={"Exercicio"} />
        </View>
    );
}

export default FooterNavigation;