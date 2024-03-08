import React from 'react'
import Banner from '../Banner'

const AdminMain = () => {
  return (
       <>
    <Banner head='AdminMain' navigate=''/>
      <section className="restore">
          <div className="changelog">
          <h1 className="content__head restore__content-head content__head__headOne">
              V.1
          </h1>
          <p className="content__desc restore__content-desc content__desc__large">Welcome to Admin</p>
          </div>  
      </section>
    </>
  )
}

export default AdminMain
