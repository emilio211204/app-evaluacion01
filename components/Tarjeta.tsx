import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta(props: any) {
    const [modalVisible, setModalVisible] = useState(false)

    function detalles(title: string) {
        setModalVisible(true)
    }
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => detalles(props.libros.titulo)}>
                <Text style={styles.titulo}>{props.libros.titulo}</Text>
                <Text style={styles.descripcion}>{props.libros.autor.nombre}</Text>
                <View style={styles.fila}>
                    <Image source={{ uri: props.libros.detalles.imagen_importada }} style={styles.img} />
                    <Text style={styles.descripcion}>Editorial: {props.libros.detalles.editorial}</Text>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Detalles del libro</Text>
                        <Text style={styles.modalText}>Título: {props.libros.id.titulo}</Text>
                        <Text style={styles.modalText}>Autor: {props.libros.autor}</Text>
                        <Text style={styles.modalText}>Editorial: {props.libros.detalles.editorial}</Text>
                        <Text style={styles.modalText}>Fecha de publicación: {props.libros.año}</Text>
                        <Text style={styles.modalText}>Descripción: {props.libros.descripcion}</Text>
                        <Image style={styles.modalImg} source={{ uri: props.libros.datalles.imagen_importada }} />

                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    descripcion: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    fila: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    modalText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    modalImg: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    modalButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    modalButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
})
