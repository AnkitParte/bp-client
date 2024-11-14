import { FormFeedback, FormGroup, Label } from "reactstrap"

export const InputWrapper = ({ children, fieldTitle, payload }) => {
  return (
    <FormGroup>
      <Label>{fieldTitle}</Label>
      {children}
      {payload?.error && (
        <FormFeedback style={{ color: "red" }}>{payload?.message}</FormFeedback>
      )}
    </FormGroup>
  )
}

export const InputWrapperForInput = ({
  fieldTitle,
  payload,
  onChange,
  type,
  name,
  options
}) => {
  return (
    <FormGroup>
      <Label>{fieldTitle}</Label>
      {type == "select" ? (
        <Input type={type} onChange={onChange} name={name}>
          {options?.map((it) => {
            return <option value={it?.value}>{it?.label}</option>
          })}
        </Input>
      ) : (
        <Input type={type} onChange={onChange} name={name} />
      )}
      {payload?.error && (
        <FormFeedback style={{ color: "red" }}>{payload?.message}</FormFeedback>
      )}
    </FormGroup>
  )
}
