"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: ["#E61818", "#9197B3", "#FF9B3F", "#00D097"],
        borderColor: ["#E61818", "#9197B3", "#FF9B3F", "#00D097"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

const OrderCard = () => {
  return (
    <div className="w-full md:w-[650px] px-3 py-4 bg-white rounded-md">
      <h1 className="text-black text-md">
        Orders Analytics{" "}
        <span className="text-sm text-fg">(from 12Dec to 3Jan)</span>
      </h1>
      <div>
        <div className="flex gap-4 mt-6 items-center">
          <div className="flex justify-center w-full sm:w-1/2 ">
            <DoughnutChart />
          </div>
          <div className="hidden sm:flex sm:flex-col  w-1/2 space-y-3">
            <div className="flex items-center gap-2 mx-4 mb-2 py-2 px-3 border border-gray-200 rounded-md shadow-sm">
              <span className="w-5 h-5 bg-green-200 rounded-full "></span>
              <h1 className="text-black text-md font-medium">Done Orders</h1>
            </div>
            <div className="flex items-center gap-2 mx-4 mb-2 py-2 px-3 border border-gray-200 rounded-md shadow-sm">
              <span className="w-5 h-5 bg-orange-200 rounded-full "></span>
              <h1 className="text-black text-md font-medium">
                In Progress Orders
              </h1>
            </div>
            <div className="flex items-center gap-2 mx-4 mb-2 py-2 px-3 border border-gray-200 rounded-md shadow-sm">
              <span className="w-5 h-5 bg-gray-200 rounded-full "></span>
              <h1 className="text-black text-md font-medium">
                On Review Orders
              </h1>
            </div>
            <div className="flex items-center gap-2 mx-4 mb-2 py-2 px-3 border border-gray-200 rounded-md shadow-sm">
              <span className="w-5 h-5 bg-red-200 rounded-full "></span>
              <h1 className="text-black text-md font-medium">
                Canceled Orders
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
