import { Flex, Heading, Box, Link } from '@chakra-ui/react'
import { VFC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header: VFC = memo(() => {
  const navigate = useNavigate()
  const onClickHome = () => navigate('/home')
  return (
    <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
      <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }} onClick={onClickHome}>
        <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
          書籍レビューアプリ
        </Heading>
      </Flex>
    </Flex>
  )
})
