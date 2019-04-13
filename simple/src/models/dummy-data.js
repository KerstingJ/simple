export const clients = [
    {
        id: 1,
        name: "john doe",
        thumbnailUrl: '/imgs/defaultThumb.jpg',
        email: "jd@mail.com",
        phone: "1234567",
        notes: "No Notes",
        projects: []
    },
    {
        id: 2,
        name: "jane does",
        thumbnailUrl: '/imgs/defaultThumb.jpg',
        email: "janed@mail.com",
        phone: "4321567",
        notes: "No Notes",
        projects: []
    },
    {
        id: 3,
        name: "danny jones",
        thumbnailUrl: '/imgs/defaultThumb.jpg',
        email: "danjs@mail.com",
        phone: "1543267",
        notes: "No Notes",
        projects: []
    }

]

export const projects = [
    
]

export function getClientById(id){
    console.log("inside getClient", id)
    return {
        ...clients.find(client => client.id == id),
        //projects: projects.filter(p => p.clientId = id)
    }
}