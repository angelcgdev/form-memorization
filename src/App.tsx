import { ChangeEvent, createContext, useCallback } from 'react'
import './App.css'
import { Form } from './components/Form'
import { FooMemorized } from './components/Foo'
import { useForm } from './hooks/useForm'
import { FormModel } from './models/form.model'
import { SecondFooMemorized } from './components/SecondFoo'

const initValues:{ form: FormModel, handleChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>)=>void} = {
  form: {},
  handleChange: (e)=>{}
}
export const formContext = createContext(initValues);

function App() {

  const { form, handleChange } = useForm();

  const name = form['name']??'';

  const handleReset = (value: string)=> {
    console.log(value);
  }

  const handleResetMemorized = useCallback(()=>handleReset(name), [name]);

  return (
    <formContext.Provider value={{form, handleChange}}>
        <div className="w-full h-full flex flex-col justify-center items-center bg-slate-400 gap-3">
          <Form/>
          <FooMemorized name={name}  reset={handleResetMemorized}/>
          <SecondFooMemorized address={form['address']??''}/>
        </div>
    </formContext.Provider>
  )
}

export default App
