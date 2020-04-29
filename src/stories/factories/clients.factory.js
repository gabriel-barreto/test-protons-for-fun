import faker from 'faker';

export function single({
  company = faker.company.companyName(),
  email = faker.internet.email(),
  id = faker.random.uuid(),
  name = faker.name.findName(),
  address = {},
} = {}) {
  return {
    company,
    email,
    id,
    name,
    address: {
      street: faker.address.streetAddress(),
      suite: faker.address.secondaryAddress(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      ...address,
    },
  };
}

export function list(seeds = 5) {
  return Array.from({ length: seeds }, single);
}

export default { single, list };
