import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
            <form action="https://getform.io/f/2d845e30-3f34-4963-815f-6af2e1e4a326" method='POST' encType='multipart/form-data'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex flex-col'>
                        <label htmlFor='name' className='block font-bold'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='border-2 rounded-lg p-3 border-gray-300'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='phone' className='block font-bold'>Phone Number</label>
                        <input
                            type='text'
                            id='phone'
                            name='phone'
                            className='border-2 rounded-lg p-3 border-gray-300'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='email' className='block font-bold'>Email</label>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            className='border-2 rounded-lg p-3 border-gray-300'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='subject' className='block font-bold'>Subject</label>
                        <input
                            type='text'
                            id='subject'
                            name='subject'
                            className='border-2 rounded-lg p-3 border-gray-300'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='message' className='block font-bold'>Message</label>
                        <textarea
                            rows='5'
                            cols='30'
                            id='message'
                            name='message'
                            className='border-2 rounded-lg p-3 border-gray-300'
                        ></textarea>
                    </div>
                </div>
                <div className='mt-4'>
                    <button
                        type='submit'
                        className='bg-blue-500 text-white font-bold py-2 px-4 rounded w-full'
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
