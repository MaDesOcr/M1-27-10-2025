export default async function getPersons(){
    
    const data = 
        await fetch("https://dummyjson.com/users",
            {method : "GET"}
        ).then((result)=>result.json())
    
    const personnages = data.users.map((
        {firstName, lastName, image} : 
            {firstName : string, lastName : string, image: string}
    )=>({
        firstName,
        lastName,
        image}))
        return personnages;
}