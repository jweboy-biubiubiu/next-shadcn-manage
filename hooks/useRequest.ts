import useSWR from "swr";

const BASE_REQUEST_URL = "https://nest-api-service-gb87e12dn-jweboy.vercel.app";

export const request = async (url: string, params?: any) => {
  try {
    const { data } = await fetch(BASE_REQUEST_URL + url).then((res) =>
      res.json()
    );
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
