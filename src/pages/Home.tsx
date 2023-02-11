import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import Button from '../components/Button';
import CardSkills from '../components/CardMySkills';
import Input from '../components/Input';
import Title from '../components/Title';

export interface ISkillData {
    id: string,
    name: string,
}

export default function Home() {

    const [newSkill, setNewSkill] = useState<string>('');
    const [mySkills, setMySkills] = useState<ISkillData[]>([]);

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills([...mySkills, data])
    }

    function handleRemoveSkill(id: string) {
        setMySkills(mySkills.filter(skill => skill.id !== id));
    }

    return (
        <View style={styles.container}>
            <Title>Welcome, Lizandro</Title>

            <Input placeholder="New skill" onChangeText={setNewSkill} />

            <Button title="Add" handle={handleAddNewSkill} />

            <Title>My Skills</Title>

            <FlatList
                data={mySkills}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CardSkills onPress={() => handleRemoveSkill(item.id)} skill={item.name} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70,
    },
})