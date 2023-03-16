import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';
import { Input } from '../../components/SignIn';
import { useNavigate } from "react-router-dom";

type SignInData = {
    username: string,
    password: string,
    rememberme: boolean
};

const schema = yup.object().shape({
    username: yup.string().required('O usuário é obrigatório!'),
    password: yup.string().required('A senha é obrigatória!')
});

export const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignInData>({
        resolver: yupResolver(schema)
    });

    const handleSignIn = (data: SignInData) => {
        setTimeout(() => {
            console.log(data);
        }, 0);
        console.log(data);
    }

    const navigate = useNavigate ();

    return(
        <S.ContainerPrincipal>

        <S.ContainerEsquerda>
            <S.imgBackEsquerda src={require('../../Images/logo.jpg')}/>
        </S.ContainerEsquerda>

        <S.ContainerDireita onSubmit={handleSubmit(handleSignIn)}>

            <S.ContainerLogin>

                <S.title>Login</S.title>

                <Input
                    label='Usuário'
                    placeholder='Informe seu usuário'
                    error={errors.username}
                    {...register('username')}
                />

                <Input
                    label='Senha'
                    placeholder='Informe sua senha'
                    error={errors.password}
                    type={"password"}
                    {...register('password')}
                />

                <S.labelSecundario>
                    <S.checkBox 
                        {...register('rememberme')}
                    />Lembrar login
                    <S.labelEsqueceuSenha>
                        Esqueceu a senha?
                    </S.labelEsqueceuSenha>
                </S.labelSecundario>

                <S.botao type='submit'>
                    Entrar
                </S.botao>

                <S.labelSecundario>

                Não tem uma conta?
                <S.labelCadastreSe onClick={() =>navigate("/Register")}>
                    Cadastre-se
                </S.labelCadastreSe>

                </S.labelSecundario>

            </S.ContainerLogin>

        </S.ContainerDireita>

    </S.ContainerPrincipal>
    )
}