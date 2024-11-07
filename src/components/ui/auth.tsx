import React from 'react'
import { Button } from './button'
import { signInWithGitHub, signInWithGoogle } from '@/service/auth.service'
import Link from 'next/link'
import Image from 'next/image'

const AuthButton = ({ path }: { path: string }) => {
  return (
    <div className=' w-full h-full flex  justify-center items-center flex-col'>
      <div className=' w-full flex flex-col items-center pb-4'>
        <p className=' font-bold text-[20px]'>{path === "signin" ? "Welcome Back" : "Welcome"}</p>
        <p className=' text-[14px]'>{path === "signin" ? "Please Signin to Glympse to access" : "Please Signup to Glympse to access"}</p>
      </div>
      <div className=' w-full flex justify-center flex-col p-6 gap-y-4 px-9'>
        <Button variant={"outline"} className=' py-6 gap-x-4' onClick={
          async () => {
            "use server"
            await signInWithGoogle()
          }}>
          <Image src={"/google_icon.svg"} alt='' width={22} height={22} />
          Google
        </Button>
        <Button variant={"outline"} className=' py-6 gap-x-4' onClick={
          async () => {
            "use server"
            await signInWithGitHub()
          }}>
          <Image src={"/github.svg"} alt='' width={22} height={22} />
          Github
        </Button>
      </div>
      <div className=' text-[12px] flex flex-col justify-center items-center gap-y-4'>
        <span className=' flex gap-x-1'>
          <p>
            {path === "signin" ? "Don't have an account" : "Aldready have an account"}
          </p>
          <Link
            className=' underline'
            href={path === "signin" ? "/signup" : "/signin"}
          >
            {path === "signin" ? "register" : "login"}
          </Link>
        </span>
        <span className=' flex flex-col justify-center items-center'>
          <span>
            By clicking on sign in, you agree to our <Link href={""} className=' underline'>
              Terms
              of Service
            </Link> </span>
          <span>
            and <Link href={""} className=' underline'>
              Privacy Policy
            </Link>.
          </span>
        </span>
      </div>
    </div >
  )
}

export default AuthButton
