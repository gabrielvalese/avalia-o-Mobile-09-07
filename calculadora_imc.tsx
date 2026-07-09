import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


const { resultado } =  useLocalSearchParams();
const router = useRouter();

const imc = parseFloat(resultado as string);

function classifyResult() {
    if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    return "Obesidade grau I";
  } else if (imc >= 35 && imc <= 39.9) {
    return "Obesidade grau II";
  } else {
    return "Obesidade grau III (obesidade mórbida)";
  }
}

export default function Resultado() {
  return (
    <View style={resultadoStyle.container}>
      <Text style={resultadoStyle.titles}>Resultado do IMC</Text>
      <Text style={resultadoStyle.titles}>IMC: {imc}</Text>
      <View style={resultadoStyle.resultContainer}>
        <Text>{classifyResult()}</Text>
      </View>
      <View style={resultadoStyle.info}>
        <Text style={resultadoStyle.textInfo}>
            O IMC é uma medida utilizada para avaliar se uma pessoa está dentro do peso ideal, abaixo ou acima do recomendado. As classes de IMC são definidas da seguinte forma:
             {"\n"}
                {"\n"} ✅ Abaixo do peso: IMC menor que 18,5
                {"\n"} ✅ Peso normal: IMC entre 18,5 e 24,9
                {"\n"} ✅ Sobrepeso: IMC entre 25 e 29,9
                {"\n"} ✅ Obesidade grau I: IMC entre 30 e 34,9
                {"\n"} ✅ Obesidade grau II: IMC entre 35 e 39,9
                {"\n"} ✅ Obesidade grau III (obesidade mórbida): IMC acima de 40

        </Text>
      </View>
    </View>
  );
}

const resultadoStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#e6f2e6',
        gap: 20
    },
    titles: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#18543e'
    },
    resultContainer: {
        width: '40%',
        backgroundColor: '#cce5cc',
        height: 72,
        borderRadius: 10


    },
    info: {
        width: '85%',
    },
    textInfo: {
        fontSize: 14,
        lineHeight: 22,
        
    }

})
