"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { InitializeLanding } from "../utils/TokenChecker"
import { employeeTS } from "../types"
import { Chat } from "./Chat"

const Page = () => {
  let router = useRouter()
  let [user, setUser] = useState<employeeTS | null>(null)
  useEffect(() => {
    InitializeLanding(router, setUser)
  }, [])
  useEffect(() => {
    console.log(user?.dob)
    console.log(user?.doj)
  }, [user])

  return (
    <div className='text-white bg-opacity-0'>
      <div>{user?.empid}</div>
      <div>{user?.name}</div>
      <div>{user?.dob.slice(0, 10)}</div>
      <div>{user?.email}</div>
      <div>{user?.phone}</div>
      <div>{user?.c_add}</div>
      <div>{user?.p_add}</div>
      <div>{user?.aadhaar}</div>
      <div>{user?.upi}</div>
      <div>{user?.dept}</div>
      <div>{user?.title}</div>
      <div>{user?.doj.slice(0, 10)}</div>
      <div>{user?.salary}</div>
      <div>{user?.regport}</div>
      <div>{user?.regkey}</div>
      <div>{user?.laptop}</div>
      <div>{user?.leaves}</div>
      <div>{user?.gender}</div>
      <div>{user?.team}</div>
      <Chat />
    </div>
  )
}

export default Page