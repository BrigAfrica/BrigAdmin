/* eslint-disable no-unused-vars */
import React from 'react'
import InputField from  './../../../components/forms/InputField'
import Selectdropdown from '../../forms/Selectdropdown'


const productCategory = ["Product Category", "Laptops", "Phones", "Tabs"]
const brand = ["Brand","Apple","Samsung"]
const stockQuantity = ["Stock Quantitiy","Apple","Samsung"]
const tags = ["Tags","Apple","Samsung"]
const ProductForm = () => {
  return (

    <div className='w-7/12 xs:max-lg:w-full flex flex-col gap-y-6'>


    <div  className='flex justify-between  gap-6 '>
        <div id="left" className='w-6/12 flex flex-col gap-y-6'>
            <div>
                <InputField 
                    inputType={"text"}
                    inputName={"productId"}
                    height = {"h-16"}
                    value={""}
                    required={true}
                    placeholder={"Product Id"}
                    bgColor={"bg-[#FAFAFA]"}
                    border = {"border border-[#DBDADE]"}
                />
            </div>

            <div>

                <InputField 
                    inputType={"text"}
                    inputName={"productId"}
                    height = {"h-16"}
                    value={""}
                    required={true}
                    placeholder={"Product Id"}
                    bgColor={"bg-[#FAFAFA]"}
                    border = {"border border-[#DBDADE]"}
                    />
            </div>

            <Selectdropdown 
                options = {productCategory}
                height = {"h-16"}
                width = {"w-full"}
                bgColor={"bg-[#FAFAFA]"}
                border = {"border border-[#DBDADE]"}
            />
            <Selectdropdown 
                options = {brand}
                height = {"h-16"}
                width = {"w-full"}
                bgColor={"bg-[#FAFAFA]"}
                border = {"border border-[#DBDADE]"}
                />
                            
        </div>

        <div id="right" className='w-6/12 flex flex-col gap-y-6' >
            <div>
                    <InputField 
                        inputType={"text"}
                        inputName={"productId"}
                        height = {"h-16"}
                        value={""}
                        required={true}
                        placeholder={"Selling Price"}
                        bgColor={"bg-[#FAFAFA]"}
                        border = {"border border-[#DBDADE]"}
                        />
                </div>

                <div>

                    <InputField 
                        inputType={"text"}
                        inputName={"productId"}
                        height = {"h-16"}
                        value={""}
                        required={true}
                        placeholder={"Cost Price"}
                        bgColor={"bg-[#FAFAFA]"}
                        border = {"border border-[#DBDADE]"}
                        />
                </div>

                <Selectdropdown 
                    options = {productCategory}
                    height = {"h-16"}
                    width = {"w-full"}
                    bgColor={"bg-[#FAFAFA]"}
                    border = {"border border-[#DBDADE]"}
                    />
                <Selectdropdown 
                    options = {brand}
                    height = {"h-16"}
                    width = {"w-full"}
                    bgColor={"bg-[#FAFAFA]"}
                    border = {"border border-[#DBDADE]"}
                    />
                    
            </div>

    </div>

    <div>

<InputField 
    inputType={"text"}
    inputName={"productId"}
    height = {"h-16"}
    value={""}
    required={true}
    placeholder={"Product Info"}
    bgColor={"bg-[#FAFAFA]"}
    border = {"border border-[#DBDADE]"}
    />
</div>


<div>

<InputField 
    className = "placeholder:text-green-600"
    inputType={"text"}
    inputName={"productId"}
    height = {"h-36"}
    value={""}
    required={true}
    placeholder={"Product Info Context"}
    bgColor={"bg-[#FAFAFA]"}
    border = {"border border-[#DBDADE]"}
    />
</div>
 
</div>
  )
}

export default ProductForm