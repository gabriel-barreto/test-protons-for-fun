import faker from 'faker';

export function single({
  company = faker.company.companyName(),
  email = faker.internet.email(),
  id = faker.random.uuid(),
  name = faker.name.findName(),
} = {}) {
  console.log(faker);
  return { company, email, id, name };
}

export function list(seeds = 5) {
  return Array.from({ length: seeds }, single);
}

export default { single, list };
