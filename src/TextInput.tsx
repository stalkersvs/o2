import { useEffect, useState } from 'react'

import styles from './TextInput.module.scss'

type TextInputProps = {
    label?: string
    value: string
    name: string
    updateValue: (val: string) => void
    required?: boolean
    placeholder?: string
    disabled?: boolean
    isValid?: boolean
    errorMessage?: string
    icon?: React.ReactNode
}

export const TextInput = ({
    value,
    label,
    updateValue,
    name,
    required,
    placeholder,
    disabled,
    isValid,
    errorMessage,
    icon,
}: TextInputProps) => {
    const [inputValue, setInputValue] = useState(value)

    useEffect(() => {
        updateValue(inputValue)
    }, [updateValue, inputValue])

    const id = `text-input-${name}`

    return (
        <div
            className={
                'flex flex-col items-start gap-2 min-w-full sm:min-w-[400px]'
            }
        >
            {label && (
                <label
                    className={styles.inputLabel}
                    htmlFor={id}
                    aria-label={`text-input-${name}`}
                >
                    {label}
                    {!required && (
                        <span className={'ml-2 text-gray-300'}>Optional</span>
                    )}
                </label>
            )}
            <div className={'relative w-full'}>
                <input
                    className={styles.inputField}
                    required={required}
                    disabled={disabled}
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    onInput={(e) => setInputValue(e.currentTarget.value)}
                    type="text"
                />
                {icon && (
                    <div
                        className={
                            'absolute right-0 top-1/2 -translate-y-1/2 px-2 pointer-events-none bg-white'
                        }
                    >
                        {icon}
                    </div>
                )}
            </div>
            {isValid && errorMessage && (
                <p className={styles.inputError}>{errorMessage}</p>
            )}
        </div>
    )
}
