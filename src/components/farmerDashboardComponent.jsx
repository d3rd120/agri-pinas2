import "../css/Components/farmerDashboardComponent.css";
import FarmerNavigation from '../components/farmerPageNavigation';
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


const FarmerDashboard = () => {

  const data = [
    {
      name: 'Jan',
      Wholesale: 770,
      Retail: 760,
      Revenue: 175,
    },
    {
      name: 'Feb',
      Wholesale: 550,
      Retail: 230,
      Revenue: 520,
    },
    {
      name: 'Mar',
      Wholesale: 900,
      Retail: 650,
      Revenue: 760,
    },
    {
      name: 'April',
      Wholesale: 200,
      Retail: 175,
      Revenue: 550,
    },
    {
      name: 'May',
      Wholesale: 520,
      Retail: 750,
      Revenue: 100,
    },
    {
      name: 'June',
      Wholesale: 550,
      Retail: 260,
      Revenue: 75,
    },
    {
      name: 'July',
      Wholesale: 750,
      Retail: 300,
      Revenue: 120,
    },
    {
      name: 'August',
      Wholesale: 350,
      Retail: 350,
      Revenue: 760,
    },
    {
      name: 'September',
      Wholesale: 250,
      Retail: 790,
      Revenue: 760,
    },
    {
      name: 'October',
      Wholesale: 690,
      Retail: 300,
      Revenue: 100,
    },

    {
      name: 'November',
      Wholesale: 300,
      Retail: 700,
      Revenue: 200,
    },
    {
      name: 'December',
      Wholesale: 800,
      Retail: 777,
      Revenue: 300,
    },
    
  ];


  return (
    <>   
    <div className="farmerDashboardComponent">
      <FarmerNavigation />      
      <div className="farmerDashboardComponentMainPanel">
        <div className="farmerDashboardComponentTopSection">
          <div className="farmerDashboardComponentMainText1">
            <b className="farmerDashboardComponentMainText1Container">
              <p className="farmerDashboardComponentBlankLine">&nbsp;</p>
              <p className="farmerDashboardComponentBlankLine">&nbsp;</p>
              <p className="farmerDashboardComponentBlankLine">Welcome back, farmer</p>
            </b>
          </div>
        </div>
        <div className="farmerDashboardComponentMiddleSection">
          <div className="farmerDashboardComponentOverview">
            <div className="farmerDashboardComponentMainText2">
              Monthly Seller’s Performance
            </div>
            <div className="farmerDashboardComponentCard">           
          <ResponsiveContainer width="100%" height={350}>
                      <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="Wholesale" stroke="#96ec28" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="Retail" stroke="#84d2c5" />
                      <Line type="monotone" dataKey="Revenue" stroke="#ffa500" />
                </LineChart>
                </ResponsiveContainer>
            </div>                
            <div className="farmerDashboardComponentLegendSection">
              <div className="farmerDashboardComponentLegendBox">
                <div className="farmerDashboardComponentLegendBoxTitle">Wholesale</div>
                <div className="farmerDashboardComponentLegendBoxWrapper">
                  <div className="farmerDashboardComponentLegendSubTitle">Php 15,232</div>
                </div>
                <div className="farmerDashboardComponentLegendVector">
                  <div className="farmerDashboardComponentLegendChild1" />
                </div>
              </div>
              <div className="farmerDashboardComponentLegendBox">
                <div className="farmerDashboardComponentLegendBoxTitle">Retail</div>
                <div className="farmerDashboardComponentLegendBoxWrapper">
                  <div className="farmerDashboardComponentLegendSubTitle">Php 7,340</div>
                </div>
                <div className="farmerDashboardComponentLegendVector">
                  <div className="farmerDashboardComponentLegendChild2" />
                </div>
              </div>
              <div className="farmerDashboardComponentLegendBox">
                <div className="farmerDashboardComponentLegendBoxTitle">Revenue</div>
                <div className="farmerDashboardComponentLegendBoxWrapper">
                  <div className="farmerDashboardComponentLegendSubTitle">Php 23,345</div>
                </div>
                <div className="farmerDashboardComponentLegendVector">
                  <div className="farmerDashboardComponentLegendChild3" />
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

export default FarmerDashboard;
