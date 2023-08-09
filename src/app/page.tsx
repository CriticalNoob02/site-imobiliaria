import Image from "../../node_modules/next/image"
import pic from "../../public/pic.jpg"

export default function Home() {
  return (
    <main>
      <Image
      src={pic}
      alt='Foto'
      />
    </main>
  )
}
