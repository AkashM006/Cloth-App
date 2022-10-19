import * as yup from 'yup'

const registerValidator = yup.object().shape({
    email: yup
        .string('Email must be a string')
        .email('Email is not valid')
        .required('Email is required'),
    name: yup
        .string('Name must be a string')
        .required('Name is required')
        .min(3, 'Name must be atleast 3 characters long')
        .matches(/^[a-zA-Z ]*$/, 'Name must contain only alphabets'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be atleast 8 characters long')
})

export { registerValidator }