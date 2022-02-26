import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

export const View = styled.View`
        backgroundColor: white;
        width: 100%;
        height: 100%;
        paddingTop: 20px;
`

export const ViewPesquisa = styled.View`
        backgroundColor: white;
        marginBottom: 10px;
        display: flex;
        flex-direction: row;
        borderRadius: 4px;
`

export const ViewCategoria = styled.View`
        backgroundColor: white;
        padding: 10px;
        margin: 5px;
`
export const ColunaCategoria = styled.View`
        width: 100%;
        display: flex;
        flexDirection: row;
        margin: 5px;
`

export const ItemCategoria = styled.View`
        width: ${(Dimensions.get('window').width)/2 - 30}px;
`;