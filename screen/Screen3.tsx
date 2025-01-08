import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { ref, remove, update } from 'firebase/database';
import { db } from '../config/Config';

export default function Screen3() {
    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [jugadores, setJugadores] = useState('')

    function Editar() {
        update(ref(db, 'equipo/' + id), {
            name: nombre,
            category: categoria,
            players: jugadores
        });
        Alert.alert(
            'Datos editados',
            'Los datos del equipo han sido editados con éxito',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        );
    }

    function Eliminar() {
        Alert.alert(
            'Eliminar equipo ',
            '¿Estás seguro de eliminar el equipo?',
            [
                { text: 'Cancelar', onPress: () => console.log('Cancelar Pressed') },
                {
                    text: 'Eliminar', onPress: () => {
                        remove(ref(db, 'equipo/' + id));
                        Alert.alert(
                            'Equipo eliminado',
                            'El equipo ha sido eliminado con éxito',
                            [
                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                            ],
                            { cancelable: false }

                        );
                    
                    }
                },
            ],
            { cancelable: false }
        ); 

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cambiar datos de Equipo</Text>
            <TextInput
                style={styles.input}
                placeholder='Id del Equipo'
                onChangeText={text => setId(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Nombre del Equipo'
                onChangeText={text => setNombre(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Categoria del Equipo'
                onChangeText={text => setCategoria(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Jugadores del Equipo'
                onChangeText={text => setJugadores(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => Editar()}>
                <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.title}>Eliminar Equipo</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Id del Equipo'
                    onChangeText={text => setId(text)}
                />
                <TouchableOpacity style={styles.button} onPress={() => Eliminar()}>
                    <Text style={styles.buttonText}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#20272F',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
})