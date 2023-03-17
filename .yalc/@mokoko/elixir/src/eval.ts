export class ThompsonSampler {
  private alpha: number[];
  private beta: number[];

  constructor(numArms: number) {
    this.alpha = Array(numArms).fill(1);
    this.beta = Array(numArms).fill(1);
  }

  // Choose an arm to pull based on current estimate of reward distribution
  chooseArm(): number {
    const samples = this.alpha.map((a, i) => this.sampleBeta(a, this.beta[i]));
    return samples.indexOf(Math.max(...samples));
  }

  // Update the estimated reward distribution for the chosen arm
  updateArm(armIndex: number, reward: number): void {
    this.alpha[armIndex] += reward;
    this.beta[armIndex] += 1 - reward;
  }

  // Sample from a beta distribution with given alpha and beta parameters
  private sampleBeta(alpha: number, beta: number): number {
    const gamma1 = this.sampleGamma(alpha);
    const gamma2 = this.sampleGamma(beta);
    return gamma1 / (gamma1 + gamma2);
  }

  // Sample from a gamma distribution with given shape parameter
  private sampleGamma(shape: number): number {
    let v1, v2, s;
    do {
      v1 = 2 * Math.random() - 1;
      v2 = 2 * Math.random() - 1;
      s = v1 * v1 + v2 * v2;
    } while (s >= 1 || s === 0);
    const multiplier = Math.sqrt((-2 * Math.log(s)) / s);
    return shape * v1 * multiplier;
  }
}
