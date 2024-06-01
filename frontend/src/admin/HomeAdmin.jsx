import React, { useEffect, useState } from 'react'
import axios from '../axios';

const initialFormData = {
    name: "",
    price: "",
    description: "",
    category: "",
}

const HomeAdmin = () => {

    const [formData, setFormData] = useState(initialFormData);
    const [images, setImages] = useState([]);

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }
        for (let i = 0; i < images.length; i++) {
            form.append('images', images[i]);
        }

        try {
            const response = await axios.post('/create-product', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            // setFormData(initialFormData);
            // setImages([]);
        } catch (error) {
            console.error('Error uploading images', error);
        }
    };

    useEffect(() => {
        console.log(images)
        console.log(formData)
    }, [images, formData])

    return (
        <div class="w-full max-w-lg m-auto">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
                        Tên sản phẩm
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Gấu bông Cabybara" name="name" value={formData.name} onChange={handleChangeInput} required />
                    {formData.name === "" ? <p class="text-red-500 text-xs italic">Điền tên sản phẩm.</p> : ""}
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-price">
                        Giá sản phẩm
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-price" type="text" placeholder="200000" name="price" value={formData.price} onChange={handleChangeInput} required />
                    {formData.price === "" ? <p class="text-red-500 text-xs italic">Điền giá sản phẩm.</p> : ""}
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-description">
                        Mô tả sản phẩm
                    </label>
                    <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-description" placeholder="" rows="10" name="description" value={formData.description} onChange={handleChangeInput} required />
                    {formData.description === "" ? <p class="text-red-500 text-xs italic">Điền mô tả sản phẩm.</p> : ""}
                    <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-category">
                        Danh mục sản phẩm
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-category" name="category" value={formData.category} onChange={handleChangeInput} required>
                            <option selected>Chọn danh mục</option>
                            <option value="1">Gấu bông</option>
                            <option value="2">Móc khóa</option>
                            <option value="3">Dịch vụ</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    {formData.category === "" ? <p class="text-red-500 text-xs italic">Chọn danh mục sản phẩm.</p> : ""}
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-images">
                        Hình ảnh sản phẩm
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-images" placeholder="" type="file" multiple onChange={handleImageChange} required />
                    {images.length === 0 ? <p class="text-red-500 text-xs italic">Chọn file hình ảnh.</p> : ""}
                </div>
            </div>
            <div class="flex items-center justify-center">
                <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
                    Create Product
                </button>
            </div>
        </div>
    )
}

export default HomeAdmin
