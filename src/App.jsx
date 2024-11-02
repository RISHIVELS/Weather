import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="max-w-full bg-gray-600  h-screen">
        <div className="max-w-[1280px] mx-auto h-screen flex items-center flex-col">
          <Header />
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default App;
