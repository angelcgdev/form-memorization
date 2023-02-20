import React, { FormEvent, useContext } from 'react'
import { useForm } from '../hooks/useForm';
import { formContext } from '../App';

export const Form = () => {

  const { form, handleChange } = useContext(formContext);

  const handleSubmit = (e: FormEvent)=>{
    e.preventDefault();
  }

  return (
    <section className='p-8 bg-white rounded-lg'>
      <form onSubmit={handleSubmit} className='flex flex-col flex-wrap gap-4'> 
        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold' >
          Name:
          <input
            className='appearance-none block w-full bg-gray-100 text-gray-700 border border-slate-400 focus:border-slate-800 rounded py-3 px-4 leading-tight focus:outline-none bg-white'
            placeholder='Jhon'
            type="text"
            name="name"
            value={form['name']}
            onChange={handleChange}
          />
        </label>
        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold' >
          Address:
          <input
            className='appearance-none block w-full bg-gray-100 text-gray-700 border border-slate-400 focus:border-slate-800 rounded py-3 px-4 leading-tight focus:outline-none bg-white'
            placeholder='av. los sauces'
            type="text"
            name="address"
            value={form['address']}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className="shadow bg-slate-800 hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  )
}
