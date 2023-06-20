import '../css/Components/adminDashboardComponent.css';
import AdminNavigation from './adminPageNavigation';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {

  const data = [
    {
      name: 'Total Users',
      Farmers: 75,    
      Buyers: 43, 
     
    },
   
   
  ];
  return (
    <div className="adminDashboardComponent">
      <AdminNavigation />
      <div className="adminDashboardComponentMainPanel">
        <div className="adminDashboardComponentTopSection">
          <div className="adminDashboardComponentMainText">
            <b className="adminDashboardComponentMainTextContainer">
              <p className="adminDashboardComponentBlankLine">&nbsp;</p>             
              <p className="adminDashboardComponentBlankLine">Welcome Back, Admin</p>
            </b>
          </div>
        </div>
        <div className="adminDashboardComponentMiddleSection">
        <div className="adminDashboardComponentOverview">
        <div className="farmerDashboardComponentMainText2">
             Total Users Registered
            </div>
            <div className="adminDashboardComponentCard">   

            <ResponsiveContainer width="100%" height={window.innerWidth <= 1366 ? 350 : 500}>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Farmers" fill="#96EC28" />
              <Bar dataKey="Buyers" fill="#FFA500" />
            </BarChart>
          </ResponsiveContainer>
            </div>
            <div className="adminDashboardComponentLegendSection">
            <div className="adminDashboardComponentLegendBox">
            <div className="adminDashboardComponentLegendBoxTitle">Farmers</div>
            <div className="adminDashboardComponentLegendBoxWrapper">
            <div className="adminDashboardComponentLegendSubTitle">75 Users</div>
            </div>
            <div className="adminDashboardComponentLegendVector">
                  <div className="adminDashboardComponentLegendChild1" />
                </div>              
              </div>
              <div className="adminDashboardComponentLegendBox">
            <div className="adminDashboardComponentLegendBoxTitle">Buyers</div>
            <div className="adminDashboardComponentLegendBoxWrapper">
            <div className="adminDashboardComponentLegendSubTitle">43 Users</div>
            </div>
            <div className="adminDashboardComponentLegendVector">
                  <div className="adminDashboardComponentLegendChild2" />
                </div>

              
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
