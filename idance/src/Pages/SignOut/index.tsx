import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';
import { Input } from '../../components';

type SignOutData = {
    username: string,
    password: string,
    rememberme: boolean
};

const schema = yup.object().shape({
    username: yup.string().required('O usuário é obrigatório!'),
    password: yup.string().required('A senha é obrigatória!')
});

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignOutData>({
        resolver: yupResolver(schema)
    });

    const handleSignIn = (data: SignOutData) => {
        setTimeout(() => {
            console.log(data);
        }, 0);
        console.log(data);
    }

    return(
        <S.ContainerPrincipal>

        <S.ContainerEsquerda>
            <S.title>Cadastro</S.title>

            <S.ContainerLogin>

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
                <S.labelCadastreSe>
                    Cadastre-se
                </S.labelCadastreSe>

                </S.labelSecundario>

            </S.ContainerLogin>

        </S.ContainerEsquerda>

        <S.ContainerDireita onSubmit={handleSubmit(handleSignIn)}>


        </S.ContainerDireita>

    </S.ContainerPrincipal>
    )
}