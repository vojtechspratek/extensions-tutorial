namespace screenMagic{
    /*
        Address LEDs lineraly row first
     */
    //% blockId=screenmagicplotat
    //% block="plit at index"
    //% index.min=0 index.max=25
    export function plotAt(index: number): void{
        index |= 0
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot(x, y)
    }

}