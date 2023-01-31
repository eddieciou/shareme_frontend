export const userQuery = (userId: string) => `*[_type == "user" && _id == '${userId}']`;

export const searchQuery = (searchTerm: string) =>
  `*[_type == "pin" && tittle match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
  image {
    asset -> {
        url
    }
  },
  _id,
  destination,
  postedBy -> {
    _id,
    userName,
    image
  },
  save[] {
    _key,
    postedBy -> {
        _id,
        userName,
        image
    },
  },
  }`;

export const feedQuery = `*[_type == "pin"] | order(_createAt desc){
  image {
    asset -> {
        url
    }
  },
  _id,
  destination,
  postedBy -> {
    _id,
    userName,
    image
  },
  save[] {
    _key,
    postedBy -> {
        _id,
        userName,
        image
    },
  },
}`;
