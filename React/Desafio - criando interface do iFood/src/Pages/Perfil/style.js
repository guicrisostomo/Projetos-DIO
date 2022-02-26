import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin: 0 10px;
`;

export const Image = styled.Image`

    margin: 5px 50px 0 0;
    

`

export const ViewPerfil = styled.ScrollView`
        flex: 1;
`

export const View = styled.View`
        align-items: center;
        padding-top: 40px;
`;

export const ButtonContainer = styled.View`
        flex-direction:row;
        justify-content: space-between;
        align-items:center;
        width:100%;
        padding: 0 20px 20px 20px;
`

export const ProfileInfo = styled.View`
        flex: 1;
        flex-direction: row;
        padding: 10px 0px;
        align-items: center;
        justify-content: space-around;
        display: flex;
        background-color: #f0f0f0;
        width: 100%;
        padding: 10px;
`

export const ProfileText = styled.View`

`;

export const OptionsText = styled.View`
        display: flex;
        flexDirection: column;
`;

export const OptionsLadoDireito = styled.View`
        flexDirection: row;
        alignItems: center!important;
        display: flex;
        justify-content: flex-end!important;
        marginLeft: auto;
        marginRight: 10px;
`;

export const Options = styled.TouchableOpacity`
        display: flex;
        flex-direction: row;
        margin: 2px 0px;
        padding: 10px 0px;
        borderBottomWidth: 1px;
        borderBottomColor: #dcdcdc;
        background-color: #f2f2f2;
        justify-content: flex-start;
`;

export const ListOption = styled.View`
        background-color: #f0f0f0;
        display: flex;
        flex-direction: column;
        width: 100%;
`;