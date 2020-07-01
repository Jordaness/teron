import { Light } from './light';
import { Switch } from '../Interfaces/switch';
import { Laser } from './laser';
import { LaserInteraction } from '../Interfaces/laserinteraction';

export class FlashLight extends Light implements Switch, LaserInteraction
{
    private operational: boolean = false;
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
    private On(): void {
        console.log("The flashlight is turned on");
        this.operational = true;
    }

    /**
     Turns the Flashlight off
     */
    private Off(): void {
        console.log("The flashlight is turned off");
        this.operational = false;
    }

    /**
     Turns on the flashlight's high beams
     */
    public HiBeam(): void {
        console.log("The high beams are activated!");
    }
    /**
     method for flashlight
     */
    TurnOnLaser(l: Laser): void {
        console.log(`Turning on the ${l.name} laser from the flashlight!`);
        l.OnOffButton();
    }

    OnOffButton():void {
        this.operational == true ? this.Off() : this.On()
    }
}