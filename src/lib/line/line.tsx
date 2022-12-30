interface ILineChart {
  data?: number[][];
}

export default function LineChart(props: ILineChart) {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none">
      <rect width="100%" height="100" fill="grey" />
      <line x1="10" y1="90" x2="90" y2="90" stroke="red" strokeWidth="0.5" />
      <line x1="10" y1="10" x2="10" y2="90" stroke="red" strokeWidth="0.5" />
    </svg>
  );
}
