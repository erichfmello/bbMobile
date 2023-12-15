import { ScrollView, View } from "react-native";
import TableStyle from "../tableStyle";
import Black16Bold from "../../label/black16Bold";
import Black16W400 from "../../label/black16W400";
import IconButton from "../../button/iconButton";

const TableSerieBody = () => {
    return (
        <ScrollView>
            <View style={TableStyle.tableSerieBody}>
                <View style={TableStyle.column2}>
                    <Black16W400 text={"Treino costas"} />
                </View>
                <View style={TableStyle.column2}>
                    <Black16W400 text={"Hipertrofia"} />
                </View>
                <View style={TableStyle.column2}>
                    <Black16W400 text={"Costas"} />
                </View>
                <View style={TableStyle.column1}>
                    <IconButton icon={"pencil"} isSelected={undefined} callback={undefined} LabelText={""} />
                </View>
            </View>
        </ScrollView>
    );
}

export default TableSerieBody;