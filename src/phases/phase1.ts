import fetch from "node-fetch";
import {
  apiParamEndpoint,
  APIParams,
  APIResponse,
  API_BASE_URL,
  MY_ID,
} from "../utils";

export default async function phase1(): Promise<APIResponse> {
  const params: APIParams = {
    candidateId: MY_ID,
    row: "3",
    column: "3",
  };
  const res = await fetch(
    apiParamEndpoint(API_BASE_URL + "/polyanets", params),
    {
      method: "POST",
    }
  );

  const data: APIResponse = await res.json();
  return data;
}
