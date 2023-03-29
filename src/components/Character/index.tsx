import * as C from "./styles";
import { CharacterSides } from "../../types/CharacterSides";

type Props = {
  x: number;
  y: number;
  side: CharacterSides;
};
export const Character = ({ x, y, side }: Props) => {
  //all quadrate has a size 30x30, so to move the position is only multiply by size
  const size = 30;
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90,
  };
  return (
    <C.Container
      size={size}
      left={x * size}
      top={y * size}
      sidePos={sides[side] ?? 0}
    ></C.Container>
  );
};
