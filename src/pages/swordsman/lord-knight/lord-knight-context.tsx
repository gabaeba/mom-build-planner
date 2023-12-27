import React, { createContext, useState } from "react";
import { Skill } from "../../../common/types";
import {
  DecodedValueMap,
  NumberParam,
  SetQuery,
  useQueryParams,
} from "use-query-params";

type SwordsmanSkills = {
  "1": typeof NumberParam;
  "2": typeof NumberParam;
  "3": typeof NumberParam;
  "4": typeof NumberParam;
  "5": typeof NumberParam;
  "6": typeof NumberParam;
  "7": typeof NumberParam;
  "8": typeof NumberParam;
  "9": typeof NumberParam;
  "10": typeof NumberParam;
  "11": typeof NumberParam;
  "12": typeof NumberParam;
};

export type KnightSkills = SwordsmanSkills & {
  "13": typeof NumberParam;
  "14": typeof NumberParam;
  "15": typeof NumberParam;
  "16": typeof NumberParam;
  "17": typeof NumberParam;
  "18": typeof NumberParam;
  "19": typeof NumberParam;
  "20": typeof NumberParam;
  "21": typeof NumberParam;
  "22": typeof NumberParam;
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
  const [query, setQuery] = useQueryParams<KnightSkills>({
    "1": NumberParam,
    "2": NumberParam,
    "3": NumberParam,
    "4": NumberParam,
    "5": NumberParam,
    "6": NumberParam,
    "7": NumberParam,
    "8": NumberParam,
    "9": NumberParam,
    "10": NumberParam,
    "11": NumberParam,
    "12": NumberParam,
    "13": NumberParam,
    "14": NumberParam,
    "15": NumberParam,
    "16": NumberParam,
    "17": NumberParam,
    "18": NumberParam,
    "19": NumberParam,
    "20": NumberParam,
    "21": NumberParam,
    "22": NumberParam,
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
