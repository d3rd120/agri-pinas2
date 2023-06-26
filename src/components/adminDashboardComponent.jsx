import "../css/Components/adminDashboardComponent.css";
import AdminNavigation from '../components/adminPageNavigation';


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';





const AdminDashboard = () => {



 

  const data = [
    {
      name: 'Jan',
      Farmer: 12,
      Buyer: 35,
     
    },
    {
      name: 'Feb',
      Farmer: 35,
      Buyer: 43,
      
    },
    {
      name: 'Mar',
      Farmer: 22,
      Buyer: 21,
      
    },
    {
      name: 'April',
      Farmer: 11,
      Buyer: 35,
      
    },
    {
      name: 'May',
      Farmer: 33,
      Buyer: 54,
      
    },
    {
      name: 'June',
      Farmer: 54,
      Buyer: 44,
      
    },
    {
      name: 'July',
      Farmer: 33,
      Buyer: 22,
      
    },
    {
      name: 'August',
      Farmer: 12,
      Buyer: 31,
      
    },
    {
      name: 'September',
      Farmer: 31,
      Buyer: 33,
     
    },
    {
      name: 'October',
      Farmer: 44,
      Buyer: 55,
      
    },

    {
      name: 'November',
      Farmer: 44,
      Buyer: 44,
      
    },
    {
      name: 'December',
      Farmer: 58,
      Buyer: 65,
      
    },
    
  ];


  return (
    <>   
      <div className="adminDashboardComponent">
        <AdminNavigation />      
        <div className="adminDashboardComponentMainPanel">         
          <div className="adminDashboardComponentTopSection">
            <div className="adminDashboardComponentMainText1">
              <b className="adminDashboardComponentMainText1Container">   
                <p className="adminDashboardComponentBlankLine">&nbsp;</p>                      
                <p className="adminDashboardComponentBlankLine">Welcome Admin</p>
              </b>
            </div>
          </div>
          <div className="adminDashboardComponentMiddleSection">
            <div className="adminDashboardComponentOverview">
              <div className="adminDashboardComponentMainText2">
                Monthly user registered
              </div>
              <div className="adminDashboardComponentCard">           
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Farmer" stroke="#96ec28" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Buyer" stroke="#84d2c5" />                     
                  </LineChart>
                </ResponsiveContainer>
              </div>                
              <div className="adminDashboardComponentLegendSection">
                <div className="adminDashboardComponentLegendBox">
                  <div className="adminDashboardComponentLegendBoxTitle">Farmer</div>
                  <div className="adminDashboardComponentLegendBoxWrapper">
                    <div className="adminDashboardComponentLegendSubTitle">Total Users: 325</div>
                  </div>
                  <div className="adminDashboardComponentLegendVector">
                    <div className="adminDashboardComponentLegendChild1" />
                  </div>
                </div>
                <div className="adminDashboardComponentLegendBox">
                  <div className="adminDashboardComponentLegendBoxTitle">User</div>
                  <div className="adminDashboardComponentLegendBoxWrapper">
                    <div className="adminDashboardComponentLegendSubTitle">Total Users: 225</div>
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
    </>
  );
  
};

export default AdminDashboard;
