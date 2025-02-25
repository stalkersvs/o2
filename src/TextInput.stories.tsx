import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { TextInput, InputFieldState } from './TextInput'

export default {
    title: 'Components/TextInput',
    component: TextInput,
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' },
        name: { control: 'text' },
        updateValue: { action: 'updateValue' },
        required: { control: 'boolean' },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
        caption: { control: 'text' },
        state: {
            control: {
                type: 'select',
                options: Object.values(InputFieldState),
            },
        },
        icon: { control: 'object' },
    },
} as Meta<typeof TextInput>

const Template: StoryFn<typeof TextInput> = (args) => {
    // Add state management for the input value
    const [value, setValue] = useState(args.value || '')

    return (
        <TextInput
            {...args}
            value={value}
            updateValue={(newValue) => setValue(newValue)}
        />
    )
}

export const Default = Template.bind({})
Default.args = {
    label: 'Username',
    value: '',
    name: 'username',
    placeholder: 'Enter your username',
    state: InputFieldState.DEFAULT,
}

export const WithCaption = Template.bind({})
WithCaption.args = {
    label: 'Email',
    value: '',
    name: 'email',
    placeholder: 'Enter your email',
    caption: 'Please enter a valid email address.',
    state: InputFieldState.DEFAULT,
}

export const WithWarning = Template.bind({})
WithWarning.args = {
    label: 'Password',
    value: 'weakpassword',
    name: 'password',
    placeholder: 'Enter your password',
    caption: 'Your password is too weak.',
    state: InputFieldState.WARNING,
}

export const WithError = Template.bind({})
WithError.args = {
    label: 'Confirm Password',
    value: 'mismatch',
    name: 'confirmPassword',
    placeholder: 'Confirm your password',
    caption: 'Passwords do not match.',
    state: InputFieldState.ERROR,
}

export const Disabled = Template.bind({})
Disabled.args = {
    label: 'Disabled Input',
    value: 'Cannot edit this',
    name: 'disabledInput',
    disabled: true,
    state: InputFieldState.DEFAULT,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
    label: 'Search',
    value: '',
    name: 'search',
    placeholder: 'Search...',
    icon: <span>🔍</span>, // Example icon
    state: InputFieldState.DEFAULT,
}
