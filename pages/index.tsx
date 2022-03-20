import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const FakeHome = () => {
  const router = useRouter();

  useEffect(()=> {router.push('/home')});
  
  return null;
};

export default FakeHome;
