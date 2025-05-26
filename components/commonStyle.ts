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

    homePortalItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomColor: '#4c4c4c',
        borderBottomWidth: 1
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
    },

    chip: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 100,
        minWidth: 56,
        padding: 8,
    }
}

export const commonTextStyle = {
    baseTextInput: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 8,
        padding: 8,
    },
}