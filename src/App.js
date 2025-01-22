import logo from "./logo.svg";
import "./App.css";
import { TopBanner } from "./components/TopBanner/TopBanner";
import { PicSection } from "./components/PicSection/PicSection";
import { Table } from "./components/Table/Table";

function App() {
  return (
    <div>
      <TopBanner />
      <PicSection />
      <Table />
    </div>
  );
}

export default App;
