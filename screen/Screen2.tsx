import { FlatList, StyleSheet, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../config/Config';
import { onValue, ref } from 'firebase/database';

export default function Screen2() {
    const [datose, setdatose] = useState('')
    const [id, setId] = useState('')
    const [busqueda, setBusqueda] = useState('')

    function leer() {
        const starCountRef = ref(db, 'equipo/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            let lista: any = Object.keys(data).map(id => ({
                id, ...data[id],
            }));
            setdatose(lista);
        });
    }

    useEffect(() => {
        leer()
        console.log(datose);
    }, [])

    const handlePress = () => {
        buscarPorId(busqueda)
    };

    const buscarPorId = (id: string) => {
        const starCountRef = ref(db, 'equipo/' + id);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                Alert.alert(
                    'Más información',
                    ` Nombre: ${data.name}\nCategoría: ${data.category}\nNúmero de jugadores: ${data.players}`,
                    [
                        {
                            text: 'OK',
                            onPress: () => console.log('OK Pressed'),
                        },
                    ],
                    { cancelable: false }
                );
            } else {
                Alert.alert(
                    'No encontrado',
                    'El ID ingresado no existe en la base de datos',
                    [
                        {
                            text: 'OK',
                            onPress: () => console.log('OK Pressed'),
                        },
                    ],
                    { cancelable: false }
                );
            }
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Datos de los Equipo</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese el ID a buscar"
                value={busqueda}
                onChangeText={(text) => setBusqueda(text)}
            />
            <TouchableOpacity onPress={() => handlePress()}  style={styles.touch}>
                <Text style={styles.itemText}>Buscar</Text>
            </TouchableOpacity>
            <FlatList
                data={datose}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                )}
            />
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
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
    },
    itemText: {
        fontSize: 18,
        color: '#666',
    },
    touch:{
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3
    }
})