{

// nulable type // unknown types // never

const searchName =(value:string | null) =>{
    if(value) console.log('searching'); else console.log('not searching')
}

searchName(null)

// unknown typeof

const getSpeedInMeterPerSecond = (value:unknown) =>{
if( typeof value ==='number'){
    const convertedNumber = (value * 1000)/3600;
    console.log(convertedNumber)
} else if( typeof value ==="string"){
    const [num, text] = value.split(" ")
    const convertedNumber = (parseFloat(num) * 1000)/3600;
    console.log(num, text)
    console.log(convertedNumber)
}
else{
    console.log('Wrong Input')
}
}
getSpeedInMeterPerSecond(`1000 perh-1`)
// getSpeedInMeterPerSecond(null)


// never
const throwError = (msg:string) :never =>{
    throw new Error(msg)    
    
}
throwError('muskil he no ason')
}
