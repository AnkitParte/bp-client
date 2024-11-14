import React, { useState } from "react"
import { InputWrapper } from "./comps"
import { Button, Form } from "reactstrap"
import { formSchema } from "./helpers"

const Optimal = () => {
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
    setUser((p) => ({ ...p, [name]: value }))
  }
  /**
   * Helps on bypassing prop drilling
   * saves from having unnecessary html
   * as component grows you don't have worry about passing props again an again
   * bypass case where based on type of input field customization wrapper code will going to extend
   */
  return (
    <Form>
      <InputWrapper fieldTitle={"Full Name"} error={error}>
        <Input
          type="text"
          name="fullName"
          onChange={handleFormChanges}
          payload={user}
        />
      </InputWrapper>
      <InputWrapper fieldTitle={"Email"} error={error}>
        <Input
          type="email"
          name="email"
          onChange={handleFormChanges}
          payload={user}
        />
      </InputWrapper>
      <InputWrapper fieldTitle={"Password"} error={error}>
        <Input
          type="password"
          name="password"
          onChange={handleFormChanges}
          payload={user}
        />
      </InputWrapper>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default Optimal
