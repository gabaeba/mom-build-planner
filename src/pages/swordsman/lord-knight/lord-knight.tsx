import {
  autoBerserk,
  bash,
  endure,
  fatalBlow,
  hpRecoveryWhileMoving,
  increaseHpRecovery,
  ironDefense,
  magnumBreak,
  oneHandQuicken,
  provoke,
  spearMastery,
  swordMastery,
} from "../swordsman/skills";
import { SkillComponent } from "../../../common/skill";
import {
  autoCounter,
  brandishSpear,
  chargeAttack,
  movementMastery,
  pecoPecoRide,
  pierce,
  spearBoomerang,
  spearStab,
  twoHandQuicken,
} from "../knight/skills";

export const LordKnight = () => {
  return (
    <>
      <div>Swordsman</div>
      <div style={{ display: "flex" }}>
        <SkillComponent skill={swordMastery} />
        <SkillComponent skill={spearMastery} />
        <SkillComponent skill={oneHandQuicken} />
        <SkillComponent skill={increaseHpRecovery} />
        <SkillComponent skill={bash} />
        <SkillComponent skill={provoke} />
        <SkillComponent skill={ironDefense} />
      </div>
      <div style={{ display: "flex" }}>
        <SkillComponent skill={magnumBreak} />
        <SkillComponent skill={endure} />
        <SkillComponent skill={autoBerserk} />
        <SkillComponent skill={fatalBlow} />
        <SkillComponent skill={hpRecoveryWhileMoving} />
      </div>
      <div>KNIGHT</div>
      <div style={{ display: "flex" }}>
        <SkillComponent skill={twoHandQuicken} />
        <SkillComponent skill={autoCounter} />
        <SkillComponent skill={movementMastery} />
        <SkillComponent skill={brandishSpear} />
        <SkillComponent skill={pecoPecoRide} />
        <SkillComponent skill={pierce} />
        <SkillComponent skill={spearBoomerang} />
        <SkillComponent skill={spearStab} />
        <SkillComponent skill={chargeAttack} />
      </div>
    </>
  );
};
