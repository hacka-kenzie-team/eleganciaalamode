"use client"

import { userStore } from "@/contexts/userStore"
import { ToastContainer, toast } from "react-toastify"


export const Toast = () => {
  const { error, message } = userStore((store) => store)

  return (
    <>
      {error && toast.error(error)}
      {message && toast.success(message)}
      {/* {productError && <span className="fixed min-w-[50%] lg:min-w-[20%] text-small-price text-center p-5 bottom-[17%] left-1/2 translate-x-[-50%] bg-black text-white border-2 border-white">
        {productError}</span>}
      {productMessage && <span className="fixed min-w-[50%] lg:min-w-[20%] text-small-price text-center p-5 bottom-[17%] left-1/2 translate-x-[-50%] bg-grey text-black border-2 border-black">
        {productMessage}</span>} */}
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