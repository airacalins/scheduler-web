import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { SideNav } from '../components/nav/SideNav'
import { Outlet } from 'react-router-dom'

const PrivateLayout = () => {
  return (
    <div className="w-100 vh-100">
      <Row>
        <Col sm={2} className="vh-100">
          <SideNav />
        </Col>

        <Col className="m-4">
          <Outlet />
        </Col>
      </Row>

    </div>
  )
}

export default PrivateLayout