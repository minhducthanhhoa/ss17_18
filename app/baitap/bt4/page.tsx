import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
        <Image
            src={"https://cdn2.fptshop.com.vn/unsafe/256x0/filters:quality(100)/2023_9_20_638307989548944936_iphone-15-promax-xanh-1.jpg"}
            alt='image'
            width={200}
            height={500}
            priority={false}
         />
    </div>
  )
}
