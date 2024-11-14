import React from "react"
import { Form } from "reactstrap"
import { InputWrapperForInput } from "./comps"
import { formSchema, listOfGender } from "./helpers"

const SubOptimal = () => {
  const [user, setUser] = useState(formSchema)

  const handleFormChanges = (e) => {
    let { name, value } = e.target
    if (!value) {
      setUser((p) => ({
        ...p,
        [name]: { value, error: "This is required" }
      }))
      return
    }
    setUser((p) => ({ ...p, [name]: { value, error: "" } }))
  }
  /**
   * requires prop drilling when a new property introduced
   * increases code on InputWrapperForInput based on type of input
   * this approaches requires a little bit of maintenance work
   */
  return (
    <Form>
      <InputWrapperForInput
        fieldTitle={"Full Name"}
        payload={user}
        type={"text"}
        name={"fullName"}
        onChange={handleFormChanges}
      />
      <InputWrapperForInput
        fieldTitle={"Email"}
        payload={user}
        type={"email"}
        name={"email"}
        onChange={handleFormChanges}
      />
      <InputWrapperForInput
        fieldTitle={"Gender"}
        payload={user}
        type={"select"}
        options={listOfGender}
        name="gender"
        onChange={handleFormChanges}
      />
      <InputWrapperForInput
        fieldTitle={"Password"}
        payload={user}
        type="password"
        name={"password"}
        onChange={handleFormChanges}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default SubOptimal
