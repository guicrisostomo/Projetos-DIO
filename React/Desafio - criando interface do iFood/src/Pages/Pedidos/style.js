import styled, { css } from 'styled-components/native';
import Imagem from '../../assets/img/semItens.png'

export const View = styled.View`
        align-items: center;
        padding-top: 40px;
`
export const ImagemSemPedidos = styled.Image.attrs({
        source: Imagem
})`
        
`;

export const ViewImagem = styled.View`
        backgroundColor: white;
        width: 100%;
        height: 100%;
        marginTop: 30px;
        alignItems: center;
        justifyContent: center;
`;