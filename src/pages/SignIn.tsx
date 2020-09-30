import React from 'react';
import { useRecoilState } from 'recoil'

import { userStateAtom } from 'Atoms/globalAtoms.ts'
import { isEmpty } from 'Utils/utils.ts'

import Input from 'Components/modal/Input.tsx'
import useInput from 'Reducers/useInput.ts'
import AdminApi from 'Api/AdminApi'
import UserApi from 'Api/UserApi'
import { Redirect } from 'react-router-dom';

export default function SignIn({ setIsLogin, adminLogin }) {

    const [userState, setUserState] = useRecoilState(userStateAtom);

    const [{ username, password }, onChangeInput] = useInput({
        username: '', password: ''
    });

    const login = async (username, password) => {
        const data = {
            username: username,
            password: password
        };
        let response = null;

        try {
            if (adminLogin) response = await AdminApi.signIn(data).then(resp => resp.data);
            else response = await UserApi.signIn(data).then(resp => resp.data);
            localStorage.setItem('userToken', response.token);
            setIsLogin(true);
        }
        catch (err) {
            throw err;
        }
        return;
    };

    const onSignIn = async (ev) => {
        ev.preventDefault();
        if (isEmpty(username) || isEmpty(password)) return;
        else return login(username, password);
    };

    return (
        <form className='form-wrapper'>
            <fieldset className='sign-in-fieldset'>
                <legend className='legend-title'>
                    <h1>{adminLogin ? 'Admin' : 'Dilettante'}</h1>
                </legend>
                <Input id='username' name='username' className='common__input' onChange={onChangeInput} type='text' placeHolder='Username' />
                <Input id='password' name='password' className='common__input' onChange={onChangeInput} type='password' placeHolder='Password' />
                <div className='btn-field'>
                    <button className='btn-primary' type='button' onClick={onSignIn}>Sign in</button>
                </div>
            </fieldset>
        </form>
    );
}