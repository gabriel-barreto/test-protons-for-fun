import faker from 'faker';

const imgProvider = 'https://picsum.photos';

function photos() {
  const randomId = faker.random.number({ min: 1, max: 64 });
  return {
    thumbnailUrl: `${imgProvider}/id/10${randomId}/256/200`,
    url: `${imgProvider}/id/10${randomId}/1280/720`,
  };
}

function single({
  id = faker.random.uuid(),
  title = faker.lorem.words(faker.random.number({ min: 1, max: 6 })),
} = {}) {
  return { id, title, ...photos() };
}

function list(seeds = 5) {
  return Array.from({ length: seeds }, single);
}

export default { single, list };
