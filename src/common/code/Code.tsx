import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Code: React.FunctionComponent = ({ children }) => {
  return (
    <SyntaxHighlighter
      language="typescript"
      style={darcula}
      customStyle={{ padding: "4px 8px" }}
    >
      {children}
    </SyntaxHighlighter>
  );
};
