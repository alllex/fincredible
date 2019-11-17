

export enum Crowdedness {
  Low,
  Mid,
  High
}

export const allCrowdedness = [
  Crowdedness.Low, Crowdedness.Mid, Crowdedness.High
];

export function getRandomCrowdedness(): Crowdedness {
  return allCrowdedness[Math.floor(Math.random() * allCrowdedness.length)];
}
