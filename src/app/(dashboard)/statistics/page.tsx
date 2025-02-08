import dynamic from "next/dynamic";

const StaticsFilter = dynamic(() => import("@/components/ui/staticsfilter"));
const StaticCard = dynamic(
  () => import("@/components/dashboard/components/dashboardCards/StaticCard"),
);
const ProdStatsCard = dynamic(
  () =>
    import("@/components/dashboard/components/dashboardCards/ProdStatsCard"),
);
const StatsCard = dynamic(
  () => import("@/components/dashboard/components/dashboardCards/StatsCard"),
);

const Statistics = () => {
  return (
    <div>
      <StaticsFilter />
      <StaticCard />
      <div className="flex flex-col w-full md:flex-row gap-6">
        <ProdStatsCard />
        <StatsCard />
      </div>
    </div>
  );
};

export default Statistics;
