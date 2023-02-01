export type TUser = {
  _id: string;
  _type: string;
  userName: string;
  image: string;
};

export type TComment = {
  _id: string;
  comment: string;
  postedBy: {
    image: string;
    userName: string;
    _id: string;
  };
};

export type TPin = {
  title: string;
  about: string;
  destination: string;
  comments: Array<TComment>;
  category: string;
  image: {
    asset: {
      url: string;
    };
  };
  postedBy: {
    image: string;
    userName: string;
    _id: string;
  };
  save: Array<{
    _key: string;
    postedBy: {
      image: string;
      userName: string;
      _id: string;
    };
  }>;
  _id: string;
};
