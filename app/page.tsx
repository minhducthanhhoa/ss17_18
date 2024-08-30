import Image from 'next/image'
import React from 'react'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'học lập trình nextjs',
  description: 'học nextjs cơ bản, đơn giản, basic',
}

export default function page() {
  return (
    <div>
      <Image 
        src={"https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg"} 
        alt='image'
        width={200}
        height={200}
        />
    </div>
  )
}
