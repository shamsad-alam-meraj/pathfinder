"use client";

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";

interface GoalChartProps {
  data: { name: string; value: number; fill: string }[];
}

export default function GoalProgressChart({ data }: GoalChartProps) {
  const { t } = useTranslation();

  // Map data to translate the 'name' field
  const translatedData = data.map((item) => ({
    ...item,
    name:
      item.name === "Started"
        ? t("started")
        : item.name === "Wishlisted"
        ? t("wishlisted")
        : t("remaining"),
  }));

  return (
    <div className="w-full h-60 sm:h-72 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="90%"
          barSize={18}
          data={translatedData}
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
