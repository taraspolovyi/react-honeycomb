import * as React from "react";
import { HoneycombCellProps } from "./types";

const HoneycombCell: React.FC<HoneycombCellProps> = ({
  children,
  row,
  column,
}) => {
  const transform = row % 2 ? `translateX(25%)` : `translateX(-25%)`;
  return (
    <li
      style={{
        gridRow: `${row} / span 4`,
        gridColumn: `${column} / span 4`,
        pointerEvents: "none",
        transform,
      }}
    >
      {children}
    </li>
  );
};

export default HoneycombCell;
