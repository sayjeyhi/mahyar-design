import React from "react"

import { useRouter } from "next/router"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { AppConfig } from "../utils/AppConfig"
import { Meta } from "./Meta"

const Default = ({ children }: any) => {
  const router = useRouter()
  const onIndex = router.pathname === "/"

  return (
    <div className="bg-white flex flex-col h-full text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      {!onIndex && <div className="mb-[93.5px]" />}
      <main className="flex-layout">{children}</main>
      <Footer />
    </div>
  )
}

export default Default
