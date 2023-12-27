export const getSkillId = (str: string) => {
  return skillIds?.find((e) => e.skill === str)?.id ?? "";
};

export const skillIds = [
  { skill: "Bash", id: "1", class: "Swordsman" },
  { skill: "Provoke", id: "2", class: "Swordsman" },
  { skill: "Endure", id: "3", class: "Swordsman" },
  { skill: "Increase HP Recovery", id: "4", class: "Swordsman" },
  { skill: "Magnum Break", id: "5", class: "Swordsman" },
  { skill: "Sword Mastery", id: "6", class: "Swordsman" },
  { skill: "Spear Mastery", id: "7", class: "Swordsman" },
  { skill: "Iron Defense", id: "8", class: "Swordsman" },
  { skill: "One-Hand Quicken", id: "9", class: "Swordsman" },
  { skill: "Auto Berserk", id: "10", class: "Swordsman" },
  { skill: "Fatal Blow", id: "11", class: "Swordsman" },
  { skill: "Hp Recovery While Moving", id: "12", class: "Swordsman" },
  { skill: "Twohand Quicken", id: "13", class: "Knight" },
  { skill: "Auto Counter", id: "14", class: "Knight" },
  { skill: "Peco Peco Ride", id: "15", class: "Knight" },
  { skill: "Movement Mastery", id: "16", class: "Knight" },
  { skill: "Pierce", id: "17", class: "Knight" },
  { skill: "Spear Stab", id: "18", class: "Knight" },
  { skill: "Spear Boomerang", id: "19", class: "Knight" },
  { skill: "Bowling Bash", id: "20", class: "Knight" },
  { skill: "Brandish Spear", id: "21", class: "Knight" },
  { skill: "Charge Attack", id: "22", class: "Knight" },
];
