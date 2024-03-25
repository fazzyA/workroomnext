"use client";
import { login } from "@/actions/login";
import { ROUTES_PATH } from "@/utils/constants";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Link from "next/link";
import { useState, useTransition } from "react";
import * as Yup from "yup";

type Props = {};

export const LoginForm = (props: Props) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("invalid email").required(),
    password: Yup.string().min(6, "too short").max(10, "too long").required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      setError("");
      setSuccess("");
      startTransition(() => {
        login(values).then((data: any) => {
          setError(data.error);
          setSuccess(data.success);
        });
      });
    },
    validationSchema: SignupSchema,
  });

  return (
    <Box w="50%" p={10} m={20} borderWidth="1px" borderRadius="lg">
      <Heading as="h4" size="sm">
        Login
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          m={2}
          isInvalid={!!(formik.touched.email && formik.errors.email)}
        >
          <FormLabel>Email address</FormLabel>
          <Input
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            disabled={isPending}
          />
          {(formik.errors.email || formik.touched.email) && (
            <FormErrorMessage fontSize={"xs"}>
              {formik.errors.email}
            </FormErrorMessage>
          )}
          {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl
          m={2}
          isInvalid={!!(formik.touched.password && formik.errors.password)}
        >
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            disabled={isPending}
          />
          {formik.touched.password && formik.errors.password && (
            <FormErrorMessage fontSize={"xs"}>
              {formik.errors.password}
            </FormErrorMessage>
          )}
        </FormControl>
        <Box>{error}</Box>
        <Box>{success}</Box>
        <Box
          disabled={isPending}
          as="button"
          type="submit"
          borderRadius="md"
          bg="black"
          color="white"
          px={4}
          h={8}
        >
          Login
        </Box>
      </form>
      <Link href={ROUTES_PATH.REGISTER}>
        <u>create an account</u>
      </Link>
    </Box>
  );
};
