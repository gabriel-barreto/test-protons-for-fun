import $http from './http.service';

const slug = '/photos';

async function fetchAllByUser(userId) {
  try {
    const { data } = await $http.get(`${slug}?albumId=${userId}`);
    return data;
  } catch (ex) {
    // TODO show error message
    return [];
  }
}

export default { fetchAllByUser };
