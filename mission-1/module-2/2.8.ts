{
    type ToDo={
        id:number;
        userId:number;
        title:string;
        completed:boolean;
    }
const getTodo = async(): Promise<ToDo> =>{
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')

const data = await response.json()
// console.log(data)
return data
}
getTodo()

    // Promise
type Something = {
    something:string
}

    // simulate
    const createpromise = (): Promise<Something> =>{
        return new Promise<Something>((resolve, reject) =>{
            const data: Something = {something:"something"}
            if(data){
                resolve(data)
            }else{
                reject('Failed to laod data')
            }
        })
    }

    //calling create promise function

    const show = async():Promise<Something> =>{
        const data:Something = await createpromise();
        // console.log(data)
        return data
    }

    show()
}
