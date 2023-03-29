import * as C from "./App.styles";
import { Character } from "./components/Character";

const App = () => {
  return (
    <C.Container>
      <C.Map>
        <Character></Character>
      </C.Map>
      ;
    </C.Container>
  );
};

export default App;
