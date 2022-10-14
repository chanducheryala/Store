import React from 'react'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { Skeleton } from 'primereact/skeleton';

export const SkeletonComponent = () => {
  return (
        <div>
            <Skeleton height="2rem" className="mb-8"></Skeleton>
            <Skeleton width="10rem" height="4rem"></Skeleton>
        </div>     

  )
}
