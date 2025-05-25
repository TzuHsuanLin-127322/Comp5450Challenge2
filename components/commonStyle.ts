import { StyleProp, ViewStyle } from "react-native";

export const themeColors = {
    primary: 'black',
    secondary: '#B03737',
    background: 'white',
    card: '#f5f5f5',
}

export const commonStyle: { [key: string]: StyleProp<ViewStyle> } = {
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    homePortalButton: {
        margin: 8,
        borderColor: themeColors.secondary,
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