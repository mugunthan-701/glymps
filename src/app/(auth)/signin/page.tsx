import AuthButton from '@/components/ui/auth'
import React from 'react'

const page = () => {
  return (
    <div className=' w-full h-full  flex justify-center items-center'>
      <AuthButton path='signin' />
    </div>
  )
}

export default page