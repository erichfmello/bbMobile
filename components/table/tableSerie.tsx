import { View } from "react-native";
import TableStyle from "./tableStyle";
import TableSerieHeader from "./header/tableSerieHeader";
import TableSerieBody from "./body/tableSerieBody";

const TableSerie = () => {
    return (
        <View>
            <TableSerieHeader />
            <TableSerieBody />
        </View>
    );
}

export default TableSerie