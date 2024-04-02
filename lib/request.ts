import QueryString from "qs";

// const BASE_REQUEST_URL = "https://nest-api-service.vercel.app";
const BASE_REQUEST_URL = "http://127.0.0.1:4000";

export const request = async (
  url: string,
  options?: RequestInit & Partial<Pick<Props, "searchParams"> & { data: any }>
) => {
  const _options = options || {};
  let reqUrl = BASE_REQUEST_URL + url;
  if (_options?.searchParams) {
    const query = QueryString.stringify(_options.searchParams, {
      addQueryPrefix: true,
    });
    reqUrl += query;
  }
  _options.headers = new Headers({
    "content-type": "application/json; charset=utf-8",
  });
  if (_options.method === "POST") {
    _options.body = JSON.stringify(_options.data);
  }
  console.log("request url", reqUrl);
  try {
    const { data, code } = await fetch(BASE_REQUEST_URL + url, _options).then(
      (res) => res.json()
    );
    console.log("data", data);
    if (code === 0) {
      return data;
    }
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
