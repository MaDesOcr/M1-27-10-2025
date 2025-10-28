export default async function getPersons(){
    
    const data = 
        await fetch("https://dummyjson.com/users",
            {method : "GET"}
        ).then((result)=>result.json())
    
    const personnages = data.users.map((
        {id, firstName, lastName, image} : 
            {id: number, firstName : string, lastName : string, image: string}
    )=>({
        id,
        firstName,
        lastName,
        image}))
        return personnages;
}


export async function getPersonDetails(id : number){
    
    const data = 
        await fetch(`https://dummyjson.com/users/${id}`,
            {method : "GET"}
        ).then((result)=>result.json())
    
    const perso = {id : data.id,
        firstName : data.firstName,
        lastName : data.lastName,
        image : data.image};
        
        return perso;
}