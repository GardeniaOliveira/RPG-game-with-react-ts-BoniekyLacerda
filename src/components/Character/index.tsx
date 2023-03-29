import * as C from "./styles";

type Props = {
  x: number;
  y: number;
};
export const Character = ({ x, y }: Props) => {
  //all quadrate has a size 30x30, so to move the position is only multiply by size
  const size = 30;
  return <C.Container size={size} left={x * size} top={y * size}></C.Container>;
};
