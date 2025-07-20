import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
    <div>
      <MovieCard movie={{ title: "Film", release_date: 2024 }} />
      <MovieCard movie={{ title: "Another film", release_date: 2024 }} />
    </div>
    </>
  );
}

export default App;
