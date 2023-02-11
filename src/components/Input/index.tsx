import React from 'react'
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

interface IInput extends TextInputProps {
}

export default function Input(props: IInput) {
    const { placeholderTextColor = '#555' } = props;

    return (
        <TextInput
            {...props}
            style={styles.input}
            placeholderTextColor={placeholderTextColor}
        />
    );
}