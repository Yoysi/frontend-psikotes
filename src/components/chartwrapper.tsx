import { memo } from "react";
import { useResizeDetector } from "react-resize-detector"; 
import Chart from "./chart";


const ChartWrapper = memo(() => {
  const { width, height, ref } = useResizeDetector();

  return (
    <div ref={ref} className="w-full h-full">
      {/* Pastikan Chart menerima width & height */}
      <Chart width={width} height={height} />
    </div>
  );    
});

export default ChartWrapper;
