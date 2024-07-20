
import Image from 'next/image';

export const Principal = () => {
  return (
    <>
        <div className="photo-container ">
            <Image width={1500} height={1000} className="photo photo1"src="/1.webp" alt="crumble-1"/>
            <Image width={1500} height={1000} className="photo photo2"src="/2.webp" alt="crumble-2"/>
            <Image width={1500} height={1000} className="photo photo3"src="/3.webp" alt="crumble-3"/>
            <Image width={1500} height={1000} className="photo photo4"src="/4.webp" alt="crumble-4"/>
        </div>
    </>
  )
}
