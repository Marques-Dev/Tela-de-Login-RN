import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView>
      <View>
        <Image
          source={require('./src/assets/logo.png')}
        />
      </View>
      <View>
        <TextInput
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity>
          <Text>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Criar conta</Text>
        </TouchableOpacity>
        
      </View>
    </KeyboardAvoidingView>
  );
}
