import axios from "../axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const initialFormData = {
    ten: "",
    email: "",
    password: "",
};

const Register = () => {
    const [formData, setFormData] = useState(initialFormData);

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegisterSubmit = async (event) => {
        await axios.post('/signup', formData, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            withCredentials: true
        })
            .then(
                res => {
                    console.log(res)
                }
            )
            .catch(
                err => console.log(err)
            )
    };
    useEffect(() => {
        console.log(formData)
    }, [formData]);
    return (
        <>
            <div className="w-full h-screen bg-[#fce3fe] pt-[100px]">
                <div className="w-[580px] h-[600px] bg-white m-auto py-10 px-[60px]">
                    <h1 className="my-5 font-semibold text-2xl">Đăng ký</h1>
                    <div className="flex flex-col gap-[29px] mt-8">
                        <input type="text" name="ten" onChange={handleChangeInput} placeholder="Tên của bạn" className="h-[72px] w-full pl-5 border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]" />
                        <input type="email" name="email" onChange={handleChangeInput} placeholder="Email của bạn" className="h-[72px] w-full pl-5 border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]" />
                        <input type="password" name="password" onChange={handleChangeInput} placeholder="Mật khẩu của bạn" className="h-[72px] w-full pl-5 border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]" />
                    </div>
                    <button className="w-full h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-lg cursor-pointer" onClick={handleRegisterSubmit}>Đăng ký</button>
                    <p className="mt-5 font-medium">Bạn đã có tài khoản? <span className="text-[#ff4141]"><Link to="/login">Đăng nhập</Link></span></p>
                    <div className="flex items-center mt-[25px] gap-5">
                        <input type="checkbox" name="" id="" />
                        <p>By continuing, i agree to the term of use & privacy policy.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;