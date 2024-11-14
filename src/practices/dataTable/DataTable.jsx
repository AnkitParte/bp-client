import React, { useState } from "react"
import CommonTable from "./comps"
import { Button } from "reactstrap"
import { empData } from "./helpers"

const DataTable = () => {
  const [employeeData, setEmployeeData] = useState(empData) //array of objects

  const tableSchema = (args) => {
    return [
      {
        title: "Id",
        class: "",
        component: (item) => {
          return <div>{}</div>
        }
      },
      {
        title: "User Name",
        class: "",
        component: (item) => {
          return <div>{item?.userName}</div>
        }
      },
      {
        title: "Email",
        class: "",
        component: (item) => {
          return <div>{item?.email}</div>
        }
      },
      {
        title: "Designation",
        class: "",
        component: (item) => {
          return <div>{item?.designation}</div>
        }
      },
      {
        title: "Age",
        class: "",
        component: (item) => {
          return <div>{item?.age}</div>
        }
      },
      {
        title: "Actions",
        class: "",
        component: (item) => {
          return (
            <div>
              <Button>Update</Button>
            </div>
          )
        }
      }
    ]
  }
  return (
    <div>
      <CommonTable tableColumns={tableSchema} tableData={employeeData} />
    </div>
  )
}

export default DataTable
