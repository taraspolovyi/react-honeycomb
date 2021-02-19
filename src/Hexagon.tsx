import * as React from "react";
import { HoneycombContext } from "./helpers";
import type { HexagonProps } from "./types";

const Hexagon: React.FC<HexagonProps> = ({
  children,
  className,
  style = {},
}) => {
  const { gap } = React.useContext(HoneycombContext);
  const clipPath = `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: gap / 2,
        left: gap / 2,
        right: gap / 2,
        bottom: gap / 2,
        clipPath,
        pointerEvents: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default Hexagon;
