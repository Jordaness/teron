import { Light } from './light';
import { Switch } from '../Interfaces/switch';

export class FlashLight extends Light implements Switch
{
    /**
     Creates a flashlight and distinguishes its type from a light
     */
    constructor(name?: string) {
        super(name ? name : `fl${1}`);
        console.log("I'm really a flashlight though");
    }

    /**
     Turns the FlashLight on
     */
    On(): void {
        console.log("The flashlight is turned on");
    }

    /**
     Turns the Flashlight off
     */
    Off(): void {
        console.log("The flashlight is turned off");
    }

    /**
     Turns on the flashlight's high beams
     */
    HiBeam(): void {
        console.log("The high beams are activated!");
    }
}