import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ref, set } from 'firebase/database'
import { db } from '../config/Config'

export default function Screen1() {
    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [jugadores, setJugadores] = useState('')

    function guardar() {
        set(ref(db, 'equipo/' + id), {
            name: nombre,
            category: categoria,
            players: jugadores
        });
        limpiarCampos();
        Alert.alert('Datos enviados', 'Los datos se han enviado correctamente');
    }

    function limpiarCampos() {    
        setId('');
        setNombre('');
        setCategoria('');
        setJugadores('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingrese el Equipo Deportivo</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Ingrese Id</Text>
                <TextInput
                    placeholder='Ingrese Id'
                    style={styles.input}
                    value={id}
                    onChangeText={(text) => setId(text)}
                    keyboardType='numeric'
                />
                <Text style={styles.label}>Ingrese Nombre</Text>
                <TextInput
                    placeholder='Ingrese Nombre'
                    style={styles.input}
                    value={nombre}
                    onChangeText={(text) => setNombre(text)}
                />
                <Text style={styles.label}>Ingrese Categoria</Text>
                <TextInput
                    placeholder='Ingrese Categoria'
                    style={styles.input}
                    value={categoria}
                    onChangeText={(text) => setCategoria(text)}
                />
                <Text style={styles.label}>Ingrese Número de Jugadores</Text>
                <TextInput
                    placeholder='Ingrese Numero de Jugadores'
                    style={styles.input}
                    value={jugadores}
                    onChangeText={(text) => setJugadores(text)}
                />
                <TouchableOpacity onPress={() => guardar()}  style={styles.button}>
                    <Text style={styles.buttonText}>Agregar datos</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20
    },
    form: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    label: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontSize: 16
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 4,
        elevation: 3,
        marginTop: 20
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})