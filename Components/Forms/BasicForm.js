import React from "react";

export default function BasicForm({ template, components, miscData }) {
  const data = miscData;

  return (
    <>
      <div>{template.header.jsx}</div>
      {template.Components.map((comp) => {
        const Component = components[comp.name];
        const props = comp.props;
        return (
          <div key={comp.props.id} className={comp.containerClass}>
            <Component {...props} />
          </div>
        );
      })}
    </>
  );
}
