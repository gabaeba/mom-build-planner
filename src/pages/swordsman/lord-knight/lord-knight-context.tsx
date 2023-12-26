import React, { createContext, useState } from "react";
import { Skill } from "../../../common/types";

interface ContextProvider {
  isHovered:
    | {
        skill: Skill;
        level: number;
      }[]
    | undefined;
  setIsHovered: React.Dispatch<
    React.SetStateAction<
      | {
          skill: Skill;
          level: number;
        }[]
      | undefined
    >
  >;
}

export const LordKnightContext = createContext({} as ContextProvider);

export function LordKnightProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState<Skill["preRequisites"]>();

  return (
    <LordKnightContext.Provider
      value={{
        isHovered,
        setIsHovered,
      }}
    >
      {children}
    </LordKnightContext.Provider>
  );
}
