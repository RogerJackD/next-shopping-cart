"use client";

import UserInfoCard from '@/features/users/components/user-info-card';
import Navbar from '../shared/components/navbar';



export default function Home() {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <UserInfoCard/>
    </div>
  );
}
