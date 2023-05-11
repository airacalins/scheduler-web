import { Col, Row } from "react-bootstrap";
import FormGroup from "../../app/components/form/FormGroup";
import VerticalSpace from "../../app/components/spacer/VerticalSpace";
import { AUTHENTICATION_FORM_TYPE, FORM_TYPE, ROUTE_NAME } from "../../app/utilities/enums"
import { CONFIRM_PASSWORD, EMAIL, FIRST_NAME, LAST_NAME, LOGIN, LOGIN_IMAGE, LOGIN_MESSAGE, PASSWORD, REGISTER, REGISTER_MESSAGE, SIGN_IN, SIGN_UP } from "../../app/utilities/string_constants";
import { useNavigate } from "react-router-dom";

interface Props {
  authenticationFormType: AUTHENTICATION_FORM_TYPE,
}

const AuthenticationPage = ({ authenticationFormType }: Props) => {
  const loginForm = authenticationFormType === AUTHENTICATION_FORM_TYPE.LOGIN;
  const registerForm = authenticationFormType === AUTHENTICATION_FORM_TYPE.REGISTER;

  const navigate = useNavigate();

  const handleSwitchForm = () => navigate(loginForm ? ROUTE_NAME.REGISTER : ROUTE_NAME.LOGIN);

  return (
    <Row className="vh-100">
      <Col
        sm={5}
        className="p-5"
      >
        <div className="w-75 m-auto d-flex flex-column align-items-center">
          <h1>{loginForm ? LOGIN : REGISTER}</h1>

          <VerticalSpace height={"48px"} />

          <FormGroup
            title={FIRST_NAME}
            type={FORM_TYPE.TEXT}
            onChange={() => { }}
          />

          {
            registerForm &&
            <>
              <FormGroup
                title={LAST_NAME}
                type={FORM_TYPE.TEXT}
                onChange={() => { }}
              />

              <FormGroup
                title={EMAIL}
                type={FORM_TYPE.EMAIL}
                onChange={() => { }}
              />
            </>
          }

          <FormGroup
            title={PASSWORD}
            type={FORM_TYPE.PASSWORD}
            onChange={() => { }}
          />

          {
            registerForm &&
            <FormGroup
              title={CONFIRM_PASSWORD}
              type={FORM_TYPE.PASSWORD}
              onChange={() => { }}
            />
          }

          <div className="my-3">
            {loginForm ? LOGIN_MESSAGE : REGISTER_MESSAGE}
            <span
              className="ps-1 color__secondary"
              role="button"
              onClick={handleSwitchForm}
            >
              {loginForm ? SIGN_UP : SIGN_IN}
            </span>
          </div>

          <button
            className="w-100 p-2 btn__primary"
            onClick={() => { }}
          >
            {loginForm ? LOGIN : REGISTER}
          </button>
        </div>
      </Col>

      <Col
        sm={7}
        className="p-0 vh-100 d-flex align-items-center justify-content-center bg__primary"
      >
        <img
          className="w-75 h-75 object-fit__cover"
          src={LOGIN_IMAGE}
          alt=""
        />
      </Col>

    </Row>
  )
}

export default AuthenticationPage