import * as React from "react";

export interface PropsDetail {
  name: string;
  type: string | string[];
  default?: string;
  required?: boolean;
  description?: string | JSX.Element;
}

export function PropsTable({ componentProps }: { componentProps: PropsDetail[] }) {

  function getType(type: string | string[]) {
    if (Array.isArray(type)) {
      if (type.length <= 2) {
        return type.join(' | ');
      }
      return type.map((item, index) => {
        if (index === 0) {
          return item;
        }
        return <><br />|<span style={{ marginLeft: '5px' }}>{item}</span></>
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
            <tr>
              <td className="codeFont bold">{item.name}</td>
              <td className="codeFont italic fz90">{getType(item.type)}</td>
              <td className="codeFont italic fz90">{item.default}</td>
              <td className="fz90">{item.required ? <span className="bold">Yes</span> : 'No'}</td>
              <td className="propsDescription fz90">{item.description}</td>
            </tr>
          )
        })

        }
      </tbody>
    </table>
  )
}