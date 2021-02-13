import * as React from "react";

interface PropsDetail {
  name: string;
  type: string | string[];
  default?: string;
  required?: boolean;
  description?: string | JSX.Element;
}

export function PropsTable({ componentProps }: { componentProps: PropsDetail[] }) {

  function getType(type: string | string[]) {
    if (Array.isArray(type)) {
      type.map((item, index) => {
        if (index === 0) {
          return item;
        }
        return <><br />|<span style={{ marginLeft: '5px' }}>item</span></>
      });
    }
    return type;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {componentProps.map(item => {
          return (
            <>
              <td className="codeFont bold">{item.name}</td>
              <td className="codeFont bold">{getType(item.type)}</td>
              <td className="codeFont bold">{item.default}</td>
              <td>{item.required ? 'Yes' : 'No'}</td>
              <td>{item.description}</td>
            </>
          )
        })

        }
      </tbody>
    </table>
  )
}