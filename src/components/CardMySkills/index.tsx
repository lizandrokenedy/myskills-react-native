import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface ICardSkill extends TouchableOpacityProps {
    skill: string
}

export default function CardSkills({ skill, ...rest }: ICardSkill) {
    return (
        <TouchableOpacity {...rest} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    );
}