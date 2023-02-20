import { ChangeEvent, createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Form } from './components/Form'
import { Foo } from './components/Foo'
import { useForm } from './hooks/useForm'
import { FormModel } from './models/form.model'
import { SecondFoo } from './components/SecondFoo'

const initValues:{ form: FormModel, handleChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>)=>void} = {
  form: {},
  handleChange: (e)=>{}
}
export const formContext = createContext(initValues);

function App() {

  const { form, handleChange } = useForm();
  console.log({form})
  return (
    <formContext.Provider value={{form, handleChange}}>
        <div className="w-full h-full flex flex-col justify-center items-center bg-slate-400 gap-3">
          <Form/>
          <Foo name={form['name']??''}/>
          <SecondFoo address={form['address']??''}/>
        </div>
    </formContext.Provider>
  )
}

export default App
