import { useRecomendation } from "./modules/recomendation/providers/useRecomendation";

function App() {
  const { categories, setCategorie } = useRecomendation();
  if (categories.length < 1) {
    return <h1>Loadding...</h1>;
  }
  return (
    <>
<input onChange={(event)=>setCategorie(event.target.value)}/>

      {categories.map((category) => (
        <div key={category.name}>
          <h1>{category.name}</h1>
        </div>

      ))}
    </>
  );
}

export default App;
