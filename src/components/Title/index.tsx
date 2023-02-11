import React, { Children } from 'react'
import { Text, TextInput, TextInputProps, TextProps } from 'react-native';
import { styles } from './styles';

interface ITitle extends TextProps {
}

export default function Title({children, ...props}: ITitle) {

    return (
        <Text style={styles.title}>{children}</Text>
    );
}