import { StyleProp, ViewStyle } from "react-native";

export const commonStyle: { [key: string]: StyleProp<ViewStyle> } = {
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    homePortalButton: {
        margin: 8,
        borderColor: 'gold',
        borderWidth: 1
    },

    redBackground: {
        backgroundColor: '#B03737',
    },

    iconButton: {
        width: 40,
        height: 40,
        padding: 8,
        margin: 8,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    }
}