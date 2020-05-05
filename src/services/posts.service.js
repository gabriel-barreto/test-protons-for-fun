import $http from './http.service';

const slug = '/posts';

async function fetchAllByUser(userId) {
  try {
    const { data } = await $http.get(`${slug}?userId=${userId}`);
    return data;
  } catch (ex) {
    // TODO show error message
    return [];
  }
}

export default { fetchAllByUser };
