import React from "react"

const CommonTable = ({ tableColumns, tableData }) => {
  return (
    <table>
      <thead>
        <tr>
          {tableColumns?.map((it) => {
            return <th>{it?.title}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {tableData?.map((item) => {
          return (
            <tr>
              {tableColumns?.map((rowItem) => {
                return <td>{rowItem?.component(item)}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default CommonTable
