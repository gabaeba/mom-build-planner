export const checkHowManySkillPoints = (
  skills: string[],
  urlParams: URLSearchParams,
  setSkillPoints: React.Dispatch<React.SetStateAction<number>>
) => {
  let count = 0;
  for (const [key, value] of urlParams.entries()) {
    if (skills.includes(key)) {
      count += Number(value);
    }
  }
  setSkillPoints(count);
};
