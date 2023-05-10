import { Col, Row } from "react-bootstrap";
import FormGroup from "../../app/components/form/FormGroup";
import VerticalSpace from "../../app/components/spacer/VerticalSpace";
import { AUTHENTICATION_FORM_TYPE, FORM_TYPE } from "../../app/utilities/enums"
import { LOGIN, LOGIN_MESSAGE, REGISTER, REGISTER_MESSAGE, SIGN_IN, SIGN_UP } from "../../app/utilities/string_constants";

interface Props {
  authenticationFormType: AUTHENTICATION_FORM_TYPE,
}

const AuthenticationPage = ({ authenticationFormType }: Props) => {
  const loginForm = authenticationFormType === AUTHENTICATION_FORM_TYPE.LOGIN;
  const registerForm = authenticationFormType === AUTHENTICATION_FORM_TYPE.REGISTER;

  return (
    <Row className="vh-100">
      <Col sm={5} className="p-5">
        <div className="w-75 m-auto d-flex flex-column align-items-center">
          <h1>{loginForm ? LOGIN : REGISTER}</h1>

          <VerticalSpace height={"48px"} />

          <FormGroup
            title="First Name"
            type={FORM_TYPE.TEXT}
            onChange={() => { }}
          />

          {
            registerForm &&
            <>
              <FormGroup
                title="Last Name"
                type={FORM_TYPE.TEXT}
                onChange={() => { }}
              />

              <FormGroup
                title="Email"
                type={FORM_TYPE.EMAIL}
                onChange={() => { }}
              />
            </>
          }

          <FormGroup
            title="Password"
            type={FORM_TYPE.PASSWORD}
            onChange={() => { }}
          />

          {
            registerForm &&
            <FormGroup
              title="Comfirm Password"
              type={FORM_TYPE.PASSWORD}
              onChange={() => { }}
            />
          }

          <div className="my-3">
            {loginForm ? LOGIN_MESSAGE : REGISTER_MESSAGE}
            <span
              className="ps-1 color__secondary"
              role="button"
              onClick={() => { }}
            >
              {loginForm ? SIGN_UP : SIGN_IN}
            </span>
          </div>

          <button
            className="w-100 p-2 btn__primary"
            onClick={loginForm ? () => { } : () => { }}
          >
            {loginForm ? LOGIN : REGISTER}
          </button>
        </div>
      </Col>

      <Col sm={7} className="p-0 vh-100" >
        <img className="w-100 h-100 object-fit__cover" src="/images/schedule.jpeg" alt="" />
      </Col>

    </Row>
  )
}

export default AuthenticationPage