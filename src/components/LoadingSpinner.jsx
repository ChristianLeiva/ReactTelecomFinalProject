import React from 'react'

const LoadingSpinner = ({isLoading, children}) => {
  return (<>
    <div className="text-center  d-flex align-items-center justify-content-center" >
    {
        isLoading ? 
            <div className="spinner-border" style={{width: "3rem", height: "3rem",role:"status"}}>
            </div>
        : <div className="mt-2">{children}</div>
    }
    </div>
    </>)
}

export default LoadingSpinner