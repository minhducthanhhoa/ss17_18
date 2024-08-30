import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
        <Image
            src={"https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg"} 
            alt='image'
            width={200}
            height={500}
        />
    </div>
  )
}
