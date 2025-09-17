import AdminLayout from "@/layout/AdminLayout";
import Chart from "@/components/chart";
import ChartWrapper from "@/components/chartwrapper";

const Dashboard = () => {
  return (
    <div className="z-30">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Selamat </p>

      <div className="flex mt-4 gap-7">
        <div className="card card-border bg-base-100 w-65 h-30">
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>A card </p>
          </div>
        </div>
        <div className="card card-border bg-base-100 w-65 h-30">
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>A card </p>
          </div>
        </div>
        <div className="card card-border bg-base-100 w-65 h-30">
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>A card </p>
          </div>
        </div>
        <div className="card card-border bg-base-100 w-65 h-30">
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>A card </p>
          </div>
        </div>
      </div>

      <div className="flex mt-20 gap-8">
        <div className="card card-border bg-base-100 w-180 h-[400px]">
          <div className="card-body">
            <ChartWrapper />
          </div>
        </div>
        <div className="card card-border bg-base-100 flex-1 h-100">
          <div className="card-body">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Waktu</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="hover:bg-base-300">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
