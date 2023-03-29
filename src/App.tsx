import { useEffect } from "react";
import * as C from "./App.styles";
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";

const App = () => {
  //the function useCharacter loads all inside  useCharacter.ts file
  const char = useCharacter("Gah");
  //duplicate char
  const char2 = useCharacter("Peter");

  useEffect(() => {
    window.addEventListener("keydown", handlekeyDown);
  }, []);

  const handlekeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        char.moveLeft();
        break;

      case "KeyW":
      case "ArrowUp":
        char.moveUp();
        break;

      case "KeyD":
      case "ArrowRight":
        char.moveRight();
        break;

      case "KeyS":
      case "ArrowDown":
        char.moveDown();
        break;
    }
  };
  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name} />

        {/* duplicate char */}
        <Character
          x={char2.x}
          y={char2.y}
          side={char2.side}
          name={char2.name}
        />
      </C.Map>
      {/* buttons to move char2 */}
      <C.Button onClick={() => char2.moveLeft()}>Left</C.Button>
      <C.Button onClick={() => char2.moveRight()}>Right</C.Button>
      <C.Button onClick={() => char2.moveUp()}>Up</C.Button>
      <C.Button onClick={() => char2.moveDown()}>Down</C.Button>
    </C.Container>
  );
};

export default App;
