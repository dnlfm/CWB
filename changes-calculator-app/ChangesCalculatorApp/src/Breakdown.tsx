import { Denomination } from './Denomination';

export class Breakdown {
  private denominations: Denomination[];

  constructor(denominations: Denomination[]) {
    this.denominations = denominations.sort((a, b) => b.value - a.value); // ensure it's sorted in descending order
  }

  public describeBreakdown(changeAmount: number): string {
    let remaining = changeAmount;
    const breakdown: string[] = [];
    for (const denomination of this.denominations) {
      const count = Math.floor(remaining / denomination.value);
      if (count > 0) {
        breakdown.push(`${denomination.name} x ${count}`);
        remaining = Number((remaining - count * denomination.value).toFixed(2));
      }
      if (remaining == 0) {
        break;
      }
    }
    return breakdown.join(', ');
  }
}