import { cookies } from "@/database/products"

import { CardElement } from "../cards/Card"


export const CookiesBar = () => {
  return (
    <>
      <div className="w-full h-[100px] flex justify-center items-cente mt-[10%]">
          <h2 className="text-8xl font-market text-[#d07f7c] drop-shadow-lg">Welcome to the cookie paradice</h2>
      </div>
      <section id="cookies" className="w-full h-auto p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {
          cookies.map((cookie)=>(
            <CardElement key={cookie.id} cookie={cookie}/>
          ))
        }
      </section>
    </>
  )
}
