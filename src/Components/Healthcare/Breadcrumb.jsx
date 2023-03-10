import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function HealthCareBreadcrumb() {
  return (
    <Breadcrumb   fontSize="12px" spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <Link to={"/"} >Trang chủ</Link>
  </BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink _hover={{textDecoration:"none"}}  >Chăm sóc sức khõe</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
    
  )
}

export default HealthCareBreadcrumb