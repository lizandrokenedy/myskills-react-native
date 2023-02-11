import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface IButtonProps extends TouchableOpacityProps {
    title: string,
    handle: () => void
}

// type ButtonProps = TouchableOpacityProps & {
//     label: string,
//     handle: () => void
// };

export default function Button({ title, handle, ...rest }: IButtonProps) {

    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            onPress={handle}
            {...rest}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}