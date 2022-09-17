/**
 * A function for uniting the API url and its params to a single string for GET requests
 * @param url The base url
 * @param params The params for the http request */
export function apiParamEndpoint<P extends Record<string, string>>(
  url: string,
  params: P
): string {
  const usp = new URLSearchParams(params);
  usp.sort();

  const qs = usp.toString();

  const endpoint = `${url}?${qs}`;
  return endpoint;
}
