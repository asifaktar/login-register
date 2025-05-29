


import { Form } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';






const Register = () => {


    const [errorMassage, setErrorMassage] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [sowPassword, setSowPassword] = useState(false);



    const handelFromSubmit = (e) => {
        e.preventDefault()

        //const [errorMassage, setErrorMassage] = useState('');
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        if(!terms){
            setErrorMassage("Please accept terms and condition!");
            return;
        }

        if (password.length < 6) {
            setErrorMassage("Password minimum 6 characters or long!");
            return;
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
        if (!regex.test(password)) {
            setErrorMassage("Password at least one uppercase oen lowercase one number and one special character!");
            return;
        }
        setErrorMassage("");
        setLoginSuccess(false);

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setLoginSuccess(true);
            })
            .catch((error) => {
                // console.log(error.Message)
                setErrorMassage("This email already exists!")
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" bg-base-100 w-11/7 shrink-0 shadow-2xl">
                        <div className="rounded-3xl">
                            <form className='p-4' onSubmit={handelFromSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name="password" type={sowPassword ? "text" : "password"} className="input" placeholder="Password" />
                                    <div className='relative'>
                                        <div
                                            onClick={() => setSowPassword(!sowPassword)}
                                            className='absolute p-1 bg-gray-600 rounded-3xl text-lg right-2 cursor-pointer mask-b-from-10% -mt-10'>
                                            {
                                                sowPassword ? <FaEye></FaEye>
                                                    : <FaEyeSlash></FaEyeSlash>
                                            }
                                        </div>
                                    </div>
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <div className='flex gap-2'>
                                        <input type="checkbox" name="terms"  className="checkbox checkbox-xs" />
                                        <p>Accept <a className='link link-hover' href="https://chatgpt.com/c/68368b22-1508-8009-ac06-f87ffb9e012c">
                                        terms and condition</a>!</p>
                                    </div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                            <div className='w-6/12 text-xs'>
                                {
                                    errorMassage && <p className='text-red-600'>{errorMassage}</p>
                                }
                                {
                                    loginSuccess && <p className='text-green-500'>Register success full!</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;