'use client'

import React from 'react'
import { Next13ProgressBar } from 'next13-progressbar'

const ProgressBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      {children}
      <React.Suspense>
        <Next13ProgressBar
          height="6px"
          color="#04001E"
          options={{ showSpinner: false }}
          showOnShallow
        />
      </React.Suspense>
    </React.Fragment>
  )
}

export default ProgressBar
