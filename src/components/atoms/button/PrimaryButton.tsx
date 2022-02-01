// import styled from 'styled-components'
import { Button } from '@chakra-ui/react'
import { VFC, memo, ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: () => void
  type?: string
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, type = '' } = props
  return (
    <Button bg="yellow.400" color="purple.300" p={4} _hover={{ cursor: 'pointer', opacity: 0.8 }} onClick={onClick}>
      {children}
    </Button>
  )
})
