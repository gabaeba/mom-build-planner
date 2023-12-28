import React, { createContext, useState } from "react";
import { Skill } from "../../../common/types";
import {
  DecodedValueMap,
  NumberParam,
  SetQuery,
  useQueryParams,
} from "use-query-params";

type SwordsmanSkills = {
  Bash: typeof NumberParam;
  Provoke: typeof NumberParam;
  Endure: typeof NumberParam;
  "Increase HP Recovery": typeof NumberParam;
  "Magnum Break": typeof NumberParam;
  "Sword Mastery": typeof NumberParam;
  "Spear Mastery": typeof NumberParam;
  "Iron Defense": typeof NumberParam;
  "One-Hand Quicken": typeof NumberParam;
  "Auto Berserk": typeof NumberParam;
  "Fatal Blow": typeof NumberParam;
  "Hp Recovery While Moving": typeof NumberParam;
};

export type KnightSkills = SwordsmanSkills & {
  "Twohand Quicken": typeof NumberParam;
  "Auto Counter": typeof NumberParam;
  "Peco Peco Ride": typeof NumberParam;
  "Movement Mastery": typeof NumberParam;
  Pierce: typeof NumberParam;
  "Spear Stab": typeof NumberParam;
  "Spear Boomerang": typeof NumberParam;
  "Bowling Bash": typeof NumberParam;
  "Brandish Spear": typeof NumberParam;
  "Charge Attack": typeof NumberParam;
};

export type LordKnightSkills = KnightSkills & {
  "Aerial Assault": typeof NumberParam;
  "Aura Blade": typeof NumberParam;
  Berserk: typeof NumberParam;
  "Clashing Spiral": typeof NumberParam;
  Concentration: typeof NumberParam;
  "Defensive Stance": typeof NumberParam;
  "Head Crush": typeof NumberParam;
  "Ignition Break": typeof NumberParam;
  "Joint Beat": typeof NumberParam;
  "Majestic Sword": typeof NumberParam;
  Parry: typeof NumberParam;
  "Phantom Thrust": typeof NumberParam;
  "Tension Relax": typeof NumberParam;
  Vendetta: typeof NumberParam;
};

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
  query: DecodedValueMap<KnightSkills>;
  setQuery: SetQuery<KnightSkills>;
}

export const LordKnightContext = createContext({} as ContextProvider);

export function LordKnightProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState<Skill["preRequisites"]>();
  const [query, setQuery] = useQueryParams<LordKnightSkills>({
    Bash: NumberParam,
    Provoke: NumberParam,
    Endure: NumberParam,
    "Increase HP Recovery": NumberParam,
    "Magnum Break": NumberParam,
    "Sword Mastery": NumberParam,
    "Spear Mastery": NumberParam,
    "Iron Defense": NumberParam,
    "One-Hand Quicken": NumberParam,
    "Auto Berserk": NumberParam,
    "Fatal Blow": NumberParam,
    "Hp Recovery While Moving": NumberParam,
    "Twohand Quicken": NumberParam,
    "Auto Counter": NumberParam,
    "Peco Peco Ride": NumberParam,
    "Movement Mastery": NumberParam,
    Pierce: NumberParam,
    "Spear Stab": NumberParam,
    "Spear Boomerang": NumberParam,
    "Bowling Bash": NumberParam,
    "Brandish Spear": NumberParam,
    "Charge Attack": NumberParam,
    "Aerial Assault": NumberParam,
    "Aura Blade": NumberParam,
    Berserk: NumberParam,
    "Clashing Spiral": NumberParam,
    Concentration: NumberParam,
    "Defensive Stance": NumberParam,
    "Head Crush": NumberParam,
    "Ignition Break": NumberParam,
    "Joint Beat": NumberParam,
    "Majestic Sword": NumberParam,
    Parry: NumberParam,
    "Phantom Thrust": NumberParam,
    "Tension Relax": NumberParam,
    Vendetta: NumberParam,
  });

  return (
    <LordKnightContext.Provider
      value={{
        isHovered,
        setIsHovered,
        query,
        setQuery,
      }}
    >
      {children}
    </LordKnightContext.Provider>
  );
}
