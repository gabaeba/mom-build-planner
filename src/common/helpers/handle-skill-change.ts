import {
  DecodedValueMap,
  QueryParamConfigMap,
  SetQuery,
} from "use-query-params";
import { Skill } from "../types";
import { useCallback } from "react";
import { allSkills } from "./all-skills";

type AccumulatorType = {
  skill: Skill;
  level: number;
}[];

type LevelUpSkillProps<T extends QueryParamConfigMap> = {
  query: DecodedValueMap<T>;
  setQuery: SetQuery<T>;
};
export const useSkill = <T extends QueryParamConfigMap>({
  query,
  setQuery,
}: LevelUpSkillProps<T>) => {
  const levelUpSkill = useCallback(
    (sk: Skill, level?: number) => {
      if (sk.maxLevel === query[sk.name]) return;
      if (level) {
        setQuery(
          (prev) => ({
            ...prev,
            [sk.name]: level > (prev[sk.name] ?? 0) ? level : prev[sk.name],
          }),
          "push"
        );
      } else {
        setQuery(
          (prev) => ({
            ...prev,
            [sk.name]: prev[sk.name] ? prev[sk.name] + 1 : 1,
          }),
          "push"
        );
      }
      if (!sk?.preRequisites?.length) return;
      sk?.preRequisites?.forEach((e) => {
        if (query[e.skill.name] >= e.level) return;
        levelUpSkill(e.skill, e.level);
      });
    },
    [query, setQuery]
  );

  const downgradeSkill = useCallback(
    (sk: Skill, level?: number) => {
      if (level) {
        setQuery(
          (prev) => ({
            ...prev,
            [sk.name]: undefined,
          }),
          "push"
        );
      }
      setQuery(
        (prev) => ({
          ...prev,
          [sk.name]: prev[sk.name] > 1 ? prev[sk.name] - 1 : undefined,
        }),
        "push"
      );

      const preRequisiteSkills: AccumulatorType = allSkills.reduce(
        (acc, cur) => {
          const currentSkill = cur;
          const { preRequisites } = cur;
          const skills = preRequisites?.map((e) => e.skill.name);

          if (skills?.includes(sk.name)) {
            const found = preRequisites?.find((e) => e.skill.name === sk.name);
            return [...acc, { skill: currentSkill, level: found?.level ?? 0 }];
          }
          return acc ?? [];
        },
        [] as AccumulatorType
      );

      if (!preRequisiteSkills.length) return;
      preRequisiteSkills.forEach((e) => {
        if (e.level > query[sk.name] - 1) {
          downgradeSkill(e.skill, e.level);
        }
      });
    },
    [query, setQuery]
  );

  return [levelUpSkill, downgradeSkill];
};
