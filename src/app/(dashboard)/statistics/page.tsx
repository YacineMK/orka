"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Progress } from "@/components/ui/progress";

const initialData = [
  { name: "Feb", planned: 30000, actual: 32000 },
  { name: "Mar", planned: 35000, actual: 37000 },
  { name: "Apr", planned: 38000, actual: 41000 },
  { name: "May", planned: 40000, actual: 43000 },
  { name: "Jun", planned: 45591, actual: 48000 },
  { name: "Jul", planned: 47000, actual: 51000 },
  { name: "Aug", planned: 48000, actual: 52000 },
  { name: "Sep", planned: 49000, actual: 53000 },
  { name: "Oct", planned: 50000, actual: 54000 },
  { name: "Nov", planned: 51000, actual: 54500 },
  { name: "Dec", planned: 52000, actual: 55000 },
  { name: "Jan", planned: 53000, actual: 56000 },
];

const inventoryData = [
  {
    category: "Electronics",
    value: 143382,
    percentage: 100,
    color: "bg-blue-200",
  },
  {
    category: "Furniture",
    value: 87974,
    percentage: 65,
    color: "bg-green-200",
  },
  {
    category: "Clothing",
    value: 45211,
    percentage: 35,
    color: "bg-yellow-200",
  },
  { category: "Boxes", value: 21893, percentage: 15, color: "text-red-200" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("all");
  const [chartPeriod, setChartPeriod] = useState("12m");
  const [inventoryPeriod, setInventoryPeriod] = useState("7d");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [data, setData] = useState(initialData);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Here you would typically fetch new data based on the selected tab
    // For this example, we'll just randomize the data
    setData(
      initialData.map((item) => ({
        ...item,
        planned: item.planned + Math.floor(Math.random() * 10000),
        actual: item.actual + Math.floor(Math.random() * 10000),
      })),
    );
  };

  const handleChartPeriodChange = (value: string) => {
    setChartPeriod(value);
    // Here you would typically fetch new data based on the selected period
    // For this example, we'll just slice the data
    const periodsMap: { [key: string]: number } = {
      "12m": 12,
      "6m": 6,
      "30d": 1,
      "7d": 1,
    };
    setData(initialData.slice(-periodsMap[value]));
  };

  return (
    <div className={`container mx-auto p-6 space-y-6`}>
      <div className="flex justify-between items-center">
        {/* <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="w-full justify-start h-11 bg-background">
            <TabsTrigger value="all" className="text-base">
              All
            </TabsTrigger>
            <TabsTrigger value="production" className="text-base">
              Production
            </TabsTrigger>
            <TabsTrigger value="critical" className="text-base">
              Critical Alert
            </TabsTrigger>
            <TabsTrigger value="external" className="text-base">
              External Factors
            </TabsTrigger>
            <TabsTrigger value="supply" className="text-base">
              Supply Chain
            </TabsTrigger>
          </TabsList>
        </Tabs> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Supply Chain Bottleneck",
            value: "+20.1%",
            description: "Reroute shipments via a faster supplie",
            color: "text-green-200",
          },
          {
            title: "Weather Impact on Sales",
            value: "Rainy - 15°C",
            description: "Increase online marketing promotions",
            color: "text-green-200",
          },
          {
            title: "Production Suggestion",
            value: "+20.1%",
            description: "Increase production to meet forecasted demand",
            color: "text-green-200",
          },
          {
            title: "Deviation Detected",
            value: "+10.9%",
            description: "Production is down by 10% from the plan",
            color: "text-red-200",
          },
        ].map((item, index) => (
          <Card
            key={index}
            className="transition-all hover:shadow-lg cursor-pointer"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium ">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold ${item.color}`}>
                {item.value}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <Card className="col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Planned vs Actual Production</CardTitle>
              <Tabs value={chartPeriod} onValueChange={handleChartPeriodChange}>
                <TabsList>
                  <TabsTrigger value="12m" className="text-xs">
                    12 Months
                  </TabsTrigger>
                  <TabsTrigger value="6m" className="text-xs">
                    6 Months
                  </TabsTrigger>
                  <TabsTrigger value="30d" className="text-xs">
                    30 Days
                  </TabsTrigger>
                  <TabsTrigger value="7d" className="text-xs">
                    7 Days
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="planned" stroke="#8884d8" />
                  <Line type="monotone" dataKey="actual" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Inventory Categories</CardTitle>
              <Select
                value={inventoryPeriod}
                onValueChange={setInventoryPeriod}
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 Days</SelectItem>
                  <SelectItem value="14d">Last 14 Days</SelectItem>
                  <SelectItem value="30d">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {inventoryData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{item.category}</span>
                  <span className="text-sm">{item.value.toLocaleString()}</span>
                </div>
                <Progress
                  value={item.percentage}
                  className={`h-2 ${item.color}`}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
