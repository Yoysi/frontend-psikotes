import AdminLayout from "@/layout/AdminLayout";
import Chart from "@/components/chart";
import ChartWrapper from "@/components/chartwrapper";
import { div } from "framer-motion/client";

const Superuser = () => {
  return (
    <div>
      <div className="card card-border bg-base-100 flex-1 min-w-50 max-w-150 h-100">
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
  );
};

export default Superuser;
