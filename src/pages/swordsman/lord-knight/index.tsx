import { LordKnight } from "..";
import { LordKnightProvider } from "./lord-knight-context";

export default function LordKnightComponent() {
  return (
    <LordKnightProvider>
      <LordKnight />
    </LordKnightProvider>
  );
}
