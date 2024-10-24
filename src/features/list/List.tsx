import { Link } from "react-router-dom";
import useList from "./hooks/useList";
import { ListContainer, ElementItem } from "./styles/ListStyles";

const ListPage: React.FC = () => {
  const { loading, elements } = useList();

  return (
    <ListContainer>
      <button>
        <Link to="/">Home</Link>
      </button>
      <h2>Listado de Elementos</h2>
      {loading && <p>Cargando datos...</p>}
      {elements.map((element) => (
        <ElementItem key={element.id}>
          {/* <ElementImage src={element.avatar} alt={element.name} /> */}
          <span>{element.name}</span>
        </ElementItem>
      ))}
    </ListContainer>
  );
};

export default ListPage;
