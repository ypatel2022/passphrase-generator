import React from 'react'

const TableRow = (props: any) => {
  return (
    // table row for the special character table. makes code reusable
    <tr className="border-b border-gray-700 bg-gray-900 hover:bg-gray-600">
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 text-left font-medium text-white"
      >
        {props.character}
      </th>
      <td className="px-6 py-4 text-left">{props.replacement}</td>
    </tr>
  )
}

export default TableRow
