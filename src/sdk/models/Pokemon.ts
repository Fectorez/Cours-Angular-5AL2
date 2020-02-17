export default class Pokemon {

    constructor (
        public name: string,
        public speed: number
    )
    {}

    public attacksBefore(other: Pokemon): boolean {
        return this.speed >= other.speed
    }
}
