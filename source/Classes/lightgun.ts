import {Laser} from './laser';

export class LightGun{
    
    private name: string;
    private laser: Laser;

    protected constructor(name: string, l: Laser) {
        this.name = name;
        this.laser = l;
    }

    /**
    * Pew Pew Pew
    */
   public PewPew():void {
        this.laser.CurrentlyOperational() ?
        console.log(`The ${this.name} fires the ${this.laser.name} laser and goes pew pew!`) :
        console.log(`WEAPON FAILURE!!!\nThe ${this.laser.name} laser is not operational!!!`)
   }

    /**
    * Attaches a laser to a LightGun
    */
   public static AttachLaserToLG(name: string, l: Laser): LightGun {
     if(!l.AttachedToGun())
        return new LightGun(name, l);
     else
        throw new Error("Trying to add one laser to two differnt light guns!!!")
   }
}