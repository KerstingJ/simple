export const formatProject = (input, hasContractor = false) => {
  let output = {
    id: input.uid,
    contractor_id: hasContractor ? null : input.contractor.uid,
    contractor: hasContractor ? null : input.contractor.name,
    client: input.client,
    location: input.location,
    images: input.images,
    tags: input.tags,
    details: input.details,
    votes: 5
  };

  if (input.review) {
    output.rating = input.review.rating;
    output.review = input.review.review;
  }

  return output;
};

export const formatContractor = input => {
  let output = {
    id: input.uid,
    name: input.name,
    image: "../imgs/profile.jpeg",
    phone: processPhone(input.phone),
    email: input.email,
    address: input.address,
    projects: input.projects
      ? input.projects.map(p => formatProject(p, true))
      : null
  };

  return output;
};

function processPhone(phone) {
  phone = phone + "";
  let phoneParts = undefined;

  try {
    phoneParts = [
      phone.slice(0, 3),
      phone.slice(3, 6),
      phone.slice(6, phone.length)
    ];
  } catch (e) {
    console.log(e);
    phoneParts = ["000", "000", "0000"];
  }

  return `(${phoneParts[0]}) ${phoneParts[1]}-${phoneParts[2]}`;
}
