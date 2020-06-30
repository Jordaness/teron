import {Switch} from '../Interfaces/switch';
import { FlashLight } from './flashlight'

export class Laser implements Switch
{
    /**
     * Creates a laser
     */
    constructor() {

    }

    /**
    * Turns on the laser
    */
    On(): void {
        console.log("The laser is now operational.")
    }

    /**
    * Turns off the laser
    */
    Off(): void {
        console.log("The laser is no longer operational.");
    }

    /**
    * Pew Pew Pew
    */
    PewPew():void {
        console.log("The laser goes pew pew!");
    }

    flashes():void {
        FlashLight.flash();
    }
    
}