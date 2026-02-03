{
    // mapped types

const arrOfNumbers: number[] = [1,2,3]
// const arrOfStrings: string[] = ['1','2','3']


const arrOfStrings: string[] = arrOfNumbers.map((number) =>number.toString());

console.log(arrOfStrings)

type AreaNumber = {
    height:number;
    width:number;
}
type ArreaString<T> = {
    [key in  keyof T]: T[key                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ];
}
    //

    type Height = AreaNumber ["height"] // lookup type

    const area1: ArreaString<{height:string; width:number}> = {
        height:"100",
        width:50
    }
}