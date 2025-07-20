import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "Jihn Wick", release_date: 2024 },
    { id: 1, title: "Jihn", release_date: 2024 },
    { id: 1, title: "Wick", release_date: 2024 },
    { id: 1, title: "JihnWick", release_date: 2024 },
  ];

const handleSearch = () => {

}

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search" className="search-input" />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home
