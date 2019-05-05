export const projects = [
    {
        id: 1,
        contractor_id: 1,
        contractor: "Super Flooring Specialists",
        client: "Jane Doe",
        location: "Cityville, US",
        images: ["imgs/333.jpeg", "imgs/333_2.jpeg", "imgs/simpleColorScheme.jpeg"],
        tags: ["flooring", "remodel", "hardwood"],
        votes: 5,
        rating: 4,
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        id: 2,
        contractor_id: 1,
        contractor: "Super Flooring Specialists",
        client: "Jim Jameson",
        location: "Cityville, US",
        images: ["imgs/333.jpeg", "imgs/333_2.jpeg", "imgs/simpleColorScheme.jpeg"],
        tags: ["flooring", "remodel", "carpet"],
        votes: 5,
        rating: 5,
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        id: 3,
        contractor_id: 1,
        contractor: "Super Flooring Specialists",
        client: "Amir Amdatellib",
        location: "Cityville, US",
        images: ["imgs/333.jpeg", "imgs/333_2.jpeg", "imgs/simpleColorScheme.jpeg"],
        tags: ["flooring", "remodel", "tile"],
        votes: 13,
        rating: 5,
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        id: 4,
        contractor_id: 2,
        contractor: "Contractor Man",
        client: "Jessica Smith",
        location: "Cityville, US",
        images: ["imgs/333.jpeg", "imgs/333_2.jpeg", "imgs/simpleColorScheme.jpeg"],
        tags: ["Bathroom", "remodel", "Patio"],
        votes: 4,
        rating: 3,
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        id: 5,
        contractor_id: 2,
        contractor: "Contractor Man",
        client: "Yvonne Wright",
        location: "Cityville, US",
        images: ["imgs/333.jpeg", "imgs/333_2.jpeg", "imgs/simpleColorScheme.jpeg"],
        tags: ["Home Improvement", "remodel", "patio"],
        votes: 8,
        rating: 3,
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        id: 6,
        contractor_id: 3,
        contractor: "Billys Roofing",
        client: "Greg Johnson",
        location: "Cityville, US",
        images: ["imgs/333.jpeg", "imgs/333_2.jpeg", "imgs/simpleColorScheme.jpeg"],
        tags: ["flooring", "remodel", "hardwood"],
        votes: 6,
        rating: 5,
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    }
];

export const contractors = [
    {
        id: 1,
        name: "Super Flooring Specialists",
        image: "../imgs/profile.jpeg",
        phone: "(231) 743-1122",
        email: "contact@SFS.com",
        address: "142 Buildr Rd, Cityville, US 44231",
        projects: projects.filter(p => p.contractor_id === 1)
    },
    {
        id: 2,
        name: "Contractor Man",
        image: "../imgs/profile.jpeg",
        phone: "(231) 743-1122",
        email: "ContactAContractor@Man.com",
        address: "74322 Big Factory Ave, Cityville, US 44221",
        projects: projects.filter(p => p.contractor_id === 2)
    },
    {
        id: 3,
        name: "Billys Roofing",
        image: "../imgs/profile.jpeg",
        phone: "(231) 743-1122",
        email: "BillyDoesIt@Roofing.com",
        address: "2322 Main St, Cityville, US 44121",
        projects: projects.filter(p => p.contractor_id === 3)
    },

];