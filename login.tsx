import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

  const BD_users= [
    {user: "admin", password: '1234'}
  ];

export default function Index() {



  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const loginPress = () => {
    const userTrue = BD_users.find(
      (item) => item.user === user && item.password === password
    );
  

  if (userTrue) {
    router.push('/Inicio');
  }
  else {
    alert('Erro')
  }
};



  return (
    <View style={styles.container}>
      <Text style={{fontSize: 96}}>🛒</Text>
      <Text style={styles.tit}>Gerenciador de Produtos</Text>
      <Text style={styles.subtitle}>Faça login para acessar o sistema</Text>
      <TextInput style={styles.input} placeholder="Digite seu usuário" 
      value={user}
      onChangeText={setUser}/>
      <TextInput style={styles.input} placeholder="Digite sua senha"
      value={password}
      onChangeText={setPassword} secureTextEntry />
      <Pressable onPress={loginPress}>
        <Text style={styles.button}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20
  },
  tit: {
    fontSize: 24,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    width: "80%"
  },
  button: {
    backgroundColor: "#06b695",
    color: "white",
    padding: 10,
    borderRadius: 5,
    width: 320,
    textAlign: 'center'
  }
});
