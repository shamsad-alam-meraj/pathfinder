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
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="30%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={20}
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
                fontSize={16}
                fontWeight={600}
              >
                {value}
              </text>
            )}
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={{
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              lineHeight: "24px",
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
