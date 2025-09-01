
import React from 'react'
import { Button } from './atoms/button'
import { ShoppingCartIcon } from 'lucide-react'
import { Badge } from './atoms/badge'

export default function Navbar() {



  return (
    <>
        <nav className='bg-white shadow-sm border-b sticky top-0 z-40'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>

                    <div>
                        <div>
                            <h1 className='text-2xl font-bold text-gray-900'>TiendaApp</h1>
                        </div>
                    </div>

                    <div>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <a className='text-gray-900 hover:text-gray-700 px-3' href="#">Inicio</a>
                            <a className='text-gray-900 hover:text-gray-700 px-3' href="#">Catalogo</a>
                            <a className='text-gray-900 hover:text-gray-700 px-3' href="#">Contacto</a>
                        </div>
                    </div>

                    <div className='flex items-center space-x-4'>
                        <Button variant={'outline'} className='relative'>
                            <ShoppingCartIcon className='h-5 w-5'/>
                            <Badge className='absolute bg-violet-900 -top-2 -right-2 p-0.5'>
                                123
                            </Badge>
                        </Button>
                    </div>

                </div>

            </div>
        </nav>
    </>
  )
}
