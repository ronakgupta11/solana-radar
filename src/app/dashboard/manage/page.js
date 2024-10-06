"use client"
import ProfileCard from '@/components/app/dashboard/ProfileCard'
import UserTasksList from '@/components/app/dashboard/UserTasksList'
import React from 'react'

function Page() {
  return (
    <div>
        <UserTasksList/>
        <ProfileCard/>
    </div>
  )
}

export default Page