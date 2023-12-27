import {
  DecodedValueMap,
  QueryParamConfigMap,
  SetQuery,
} from "use-query-params";
import { Skill } from "../types";
import { useCallback } from "react";

type LevelUpSkillProps<T extends QueryParamConfigMap> = {
  skill: Skill;
  query: DecodedValueMap<T>;
  setQuery: SetQuery<T>;
};
export const useSkill = <T extends QueryParamConfigMap>({
  skill,
  query,
  setQuery,
}: LevelUpSkillProps<T>) => {
  const levelUpSkill = useCallback(
    (sk: Skill, level?: number) => {
      if (sk.maxLevel === query[sk.skillId]) return;
      if (level) {
        setQuery(
          (prev) => ({
            ...prev,
            [sk.skillId]: level,
          }),
          "push"
        );
      } else {
        setQuery(
          (prev) => ({
            ...prev,
            [sk.skillId]: prev[sk.skillId] ? prev[sk.skillId] + 1 : 1,
          }),
          "push"
        );
      }
      if (!sk.preRequisites.length) return;
      sk?.preRequisites?.forEach((e) => {
        if (query[e.skill.skillId] >= e.level) return;
        levelUpSkill(e.skill, e.level);
      });
    },
    [query, setQuery]
  );

  const downgradeSkill = useCallback(() => {
    setQuery(
      (prev) => ({
        ...prev,
        [skill.skillId]:
          prev[skill.skillId] > 1 ? prev[skill.skillId] - 1 : undefined,
      }),
      "push"
    );

    skill.dependedBy?.forEach((dependencie) => {
      if (query[skill.skillId] - 1 < dependencie.level) {
        setQuery(
          (prev) => ({
            ...prev,
            [dependencie.skill]: undefined,
          }),
          "push"
        );
      }
    });
  }, [skill, query, setQuery]);

  return [levelUpSkill, downgradeSkill];
};
