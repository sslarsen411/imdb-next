import Link from 'next/link'
import React from 'react'

export default function MenuItem({title, address, Icon}) {
  return (
    <div>
    <Link href={address} className='hover:text-amber-500'>
        <Icon className="text-2xl sm:hidden" />
        <p className='text-sm uppercase hidden sm:inline ' >{title}</p>
    </Link>
    </div>
  )
}
