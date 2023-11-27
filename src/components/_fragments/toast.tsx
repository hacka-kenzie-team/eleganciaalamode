"use client"

import { adminStore } from "@/contexts/adminStore"
import { ToastContainer, toast } from "react-toastify"


export const Toast = () => {
  const { error, message } = adminStore((store) => store)

  return (
    <>
      <p className="hidden">{error && toast.error(error, {toastId: "errortoast"})}</p>
      <p className="hidden">{message && toast.success(message, {toastId: "successtoast"})}</p>
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