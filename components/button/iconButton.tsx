import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import White16Bold from "../label/white16Bold";
import ButtonStyle from "./buttonStyle";

interface props {
    icon: string;
    isSelected: any;
    callback: any;
    LabelText: string;
}

const IconButton = ({ icon, isSelected, callback, LabelText }: props) => {
    return (
        <TouchableOpacity style={ButtonStyle(isSelected).IconButton} onPress={callback}>
            {
                icon == 'house' ? (
                    <Image source={require('../../assets/img/house.png')} alt="home" />
                ) : icon == 'academia' ? (
                    <Image source={require('../../assets/img/academia.png')} alt="home" />
                ) : icon == 'muscle' ? (
                    <Image source={require('../../assets/img/muscle.png')} alt="home" />
                ) : icon == 'pencil' ? (
                    <Image source={require('../../assets/img/lapis.png')} alt="home" />
                ) : null
            }
            <White16Bold text={LabelText} />
        </TouchableOpacity>
    );
}

export default IconButton;