import * as React from "react";
import ResizeObserver from "resize-observer-polyfill";

import Honeycomb from "./Honeycomb";
import { getGridColumnsCount } from "./helpers";

import type { ResponsiveHoneycombProps } from "./types";

const ResponsiveHoneycomb: React.FC<ResponsiveHoneycombProps> = ({
  children,
  size,
  defaultWidth,
  ...restProps
}) => {
  const containerRef = React.useRef<HTMLUListElement>(null);
  const [columns, setColumns] = React.useState(
    getGridColumnsCount(size, defaultWidth)
  );

  React.useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setColumns(getGridColumnsCount(size, entry.contentRect.width));
      }
    });

    setColumns(
      getGridColumnsCount(
        size,
        containerRef.current?.clientWidth ?? defaultWidth
      )
    );

    if (containerRef.current == null) return;

    const target = containerRef.current;
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [size]);

  return (
    <Honeycomb
      ref={containerRef}
      size={size}
      {...restProps}
      columns={columns}
    />
  );
};

export default ResponsiveHoneycomb;
