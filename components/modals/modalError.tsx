import { View, Text } from "react-native";
import ModalStyle from "./modalStyle";
import { useContext, useEffect, useState } from "react";
import CloseButton from "../button/closeButton";
import { MessageContext } from "../../context/messageContext";
import CancelModalButton from "../button/cancelModalButton";

interface props {
    text: string;
    isVisible: boolean;
    callback: any;
}

const ModalError = ({ text, isVisible, callback }: props) => {
    // const context = useContext(MessageContext);
    const closeModal = (): void => {
        callback();
    }

    return (
        <>
            {
                isVisible ? (
                    <>
                        <View style={ModalStyle.ModalError} />
                        <View style={ModalStyle.ModalErrorInner}>
                            <View style={ModalStyle.ModalErrorInnerHeader}>
                                <CloseButton callback={closeModal} />
                            </View>
                            <Text style={ModalStyle.content}>{text}</Text>
                            <View style={ModalStyle.footer}>
                                <CancelModalButton text={"Fechar"} callback={closeModal} />
                            </View>
                        </View>
                    </>
                ) : null
            }
        </>
    );
}

export default ModalError;