export interface CommonHoneycombProps<T = string> {
  size: number;
  items: Array<T>;
  renderItem(item: T, index: number): React.ReactElement;
  className?: string;
  gap?: number;
}

export interface StaticHoneycombProps extends CommonHoneycombProps {
  columns: number;
}

export interface ResponsiveHoneycombProps extends CommonHoneycombProps {
  defaultWidth: number;
}

export interface HoneycombCellProps {
  row: number;
  column: number;
}

export interface HexagonProps {
  className?: string;
  style?: React.CSSProperties;
}
