
// spread operator
// rest operator
// distructing operator

{


    const line1:string[] = ['sakim', 'tonmoy', 'shonan'];
    const line2:string[] = ['limon', 'abdur', 'sohag'];

const newLinke:string[] =[...line1, ...line2]
line1.push(...line2)


const roomLeft = {
    leftRoomRight:'tarikul',
    leftRoomLeft:'abdur'

}
const dyning={
    dyningRight:'mona',
    dyningLeft:'bro'

}

const roomFront ={
    
}

const totalMemberes = {...roomFront, ...roomLeft, dyning}



// rest operator

const myfriendsGratting = (...friends:string[]) =>{
friends.forEach(element => {
    console.log(`hey, you are welcome ${element}`)
});
}

myfriendsGratting('sakib', 'sunny', 'sami')




























}
