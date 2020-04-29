import faker from 'faker';

function single({
  id = faker.random.uuid(),
  userId = faker.random.uuid(),
} = {}) {
  const bodyLength = faker.random.number({ min: 1, max: 3 });
  const titleWords = faker.random.number({ min: 1, max: 5 });
  return {
    id,
    userId,
    title: faker.lorem.words(titleWords),
    body: faker.lorem.paragraphs(bodyLength),
  };
}

function list(seeds = 5) {
  return Array.from({ length: seeds }, single);
}

export default { single, list };
