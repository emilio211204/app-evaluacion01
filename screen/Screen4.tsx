import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import Tarjeta from '../components/Tarjeta';


export default function Screen4() {
    const [datos, setdatos] = useState([]);

    useEffect(() => {
        async function leerArchivo() {
            try {
                const resp = await fetch('https://jritsqmet.github.io/web-api/libros.json');
                const json = await resp.json();
                console.log(json.libros); 
                setdatos(json.libros);
            } catch (error) {
                console.error(error); 
            }
        }
        leerArchivo();
    }, []);
    return (
        <View>
            <Text>Libros</Text>
            <FlatList
                data={datos}
                renderItem={({ item }) => (<Tarjeta libros={item} />)} />
        </View>
    )
}

const styles = StyleSheet.create({})