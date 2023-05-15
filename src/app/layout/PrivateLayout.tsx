import { Col, Row } from 'react-bootstrap'
import { SideNav } from '../components/nav/SideNav'
import { Outlet } from 'react-router-dom'

const PrivateLayout = () => {
  return (
    <div className="w-100 vh-100">
      <Row>
        <Col sm={2} className="p-0 vh-100">
          <SideNav />
        </Col>

        <Col className='p-0'>
          <div className="m-4">
            <Outlet />
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default PrivateLayout