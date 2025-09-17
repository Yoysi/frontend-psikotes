import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartProps = {
  width?: number;
  height?: number;
};

const data = [
  { bulan: "Jan", peminjaman: 30, pengembalian: 20 },
  { bulan: "Feb", peminjaman: 50, pengembalian: 40 },
  { bulan: "Mar", peminjaman: 45, pengembalian: 25 },
  { bulan: "Apl", peminjaman: 45, pengembalian: 25 },
  { bulan: "Mar", peminjaman: 34, pengembalian: 25 },
  { bulan: "Mar", peminjaman: 45, pengembalian: 25 },
  { bulan: "Mar", peminjaman: 45, pengembalian: 25 },
];


export default function Chart({width, height}: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="bulan" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="peminjaman" stroke="#6366F1" />
        <Line type="monotone" dataKey="pengembalian" stroke="#10B981" />
      </LineChart>
    </ResponsiveContainer>
  );
}
