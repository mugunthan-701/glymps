import { cookies } from "next/headers"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/side"
import Output from "@/components/ui/input/output"
import Input from "@/components/ui/input/input"
import MainHeader from "@/components/ui/main_header"
import { run } from "@/service/gemini.service"
import { response } from "express"
import prisma from "../../../../prisma/prisma"

async function page() {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
  const response = await run()
  // console.log(response)
  response?.map(async (response:any) => {
    let c = await prisma.questions.create({
      data:{
        question:response.question,
        userId:"",
        statement:{
          create:{
            answer:response.solution,
            youtubelink:response.video_link,
          }
        }
      }
    })
    console.log(c)
  })
  // let response = [{
  //   question: 'Explain how variations in photon wavelength and intensity can affect the rate and efficiency of different photosynthetic pathways in plants.',
  //   solution: 'Different photosynthetic pathways (e.g., C3, C4, CAM) are adapted to specific light conditions.  C3 plants are more efficient at lower light intensities but can suffer from photorespiration in high light and heat.  C4 and CAM plants are better adapted to high light intensities and/or dry conditions, utilizing different strategies to minimize photorespiration and optimize photon capture.',
  //   video_link: 'https://www.youtube.com/watch?v=N753N8b5z4o'
  // }]

  return (
    <SidebarProvider defaultOpen={defaultOpen} className=" w-full h-full">
      <AppSidebar />
      <main className=" w-full h-full">
        <div className=" flex justify-between p-2 px-4">
          <MainHeader />
        </div>
        <div className=" p-4 w-full h-full flex justify-center">
          <div className=" w-[70%] h-full p-4 flex flex-col gap-y-6 p-6">
            {/* {
              response?.map(response => (
                <Input input={response.question} />
                ))
            } */}
            
            <div className=" w-full h-fit">
              {
                response.map(response => (
                  <Output answer={response.solution} question={response.question} youtubelink={response.video_link} />
                ))
              }
              {/* <Output answer="" question="" />
              <Output answer="" question="" />
              <Output answer="" question="" /> */}


            </div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default page

  //  {
  //   question: '6.  2/3 of a class of 36 students passed a test. How many students passed?',
  //   solution: {
  //     step1: 'Total number of students = 36',
  //     step2: 'Fraction of students who passed = 2/3',
  //     step3: 'Number of students who passed = (Fraction of students who passed) * (Total number of students) = (2/3) * 36 = 24'      
  //   },
  //   answer: '24 students',
  //   video_link: 'https://www.youtube.com/watch?v=N1X0vf87w4o&ab_channel=MathwithMr.J'
  // },