enum Sex {
  Male = 1,
  Female = 2
};

export class WalkingCalorieCalculator {
  constructor(
    public unit: string,
    public age: number,
    public height: number,
    public sex: string,
    public weight: number,
    public duration: number,
    public walkingSpeed: number,
    public speed: number
  ){}
}
