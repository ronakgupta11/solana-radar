import { Card } from 'flowbite-react'
import React from 'react'

const UserTasksList = () => {
  return (
    <>
    <div>
        <Card className='min-h-[20rem] '>
        <div className="grid grid-cols-8  font-bold py-2 px-4 w-full">
        <div className='col-span-2'>Name</div>   
        <div>Date</div>
        <div>Submitted</div>
        <div>Approved</div>
        <div className='col-span-1'>Total rewards</div>
      </div>
        </Card>
    </div>
    </>
  )
}

export default UserTasksList