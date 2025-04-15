import './App.css';
import Navbar from './Components/Navbar';
import HospitalHeader from './Components/HospitalCardHeader';
import StatsCards from './Components/StatsSection';
import NeedAttentionTable from './Components/TableAssistance';
import Sidebar from './Components/Sidebar';
import Left from './Components/PeiChart_warranty';
import Right from './Components/PeiChart_calibaration';
import UserAssitanceCards from './Components/UserAssistance';

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <HospitalHeader />
        <StatsCards />
        <UserAssitanceCards />
        <Left />
        <Right />
        <NeedAttentionTable />
      </div>
    </div>
  );
}

export default App;
