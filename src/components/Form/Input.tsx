import {Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name:string;
  label?:string;
}

export function Input({name, label, ...rest}:InputProps){
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="green.500"
        bgColor="gray.200"
        variant="filled"
        _hover={{
          bgColor: 'gray.150'
        }}
        size='lg'
        {...rest}
      />
    </FormControl>
  )
}