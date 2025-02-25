import './App.css'
import { InputFieldState, TextInput } from './TextInput.tsx'
import { useState } from 'react'

function App() {
    const [textValue, setTextValue] = useState('')

    return (
        <main className={'text-left inline-block'}>
            <TextInput
                state={InputFieldState.ERROR}
                value={textValue}
                label={'Input'}
                placeholder={'Placeholder'}
                updateValue={setTextValue}
                name={'textValue'}
                caption={'123123123'}
                icon={<div>123</div>}
            ></TextInput>
            <br />
            <hr />
            <br />
            Result: <b>{textValue}</b>
        </main>
    )
}

export default App
