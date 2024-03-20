"use client"
import { register } from '@/actions/register'
import { Alert, AlertIcon, Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Stack } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { useState, useTransition } from 'react'
import * as Yup from 'yup'

type Props = {}

export const SignupForm = (props: Props) => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "too short")
      .required(),
    email: Yup.string()
      .email("invalid email")
      .required(),
    password: Yup.string()
      .min(6, "too short")
      .max(10, "too long")
      .required(),
  })
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      setError('')
      setSuccess("")
      startTransition(() => {
        register(values)
          .then((data: any) => {
            setError(data.error)
            setSuccess(data.success)
          })
      })
    },
    validationSchema: SignupSchema
  })

  return (
    <Box bg='lightgrey' w='70%' p={4} color='white' borderWidth='1px' borderRadius='lg'>
      <form onSubmit={formik.handleSubmit}>
        <FormControl m={2} isInvalid={!!(formik.touched.username && formik.errors.username)}>
          <FormLabel>Username</FormLabel>
          <Input
            type='text'
            name='username'
            onChange={formik.handleChange}
            value={formik.values.username}
            disabled={isPending}
          />
          {
            (formik.errors.username || formik.touched.username) &&
            <FormErrorMessage fontSize={"xs"}>{formik.errors.username}</FormErrorMessage>
          }
          {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl m={2} isInvalid={!!(formik.touched.email && formik.errors.email)}>
          <FormLabel>Email address</FormLabel>
          <Input
            type='text'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            disabled={isPending}
          />
          {
            (formik.errors.email || formik.touched.email) &&
            <FormErrorMessage fontSize={"xs"}>{formik.errors.email}</FormErrorMessage>
          }
          {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl m={2} isInvalid={!!(formik.touched.password && formik.errors.password)}>
          <FormLabel>Password</FormLabel>
          <Input
            type='password'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            disabled={isPending}
          />
          {(formik.touched.password && formik.errors.password) &&
            <FormErrorMessage fontSize={"xs"}>{formik.errors.password}</FormErrorMessage>
          }
        </FormControl>
        <Box
          disabled={isPending}
          as='button'
          type='submit'
          borderRadius='md'
          bg='black'
          color='white'
          px={4} h={8}>
          Signup
        </Box>
      </form>
      {error && <Alert m={2} status='error' variant="subtle">
        <AlertIcon />
        {error}
      </Alert>}

      {success && <Alert m={2} status='success' variant={"solid"}>
        <AlertIcon />
        {success}
      </Alert>}
    </Box>

  )
}

