import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import Default from "../../layer/default";

import { mapCommonStates } from "../../utils/store";
import PAGES from "../../utils/pages";

import Input from "../../components/input/Input";
import Button from "../../components/Button";

import { ErrorMessage, Form, FormTitle } from "./Login.styles";

const Login = (props) => {
    const { login, userState } = props;
    const { toggleLoading } = userState;
    const [ commonErrors, setCommonErrors ] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = data => {
       login(data).then(response => {
           !response.status && setCommonErrors(response.message);
           response.status && history.push(PAGES.PROFILE);
       });
    }

    return (
        <Default title={"Страница авторизации"}>
            <Form onSubmit={handleSubmit(onSubmit)}>
               <FormTitle>ВХОД</FormTitle>
                <Input
                    type="text"
                    name="login"
                    placeholder="Логин"
                    errors={errors?.login?.type === 'required'
                        ? 'Поле логин не заполнено'
                        : errors?.login?.message}
                    {...register("login", { required: true })}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="пароль"
                    errors={errors?.password?.type === 'required'
                        ? 'Поле пароль не заполнено'
                        : errors?.password?.message
                    }
                    {...register("password", { required: true })} />
                {commonErrors && <ErrorMessage>{commonErrors}</ErrorMessage>}
                <Button
                    disables={!toggleLoading}
                    onClick={handleSubmit(onSubmit)}
                    type="submit"
                    label="Войти"
                />
            </Form>
        </Default>
    );
};

export default mapCommonStates(Login);