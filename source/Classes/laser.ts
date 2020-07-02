import {Switch} from '../Interfaces/switch';
import { LightGun } from './lightgun';

export class Laser implements Switch
{
    name: string;
    private lightgun?: LightGun;
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
        console.log(`${this.name} is no longer operational.`);
        this.operational = false;
    }

    /**
    * A switch to turn the laser on and off
    */
    OnOffButton():void {
        this.operational == true ? this.Off() : this.On()
    }

    /**
    * Will return true if the laser is currently attached to a gun
    */
    AttachedToGun(): boolean {
        return this.lightgun !== undefined;
    }

    /**
    * Will return true if the laser is currently operational
    */
    CurrentlyOperational(): boolean{
        return this.operational;
    }

    /**
    * Will return a laser gun
    */
    private static ConvertLaserToLG(name: string, laser: Laser): LightGun {
        
        if(!laser.AttachedToGun()){
            laser.lightgun = LightGun.AttachLaserToLG(name, laser);
        }

        return <LightGun>laser.lightgun;
    }

    /**
    * Uses the laser to make a weapon
    */
    MakeWeapon(name: string): void {
        if(!this.AttachedToGun()) {
           this.lightgun = Laser.ConvertLaserToLG(name, this);
        }
    }

    Fire():void {
        if(this.lightgun)
            this.lightgun.PewPew();
        else
            console.log("This laser is not a weapon.");
    }
}
