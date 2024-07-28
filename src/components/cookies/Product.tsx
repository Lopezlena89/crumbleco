import { cookies } from "@/database/products"

interface props{
  params: { 
     cookie: string
  } 
}

export const runtime = 'edge';
const getProduct  = (id:string) =>{
  const convertId = Number(id);

  const cookie = cookies.find(cookie =>cookie.id === convertId );

  return cookie
}

export const Product = ({params}:props) => {

  const cookie = getProduct(params.cookie)
  console.log(cookie)

  return (
    <div className="mt-[60px] w-full h-[500px]">
      <p>{cookie?.name}</p>
    </div>
  )
}
