// interface - generic

interface Developer<T,X=null> {
    name: string;
    computer:{
        brand:string;
        model:string;
        releaseYear:number
    }
    smartWatch:T;
    bike?:X;
}
  type EmilabWatch ={
brand:string, model:string, display:string
  }
const poorDeveloper: Developer<EmilabWatch> = {
    name: "Tarikul",
    computer:{
        brand:"Asus",
        model:"X-2254R",
        releaseYear:2023
    },
    smartWatch: {
brand:"Emllao",
model:"kw66",
display:"OLED"
    }
}
type AppleWatch ={brand:string, model:string,heartTrack:boolean, sleepTrack:boolean

}
type YamahaBike ={
    brand:string,
    model:string,
    color:string
}
const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rich Tarikul",
    computer:{
        brand:"hp",
        model:"X-2254R",
        releaseYear:2013
    },
    smartWatch: {
brand:"Apple",
model:"kw66",
heartTrack: true,
sleepTrack: true,
    },
    bike:{
        brand:'Yamaha',
        model:'123drd',
        color: 'blue'
    }
}