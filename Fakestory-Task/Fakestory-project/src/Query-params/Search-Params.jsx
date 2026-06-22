import { useSearchParams } from "react-router";

const SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const color = searchParams.get("color") || "black";
  const bgColor = searchParams.get("bgColor") || "white";

  console.log("Query: ", searchParams.get("q"));
  return (
    <div style={{ backgroundColor: bgColor, color }}>
      <div className="form-element">
        <input
          type="search"
          placeholder="Search here"
          value={query}
          onChange={(e) => {
  setSearchParams({
    q: e.target.value,
    color,
    bgColor,
  });
}}

        />
      </div>
      <section>
        <h1>Showing Results for: {query}</h1>
      </section>
    </div>
  );
};

export default SearchParams;