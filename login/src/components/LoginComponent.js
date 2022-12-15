import React from 'react'
import { ProductComponent } from 'products/ProductComponent'
const LoginComponent = () => {
  return (
    <div>some component in login service . 
        <ProductComponent msg="(called from login-service)"/>
    </div>
  )
}

export{ LoginComponent}