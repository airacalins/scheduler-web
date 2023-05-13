import { Col, Row } from "react-bootstrap";
import FormGroup from "../../app/components/form/FormGroup";
import VerticalSpace from "../../app/components/spacer/VerticalSpace";
import { AUTHENTICATION_FORM_TYPE, FORM_TYPE, ROUTE_NAME } from "../../app/utilities/enums"
import { CONFIRM_PASSWORD, EMAIL, EMPTY_STRING, FIRST_NAME, LAST_NAME, LOGIN, LOGIN_IMAGE, LOGIN_MESSAGE, PASSWORD, REGISTER, REGISTER_MESSAGE, SIGN_IN, SIGN_UP, USERNAME } from "../../app/utilities/string_constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginUserInput, RegisterUserInput } from "../../app/store/auth/types";
import { PrimaryButton } from "../../app/components/button/PrimaryButton";
import { Center } from "../../app/components/container/Center";
import { useAppDispatch } from "../../app/store/hooks";
import { loginUser, registerUser } from "../../app/store/auth/action";

interface Props {
  authenticationFormType: AUTHENTICATION_FORM_TYPE,
}

const AuthenticationPage = ({ authenticationFormType }: Props) => {
  const initialLoginInput = {
    email: EMPTY_STRING,
    password: EMPTY_STRING,
  };
  const initialRegisterInput = {
    firstName: EMPTY_STRING,
    lastName: EMPTY_STRING,
    userName: EMPTY_STRING,
    email: EMPTY_STRING,
    confirmPassword: EMPTY_STRING,
    password: EMPTY_STRING,
  }
  const loginForm = authenticationFormType === AUTHENTICATION_FORM_TYPE.LOGIN;
  const registerForm = authenticationFormType === AUTHENTICATION_FORM_TYPE.REGISTER;
  const [loginUserInput, setLoginUserInput] = useState<LoginUserInput>({ ...initialLoginInput });
  const [registerUserInput, setRegisterUserInput] = useState<RegisterUserInput>({ ...initialRegisterInput });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSwitchForm = () => {
    if (loginForm) {
      setLoginUserInput({ ...initialLoginInput });
      navigate(ROUTE_NAME.REGISTER);
    }
    else {
      setRegisterUserInput({ ...initialRegisterInput });
      navigate(ROUTE_NAME.LOGIN);
    }
  };

  const handleLoginUser = async () => {
    await dispatch(loginUser(loginUserInput));
    console.log("TODO: Handle navigation to HOME_PAGE")
  }

  const handleRegisterUser = async () => {
    if (registerUserInput.password !== registerUserInput.confirmPassword) console.log("TODO: Handle toast message for PASSWORD_MISMATCH");
    // console.log("A", registerUserInput)
    await dispatch(registerUser(registerUserInput));
    console.log("TODO: Handle navigation to HOME_PAGE")
  }

  return (
    <Row className="vh-100">
      <Col
        sm={5}
        className="p-5"
      >
        <div className="w-75 m-auto d-flex flex-column align-items-center">
          <h1>{loginForm ? LOGIN : REGISTER}</h1>

          <VerticalSpace height={48} />
          {
            registerForm &&
            <>
              <FormGroup
                title={FIRST_NAME}
                type={FORM_TYPE.TEXT}
                value={registerUserInput.firstName}
                onChange={
                  (value) => setRegisterUserInput(prev => (
                    {
                      ...prev,
                      firstName: value
                    }
                  ))
                }
              />

              <VerticalSpace height={16} />

              <FormGroup
                title={LAST_NAME}
                type={FORM_TYPE.TEXT}
                value={registerUserInput.lastName}
                onChange={(value) => setRegisterUserInput(prev => (
                  {
                    ...prev,
                    lastName: value
                  }
                ))}
              />
              <VerticalSpace height={16} />

              <FormGroup
                title={USERNAME}
                type={FORM_TYPE.TEXT}
                value={registerUserInput.userName}
                onChange={(value) => setRegisterUserInput(prev => (
                  {
                    ...prev,
                    userName: value
                  }
                ))}
              />

              <VerticalSpace height={16} />
            </>
          }

          <FormGroup
            title={EMAIL}
            type={FORM_TYPE.EMAIL}
            value={loginForm ? loginUserInput.email : registerUserInput.email}
            onChange={(value) => loginForm ?
              setLoginUserInput(prev => (
                {
                  ...prev,
                  email: value,
                }
              ))
              : setRegisterUserInput(prev => (
                {
                  ...prev,
                  email: value
                }
              ))}
          />

          <VerticalSpace height={16} />

          <FormGroup
            title={PASSWORD}
            type={FORM_TYPE.PASSWORD}
            value={loginForm ? loginUserInput.password : registerUserInput.password}
            onChange={
              (value) => loginForm
                ? setLoginUserInput(prev => (
                  {
                    ...prev,
                    password: value
                  }
                ))
                : setRegisterUserInput(prev => (
                  {
                    ...prev,
                    password: value
                  }
                ))
            }
          />

          <VerticalSpace height={16} />

          {
            registerForm &&
            <FormGroup
              title={CONFIRM_PASSWORD}
              type={FORM_TYPE.PASSWORD}
              value={registerUserInput.confirmPassword}
              onChange={(value) => {
                return setRegisterUserInput(prev => (
                  {
                    ...prev,
                    confirmPassword: value
                  }
                ));
              }}
            />

          }

          <VerticalSpace height={32} />

          <div className="d-flex" >
            <p>{loginForm ? LOGIN_MESSAGE : REGISTER_MESSAGE}</p>
            <p
              className="ms-2 cursor__pointer color__secondary"
              onClick={handleSwitchForm}
            >
              {loginForm ? SIGN_UP : SIGN_IN}
            </p>
          </div>

          <PrimaryButton
            label={loginForm ? LOGIN : REGISTER}
            onClick={loginForm ? handleLoginUser : handleRegisterUser}
          />
        </div>
      </Col>

      <Col sm={7}>
        <Center className="bg__primary">
          <img
            className="w-75 h-75 object-fit__cover"
            src={LOGIN_IMAGE}
            alt=""
          />
        </Center>

      </Col>

    </Row>
  )
}

export default AuthenticationPage