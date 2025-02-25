import { useEffect, useState } from 'react'

import styles from './TextInput.module.scss'
import classNames from 'classnames'

export enum InputFieldState {
    'DEFAULT' = 'DEFAULT',
    'WARNING' = 'WARNING',
    'ERROR' = 'ERROR',
}

type TextInputProps = {
    label?: string
    value: string
    name: string
    updateValue: (val: string) => void
    required?: boolean
    placeholder?: string
    disabled?: boolean
    caption?: string
    state?: InputFieldState
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
    state = InputFieldState.DEFAULT,
    caption,
    icon,
}: TextInputProps) => {
    const [inputValue, setInputValue] = useState(value)

    useEffect(() => {
        updateValue(inputValue)
    }, [updateValue, inputValue])

    const id = `text-input-${name}`

    return (
        <div className={'flex flex-col items-start gap-2'}>
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
            <div className={'relative'}>
                <input
                    className={classNames(
                        `${styles.inputField}`,
                        `${styles[`inputField${state}`]}`
                    )}
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
            {caption && (
                <p
                    className={classNames(
                        styles.inputCaption,
                        styles[`inputCaption${state}`]
                    )}
                >
                    {caption}
                </p>
            )}
        </div>
    )
}
