import { useEffect } from "react";
import * as C from "./App.styles";
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";

const App = () => {
  //the function useCharacter loads all inside  useCharacter.ts file
  const char = useCharacter();

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} />
      </C.Map>
      ;
    </C.Container>
  );
};

export default App;
