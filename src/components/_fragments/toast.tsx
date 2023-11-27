"use client"

import { adminStore } from "@/contexts/adminStore"
import { ToastContainer, toast } from "react-toastify"


export const Toast = () => {
  const { error, message } = adminStore((store) => store)

  return (
    <>
      {error && toast.error(error, {toastId: "errortoast"})}
      {message && toast.success(message, {toastId: "successtoast"})}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}