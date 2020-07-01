import {Switch} from '../Interfaces/switch';

export class Laser implements Switch
{
    name: string;
    private operational: boolean = false;
    /**
     * Creates a laser
     */
    constructor(name:string) {
        this.name = name;
    }

    /**
    * Turns on the laser
    */
    private On(): void {
        console.log(`${this.name} is now operational.`);
        this.operational = true;
    }

    /**
    * Turns off the laser
    */
   private Off(): void {
        console.log("The laser is no longer operational.");
        this.operational = false;
    }

    /**
    * Pew Pew Pew
    */
    PewPew():void {
        console.log("The laser goes pew pew!");
    }

    OnOffButton():void {
        this.operational == true ? this.Off() : this.On()
    }
}
