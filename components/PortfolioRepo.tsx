"use client";
import { useEffect, useState } from "react";
import getRepos from "../actions/get-repos";
import { repoType } from "../types/repos";

function PortfolioRepo() {
  const [repos, setRepos] = useState<repoType[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await getRepos();
      setRepos(data);
    }
    getData();
  }, []);

  return (
    <>
      {repos?.map((repo) => (
        <li key={repo.id} className="flex items-center justify-between">
          <div className="flex flex-col">
            <span>
              <b>{repo.name}</b>
            </span>
            <a
              href={repo.html_url}
              target="_blank"
              className="text-[20px] font-light underline"
            >
              {repo.html_url}
            </a>
          </div>
          <div className="w-60 h-40 bg-gray-200"></div>
        </li>
      ))}
    </>
  );
}

export default PortfolioRepo;
