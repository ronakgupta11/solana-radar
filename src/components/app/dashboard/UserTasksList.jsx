import { Card } from 'flowbite-react'
import React from 'react'
import { Table } from 'flowbite-react'

const UserTasksList = () => {
  return (
    <>
     
     <div className="  ">
     <h5 className="text-2xl mx-2  tracking-tight text-gray-900 dark:text-white">
        Tasks Done
      </h5>
      <div className=" flex flex-col">
  <Table className='rounded-xl mt-3 flex-grow'>
    <Table.Head>
      <Table.HeadCell>Name</Table.HeadCell>
      <Table.HeadCell>Date</Table.HeadCell>
      <Table.HeadCell>Submitted</Table.HeadCell>
      <Table.HeadCell>Approved</Table.HeadCell>
      <Table.HeadCell>Total rewards</Table.HeadCell>
      <Table.HeadCell>
        <span className="sr-only">Edit</span>
      </Table.HeadCell>
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {'Apple MacBook Pro 17"'}
        </Table.Cell>
        <Table.Cell>Sliver</Table.Cell>
        <Table.Cell>Laptop</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        <Table.Cell>
          <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          Microsoft Surface Pro
        </Table.Cell>
        <Table.Cell>White</Table.Cell>
        <Table.Cell>Laptop PC</Table.Cell>
        <Table.Cell>$1999</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        <Table.Cell>
          <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
 
      {Array.from({ length: 2 }).map((_, index) => (
        <Table.Row key={index} className="bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap">&nbsp;</Table.Cell>
          <Table.Cell>&nbsp;</Table.Cell>
          <Table.Cell>&nbsp;</Table.Cell>
          <Table.Cell>&nbsp;</Table.Cell>
          <Table.Cell>&nbsp;</Table.Cell>
          <Table.Cell>&nbsp;</Table.Cell>
        </Table.Row>
      ))}

    </Table.Body>
  </Table>
</div>

    </div>
    </>
  )
}

export default UserTasksList