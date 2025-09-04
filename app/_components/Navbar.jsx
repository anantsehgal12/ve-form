import Image from 'next/image'
import React from 'react'

const logourl = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/m6LjqZnQXrClXx8x/image-1---copy---copy-A1aP0ERQxJsXnjny.png"

function Navbar() {
  return (
    <main>

        <div className='flex justify-between items-center'>
            <div className='inline-flex items-center gap-5'>
                <Image src={logourl} alt="logo" width={100} height={100} className='bg-white rounded-2xl'/>
                <h1 className='text-4xl font-bold'>VAM Enterprises</h1>
            </div>
            <div>

            </div>
        </div>

    </main>
  )
}

export default Navbar