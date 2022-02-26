import React from 'react';
import { Text } from 'react-native';
import PerfilImgCaminho from '../../assets/img/perfil.png';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Foundation, EvilIcons } from '@expo/vector-icons';

import {
  ViewPerfil,
  View,
  ProfileInfo,
  ProfileText,
  Options,
  OptionsText,
  ListOption,
  OptionsLadoDireito,
  Image
} from './style';

export default function Perfil() {

  return (
      <ViewPerfil>
        <View>
          <ProfileInfo>
            <Image source={PerfilImgCaminho} style={{ width: 50, height: 50, borderRadius: 100, backgroundColor: `#ea1d2c` }}/>
            <ProfileText>
              <Text style={{fontSize: 20}}>Guilherme Crisaostomo</Text>
            </ProfileText>

            <OptionsLadoDireito>
              <MaterialCommunityIcons name="qrcode-scan" size={24} color="#ea1d2c" style={{paddingLeft: 20}} />
            </OptionsLadoDireito>
          </ProfileInfo>
          <ListOption>
            <Options style={{width: '90%', alignSelf: 'center'}}>
              <Ionicons name="gift-outline" size={24} color="#ea1d2c" style={{alignSelf: 'center', marginLeft: 30, paddingRight: 20}}/>

              <OptionsText>
                <Text style={{fontSize: 14, fontWeight: `bold`, color: `black`}}>Ganhe R$ 10 indicando o iFood</Text>
                <Text style={{color: `#999`}}>Convide seus amigos</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#c7c4c4"
                  size={20}
                />
              </OptionsLadoDireito>

            </Options>

            <Options>
              <MaterialCommunityIcons name="message-processing-outline" size={24} color="black" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}} />

              <OptionsText>
                <Text style={{fontSize: 18}}>Chats</Text>
                <Text style={{color: `#999`}}>Minhas conversas</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>
            </Options>

            <Options>
              <MaterialCommunityIcons name="bell-outline" size={24} color="black" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}}/>

              <OptionsText>
                <Text style={{fontSize: 18}}>Notificações</Text>
                <Text style={{color: `#999`}}>Minha central de notificações</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>
            </Options>

            <Options>
              <MaterialIcons name="payment" size={24} color="black" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}}/>
              
              <OptionsText>
                <Text style={{fontSize: 18}}>Pagamentos</Text>
                <Text style={{color: `#999`}}>Meus saldos e cartões</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <Text style={{fontSize: 12, backgroundColor: '#ea1d2c', color: 'white', borderRadius: 50, padding: 6, fontWeight: 'bold', textAlign: 'center'}}>NOVO!</Text>

                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>

              
            </Options>

            <Options>
              <Foundation name="ticket" size={24} color="black" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}}/>
              
              <OptionsText>
                <Text style={{fontSize: 18}}>Clube iFood</Text>
                <Text style={{color: `#999`}}>Meus pacotes de desconto</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <Text style={{fontSize: 12, backgroundColor: '#ea1d2c', color: 'white', borderRadius: 50, padding: 6, fontWeight: 'bold', textAlign: 'center'}}>NOVO!</Text>

                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>

              
            </Options>

            <Options>
              <MaterialCommunityIcons name="ticket-percent-outline" size={24} color="black" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}}/>
              
              <OptionsText>
                <Text style={{fontSize: 18}}>Cupons</Text>
                <Text style={{color: `#999`}}>Meus cupons de desconto</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>

              
            </Options>

            <Options>
              <MaterialCommunityIcons name="star-box-outline" size={24} color="black" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}}/>
              
              <OptionsText>
                <Text style={{fontSize: 18}}>Fidelidade</Text>
                <Text style={{color: `#999`}}>Minhas fidelidades</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>

              
            </Options>

            <Options>
              <MaterialIcons name="favorite-outline" size={24} color="black" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}}/>
              
              <OptionsText>
                <Text style={{fontSize: 18}}>Favoritos</Text>
                <Text style={{color: `#999`}}>Meus locais favoritos</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <Text style={{fontSize: 12, backgroundColor: '#ea1d2c', color: 'white', borderRadius: 50, padding: 6, fontWeight: 'bold', textAlign: 'center'}}>NOVO!</Text>

                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>

              
            </Options>

            <Options>
              <MaterialCommunityIcons name="heart-box-outline" size={24} color="black" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}}/>
              
              <OptionsText>
                <Text style={{fontSize: 18}}>Feed</Text>
                <Text style={{color: `#999`}}>Acompanhe seus locais favoritos</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <Text style={{fontSize: 12, backgroundColor: '#ea1d2c', color: 'white', borderRadius: 50, padding: 6, fontWeight: 'bold', textAlign: 'center'}}>NOVO!</Text>

                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>

              
            </Options>

            <Options>
              <MaterialCommunityIcons name="ticket-percent-outline" size={24} color="black" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}}/>
              
              <OptionsText>
                <Text style={{fontSize: 18}}>Cupons</Text>
                <Text style={{color: `#999`}}>Meus cupons de desconto</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>

              
            </Options>

            <Options>
              <MaterialCommunityIcons name="star-box-outline" size={24} color="black" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}}/>
              
              <OptionsText>
                <Text style={{fontSize: 18}}>Fidelidade</Text>
                <Text style={{color: `#999`}}>Minhas fidelidades</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>

              
            </Options>

            <Options>
              <EvilIcons name="location" size={24} color="black" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}}/>
              
              <OptionsText>
                <Text style={{fontSize: 18}}>Endereços</Text>
                <Text style={{color: `#999`}}>Meus endereços de entrega</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>

              
            </Options>

            <Options>
              <MaterialCommunityIcons name="hand-heart" size={24} color="black" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}}/>
              
              <OptionsText>
                <Text style={{fontSize: 18}}>Doações</Text>
                <Text style={{color: `#999`}}>Minhas doações</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>

              
            </Options>

            <Options>
              <MaterialCommunityIcons name="text-box-outline" size={24} color="black" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}}/>
              
              <OptionsText>
                <Text style={{fontSize: 18}}>Meus dados</Text>
                <Text style={{color: `#999`}}>Minhas informações da conta</Text>
              </OptionsText>

              <OptionsLadoDireito>
                <Text style={{fontSize: 12, backgroundColor: '#ea1d2c', color: 'white', borderRadius: 50, padding: 5, fontWeight: 'bold', textAlign: 'center'}}>1</Text>

                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>

              
            </Options>
          </ListOption>

          <ListOption style={{marginTop: 50}}>
            <Options style={{paddingTop: 20, paddingBottom: 20}}>
              <Ionicons name="md-help-circle-outline" size={24} color="#52544e" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}} />

              <Text style={{fontSize: 18, color: `#52544e`}}>Ajuda</Text>


              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>
            </Options>

            <Options style={{paddingTop: 20, paddingBottom: 20}}>
              <EvilIcons name="gear" size={24} color="#52544e" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}} />

              <Text style={{fontSize: 18, color: `#52544e`}}>Configurações</Text>


              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>
            </Options>

            <Options style={{paddingTop: 20, paddingBottom: 20}}>
              <MaterialCommunityIcons name="shield-outline" size={24} color="#52544e" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}} />

              <Text style={{fontSize: 18, color: `#52544e`}}>Segurança</Text>


              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>
            </Options>

            <Options style={{paddingTop: 20, paddingBottom: 20}}>
              <MaterialCommunityIcons name="qrcode-scan" size={24} color="#52544e" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}} />

              <Text style={{fontSize: 18, color: `#52544e`}}>Usar no carro</Text>


              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>
            </Options>

            <Options style={{paddingTop: 20, paddingBottom: 20}}>
              <MaterialIcons name="add-business" size={24} color="#52544e" style={{alignSelf: 'center', marginLeft: 10, paddingRight: 20}} />

              <Text style={{fontSize: 18, color: `#52544e`}}>Sugerir restaurantes</Text>


              <OptionsLadoDireito>
                <MaterialIcons 
                  name="keyboard-arrow-right"
                  color="#999999"
                  size={20}
                />
              </OptionsLadoDireito>
            </Options>
          </ListOption>
        </View>
      </ViewPerfil>
  );
}