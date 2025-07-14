import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Header />
      <main className="container grid md:grid-cols[218px_1fr] gap-3.5rem">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4">{/* Main content goes here */}</div>
      </main>
    </>
  );
}

export default App;
