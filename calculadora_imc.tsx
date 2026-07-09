import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function CalculadoraIMC() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');
    const router = useRouter();

    function calcularIMC() {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);
        if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
            Alert.alert('Entrada inválida', 'Por favor, insira valores válidos para peso e altura.');
            return null;
        }
        const imc = pesoNum / (alturaNum * alturaNum);
        return imc.toFixed(2)
    };


    function passarResultado() {
        const imcCalculado = calcularIMC();
        if (imcCalculado === null) {
            return;
        }
        
        setResultado(imcCalculado);
        router.push({
            pathname: '/components/resultado',
            params: { resultado: imcCalculado },
        });
    }


  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 20, color: '#18543e', marginBottom: 20, fontWeight: 'bold' }}>Calculadora de IMC</Text>
        <TextInput style={styles.input} placeholder='Peso (kg)' value={peso} onChangeText={setPeso}></TextInput>
        <TextInput style={styles.input} placeholder='Altura (m)' value={altura} onChangeText={setAltura}></TextInput>
        <Pressable onPress={passarResultado} style={styles.Pressable}>
            <Text style={{ color: '#18543e', fontWeight: 'bold' }}>Ver resultado</Text>
        </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6f2e6",
  },

  Pressable: {
    alignItems: "center",
    justifyContent: "center",
    width: 115,
    height: 55,
    backgroundColor: "#cce5cc",
    padding: 10,
    borderRadius: 5,
    margin: 15,
  },

  input: {
    height: 50,
    width: 300,
    borderColor: '#18543e',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    margin: 15
  },
});
