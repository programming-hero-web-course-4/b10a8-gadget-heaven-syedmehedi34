import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  return (
    <div className="w-11/12 mx-auto pb-44">
      <Helmet>
        <title>Statistics -Gadget Heaven</title>
      </Helmet>
      <div className="bg-primary py-10">
        <h1 className="text-[28px] font-bold text-center text-white mb-4">
          Statistics
        </h1>
        <p className="text-center text-white w-3/5 mx-auto mb-7">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex items-center justify-center gap-5"></div>
      </div>

      <div className="flex items-center justify-center mx-auto">
        <ResponsiveContainer width="70%" height={300}>
          <p className="py-12 text-titleOB text-2xl font-bold">Statistics</p>
          <BarChart data={data}>
            <XAxis dataKey="product_name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="price" barSize={30} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
