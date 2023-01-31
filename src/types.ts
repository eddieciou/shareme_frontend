export type TUser = {
  _id: string;
  _type: string;
  userName: string;
  image: string;
};

export type TPin = {
  destination: string;
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
