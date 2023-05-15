import { useState } from "react";
import { FORM_TYPE } from "../../utilities/enums";
import { Form } from "react-bootstrap";
import { EMPTY_STRING, REQUIRED_FIELD_MESSAGE } from "../../utilities/string_constants";

interface Props {
  type: FORM_TYPE,
  title?: string,
  placeholder?: string,
  value?: string,
  width?: 25 | 50 | 75 | 100,
  className?: string,
  onChange: (value: string) => void,
}

const FormGroup = ({ onChange, title, placeholder, type, value, className, width = 100 }: Props) => {
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);

  return (
    <div className={`${className} w-${width} `}>
      <Form.Group>
        {
          title && <Form.Label>{title}</Form.Label>
        }
        <Form.Control
          type={type}
          placeholder={placeholder}
          className="py-2"
          value={value}
          isInvalid={isInputEmpty}
          onChange={(evt) => {
            setIsInputEmpty(evt.target.value === EMPTY_STRING ? true : false);
            return (onChange(evt.target.value));
          }}
        />
        {isInputEmpty &&
          <Form.Control.Feedback type="invalid">
            {REQUIRED_FIELD_MESSAGE(title)}
          </Form.Control.Feedback>
        }
      </Form.Group>
    </div >
  )
}

export default FormGroup;

