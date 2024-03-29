import useSWR from "swr";

const BASE_REQUEST_URL = "https://nest-api-service-gb87e12dn-jweboy.vercel.app";

export const request = async (url: string, params?: any) => {
  try {
    const { data, code } = await fetch(BASE_REQUEST_URL + url).then((res) =>
      res.json()
    );
    if (code === 0) {
      return data;
    }
    console.log("data", data);
    return null;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
