import React from 'react'

export default function GoodInCart({game, changeGoods}) {
    return (
        <div className='flex w-full'>
            <div className='text-white text-[24px] flex border max-h-[25vh] w-full justify-between items-center ml-5'>
                <p className='ml-5 w-1/3'>{game.title}</p>
                <p className='w-1/2'>{game.description}</p>
                <p className='mr-5'>{game.price}</p>
            </div>
            <button onClick={() => {changeGoods(game)}} className='border text-[32px] w-1/6'>X</button>
        </div>
    )
}
