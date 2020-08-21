import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string().min(2)
        .required('must include name'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'must select a size')
        .required('must select a role'),
})

export default formSchema