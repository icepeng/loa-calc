export interface Enemy {
  armor: number;
  reduction: number;
}

export function getReductionRate(enemy: Enemy, armor_ignore: number): number {
  const armor = (enemy.armor * (100 - armor_ignore)) / 100;
  return (1 - armor / (armor + 6500)) * (1 - enemy.reduction / 100);
}
