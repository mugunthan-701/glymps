import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'

const Input = ({ input }: { input: string }) => {
  return (
    <div className=" flex gap-x-4">
      <Avatar>
        <AvatarFallback>H</AvatarFallback>
        <AvatarImage src=""></AvatarImage>
      </Avatar>
      <div className=" font-medium">
        {input}
      </div>
    </div>
  )
}

export default Input
