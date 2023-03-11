import react from 'react';
import * as S from '../../styles'

export const SignIn = () => {
    return(
        <S.ContainerPrincipal>

        <S.ContainerEsquerda>
            <S.imgBackEsquerda src={require('../../Images/logo.jpg')}/>
        </S.ContainerEsquerda>

        <S.ContainerDireita>

            <S.ContainerLogin>

                <S.title>Login</S.title>

                <S.labelPrincipal>
                Username:
                </S.labelPrincipal>
                <S.usuarioInput placeholder="Email" />

                <S.labelPrincipal>
                Password:
                </S.labelPrincipal>

                <S.SenhaInput placeholder="Senha" type={"password"} />

                <S.labelSecundario>
                <S.checkBox/>Lembrar login
                <S.labelEsqueceuSenha>
                    Esqueceu a senha?
                </S.labelEsqueceuSenha>
                </S.labelSecundario>

                <S.botao>
                Entrar
                </S.botao>

                <S.labelSecundario>

                Não tem uma conta?
                <S.labelCadastreSe>
                    Cadastre-se
                </S.labelCadastreSe>

                </S.labelSecundario>

            </S.ContainerLogin>

        </S.ContainerDireita>

    </S.ContainerPrincipal>
    )
}