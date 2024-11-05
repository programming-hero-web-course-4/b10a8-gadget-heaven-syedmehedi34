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
