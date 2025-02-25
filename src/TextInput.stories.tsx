import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { TextInput } from './TextInput' // Adjust the import path as necessary

export default {
    title: 'Components/TextInput',
    component: TextInput,
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' },
        updateValue: { action: 'updateValue' },
        name: { control: 'text' },
        required: { control: 'boolean' },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
        isValid: { control: 'boolean' },
        errorMessage: { control: 'text' },
        icon: { control: 'object' },
    },
} as Meta<typeof TextInput>

const Template: StoryFn<typeof TextInput> = (args) => <TextInput {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'Username',
    value: '',
    name: 'username',
    placeholder: 'Enter your username',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
    label: 'Email',
    value: '',
    name: 'email',
    placeholder: 'Enter your email',
    icon: <span>📧</span>, // Example icon
}

export const Disabled = Template.bind({})
Disabled.args = {
    label: 'Disabled Input',
    value: 'Cannot edit this',
    name: 'disabledInput',
    disabled: true,
}

export const WithError = Template.bind({})
WithError.args = {
    label: 'Password',
    value: 'wrongpassword',
    name: 'password',
    isValid: false,
    errorMessage: 'Invalid password',
}
