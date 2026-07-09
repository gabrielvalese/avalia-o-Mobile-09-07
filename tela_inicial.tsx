import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
    <View style={style.container}>
      <Image source={require('./assets/folha.png')} style={style.imagem}/>
      <Text style={style.titulo}>Bem-vindo ao calculador de IMC!</Text>
      <Text style={style.texto}>O IMC (Índice de Massa Corporal) é uma medida que relaciona o peso e a altura de uma pessoa, sendo utilizado para avaliar se ela está dentro do peso ideal, abaixo ou acima do recomendado.
</Text>
    <Text style={style.texto2}>Para calcular o IMC, basta inserir seu peso (em kg) e sua altura (em metros) na próxima tela.
</Text>
    
    <View style={style.botao}>
      <Link href='/'>
      <Text style={style.texto_botao}>Clique aqui para calcular seu IMC</Text>
      </Link>
    </View>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: "#e6f2e6",
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    width: 100,
    height: 100
  },
  titulo: {
    color: '#017c24',
    fontSize: 24,
    marginTop: 15
  },
  texto: {
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30

  },
  texto2: {
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20

  },
  botao: {
    width: 200,
    height: 35,
    borderRadius: 8,
    backgroundColor: '#a8edacc2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto_botao: {
    fontSize: 13,
  }




})
