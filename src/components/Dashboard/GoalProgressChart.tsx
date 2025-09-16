"use client";

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface GoalChartProps {
  data: { name: string; value: number; fill: string }[];
}

export default function GoalProgressChart({ data }: GoalChartProps) {
  return (
    <div className="w-full h-60 sm:h-72 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%" // center horizontally for mobile
          cy="50%"
          innerRadius="20%"
          outerRadius="90%" // bigger on small screens
          barSize={18}
          data={data}
        >
          <RadialBar
            dataKey="value"
            background={{ fill: "#e5e7eb" }}
            label={({ cx, cy, value }) => (
              <text
                x={cx}
                y={cy}
                fill="#000"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={14}
                fontWeight={600}
              >
                {value}
              </text>
            )}
          />
          <Legend
            iconSize={12}
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{
              fontSize: "12px",
              lineHeight: "20px",
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
