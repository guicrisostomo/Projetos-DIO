import React from 'react';
import { Text } from 'react-native';
import {
  View,
  ImagemSemPedidos,
  ViewImagem
} from './style';

export default function Principal() {
  return (
    <View>
      <Text style={{fontFamily: 'SulSans,Helvetica,sans-serif'}}>MEUS PEDIDOS</Text>

      <ViewImagem>
        <ImagemSemPedidos />

        <Text style={{padding: 10, fontWeight: 'bold', fontSize: 16}}>Bora pedir um iFood?</Text>
        <Text style={{textAlign: 'center', padding: 10, color: `#999`}}>Experimente os melhores restaurantes e mercados perto de você</Text>
      </ViewImagem>
    </View>
  );
}