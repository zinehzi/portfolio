import { repoType } from "../types/repos";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL;
const GITHUB_USER = process.env.NEXT_PUBLIC_GITHUB_USER;

async function getRepos(): Promise<repoType[]> {
  const response = await fetch(`${GITHUB_URL}/${GITHUB_USER}/repos`, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();
  return data as repoType[];
}

export default getRepos;
