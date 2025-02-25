import './App.css'
import { TextInput } from './TextInput.tsx'
import { useState } from 'react'

function App() {
    const [textValue, setTextValue] = useState('')

    return (
        <main className={'text-left inline-block'}>
            <TextInput
                value={textValue}
                label={'Input'}
                placeholder={'Placeholder'}
                updateValue={setTextValue}
                name={'textValue'}
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
