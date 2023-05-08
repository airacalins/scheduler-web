import { Button, Col, Row } from "react-bootstrap";
import FormGroup from "../../app/components/form/FormGroup";
import { AUTHENTICATION_FORM_TYPE, FORM_TYPE, VARIANT } from "../../app/utilities/enums"
import { LOGIN, LOGIN_MESSAGE, REGISTER, REGISTER_MESSAGE, SIGN_IN, SIGN_UP } from "../../app/utilities/string_constants";

interface Props {
  authenticationFormType: AUTHENTICATION_FORM_TYPE,
}

const AuthenticationPage = ({ authenticationFormType }: Props) => {
  const loginForm = authenticationFormType === AUTHENTICATION_FORM_TYPE.LOGIN;
  const registerForm = authenticationFormType === AUTHENTICATION_FORM_TYPE.REGISTER;

  return (
    <Row>
      <Col sm={4} className="p-5">
        <h1>{loginForm ? LOGIN : REGISTER}</h1>
        <h3>{loginForm ? LOGIN_MESSAGE : REGISTER_MESSAGE}</h3>

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
            className="ps-1 text-primary"
            role="button"
            onClick={() => { }}
          >
            {loginForm ? SIGN_UP : SIGN_IN}
          </span>
        </div>

        <Button
          className="w-100 p-2"
          variant={VARIANT.DARK}
          onClick={loginForm ? () => { } : () => { }}
        >
          {loginForm ? LOGIN : REGISTER}
        </Button>

      </Col>

      <Col>
        <img src="/images/schedule.jpeg" alt="" />

      </Col>

    </Row>
  )
}

export default AuthenticationPage