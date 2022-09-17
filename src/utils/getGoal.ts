import { API_BASE_URL, MY_ID } from "./constants";
import fetch from "node-fetch";

export async function whatsMyGoal() {
  const res = await fetch(API_BASE_URL + `/map/${MY_ID}/goal`);
  const data: { goal: string[] } = await res.json();
  return data.goal;
}
