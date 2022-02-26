import React from 'react';
import { Text, TextInput, ImageBackground } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { View, ViewPesquisa, ViewCategoria, ColunaCategoria, ItemCategoria } from './style.js';

const ImgBebidas = { uri: "https://static-images.ifood.com.br/image/upload/t_high/discoveries/CategBebidas_8t3z.png" };
const ImgMercado = { uri: "https://static-images.ifood.com.br/image/upload/t_high/discoveries/mercadoheaderapp_lPQs.jpg"};
const ImgPromocoes = { uri: "https://static-images.ifood.com.br/image/upload/t_high/discoveries/promocoesheaderapp_yKGd.jpg"};
const ImgFarmacia = { uri: "https://static-images.ifood.com.br/image/upload/t_high/discoveries/farmaciaheaderapp_07eX.jpg"};

export default function Busca() {
  return (
    <View style={{backgroundColor: 'white'}}>
      <ViewPesquisa style={{backgroundColor: '#f7f7f7', margin: 20}}>
        <Feather name="search" size={24} color="#ea1d2c" style={{padding: 10}} />

        <TextInput style={{width: '80%', alignSelf: 'center', padding: 10}} placeholder="Item ou loja"/>
      </ViewPesquisa>
      
      <ViewCategoria>
        <Text style={{fontSize: 16, fontWeight: 'bold', fontFamily: 'SulSans,Helvetica,sans-serif', marginBottom: 10}}>Categorias</Text>

        <ColunaCategoria>
          <ItemCategoria>
            <ImageBackground source={ImgBebidas} style={{height: 70}} resizeMode="stretch" imageStyle={{ borderRadius: 6}}>
              <Text style={{color: 'white', fontWeight: 'bold', padding: 10}}>Bebidas</Text>
            </ImageBackground>
          </ItemCategoria>
          
          <ItemCategoria style={{marginLeft: 10}}>
            <ImageBackground source={ImgMercado} style={{height: 70}} resizeMode="cover" imageStyle={{ borderRadius: 6}}>
              <Text style={{color: 'white', fontWeight: 'bold', padding: 10}}>Mercado</Text>
            </ImageBackground>
          </ItemCategoria>
          
        </ColunaCategoria>

        <ColunaCategoria>
          <ItemCategoria>
            <ImageBackground source={ImgPromocoes} style={{height: 70}} resizeMode="cover" imageStyle={{ borderRadius: 6}}>
              <Text style={{color: 'white', fontWeight: 'bold', padding: 10}}>Promoções</Text>
            </ImageBackground>
          </ItemCategoria>
          
          <ItemCategoria style={{marginLeft: 10}}>
            <ImageBackground source={ImgFarmacia} style={{height: 70}} resizeMode="cover" imageStyle={{ borderRadius: 6}}>
              <Text style={{color: 'white', fontWeight: 'bold', padding: 10}}>Farmácia</Text>
            </ImageBackground>
          </ItemCategoria>
          
        </ColunaCategoria>
        
      </ViewCategoria>
    </View>
  );
}