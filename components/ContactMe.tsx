import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string;
    email: string;
    sujet: string;
    message: string;
};

type Props = {}

function ContactMe({ }: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:ferrchristopher@gmail.com?subject=${formData.sujet}&body=Bonjour je suis ${formData.name}. {formData.message} (${formData.email})`
    };

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>

            <div className='flex-col flex space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    Mon profil vous interesse ? {" "}
                    <span className='decoration-[#fff222]/50 underline'>Parlons-en !</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5  justify-center'>
                        <PhoneIcon className='text-[#fff222] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>06 48 27 06 47</p>
                    </div>
                    <div className='flex items-center space-x-5  justify-center'>
                        <EnvelopeIcon className='text-[#fff222] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>ferrchristopher@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5  justify-center'>
                        <MapPinIcon className='text-[#fff222] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>Annecy, Haute-Savoie</p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col space-y-2 w-fit mx-auto'>
                        <div className='flex space-x-2'>
                            <input {...register('name', { required: true })} placeholder="Nom" className='contactInput' type="text" />
                            <input {...register('email', { required: true })} placeholder="Email" className='contactInput' type="email" />
                        </div>

                        <input {...register('sujet')} placeholder="Sujet" className='contactInput' type="text" />

                        <textarea {...register('message')} placeholder="Votre message" className='contactInput' />
                        <button type="submit" className='bg-[#fff222] py-5 px-10 rounded-md text-black font-bold text-lg'>
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ContactMe