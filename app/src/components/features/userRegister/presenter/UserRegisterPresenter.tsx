import React, { useState } from 'react';
import { Article } from '../../../../common/type';
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles.css";
import { useAuth } from "../../../../lib/auth";
import { URLPath } from '../../../../common/constants';
import { useNavigate }  from 'react-router-dom';


interface IFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UserRegistertPresenterProps {
  articles?: Article[];
}


//  exportするコンポーネント
const UserRegisterPresenter: React.FC<UserRegistertPresenterProps> = () => {
  const navigate = useNavigate();

  const registerFn = useAuth().register;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    registerFn({username: watch("username"), email: watch("email"), password: watch("password")});
    navigate(URLPath.HOME);
  }; // your form submit function which will invoke after successful validation

  // console.log(watch("username")); 
  // you can watch individual input by pass the name of the input

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>ユーザー名</label>
        <input {...register("username", { required: true })} />
        {errors?.username?.type === "required" && <p>必須項目です</p>}

        <label>メールアドレス</label>
        <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors?.email?.type === "required" && <p>必須項目です</p>}
        {errors?.email?.type === "pattern" && <p>不正な形式です</p>}

        <label>パスワード</label>
        <input {...register("password", { required: true, minLength: 8, pattern: /[A-Z]/ })} />
        {errors?.password?.type === "required" && <p>必須項目です</p>}
        {errors?.password?.type === "minLength" && (<p>8文字以上入力してください</p>)}
        {errors?.password?.type === "pattern" && (
          <p>少なくとも1つの英大文字が含まれれている必要があります</p>
        )}

        <label>パスワード（確認）</label>
        <input {...register("confirmPassword", { required: true })} />
        {errors?.confirmPassword?.type === "required" && <p>必須項目です</p>}

        <input type="submit" />
      </form>

    </>
  );
};

export default UserRegisterPresenter;
