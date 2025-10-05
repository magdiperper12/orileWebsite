import BaseUrl from "./BaseUrl";

const GetData = async (url: string, params: any) => {
  const res = await BaseUrl.get(url,params);
  return res.data;
};

export default GetData;
