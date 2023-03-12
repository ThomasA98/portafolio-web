import { createSignal, For } from "solid-js";
import { repositoryAdapter } from "../../adapter/RepositoryAdapter";
import type { Repository } from "../../model/Repository";
import { RepoCard } from "./RepoCard";

import './GitRepositoriyList.css';

interface Props {
  gitUser: string
}

export const GitRepositoryList = (props: Props) => {

  const [ getRepositories, setRepositories ] = createSignal<Array<Repository>>([]);

  fetch(`https://api.github.com/users/${ props.gitUser }/repos`)
    .then(res => res.json())
    .then((data: Array<Repository>) => {
      setRepositories(repositoryAdapter(data))
    })

    return (
        <section class="container-repositories">{
          <For each={ getRepositories() } >
            {(repo) => <RepoCard {...repo} />}
          </For>
        }</section>
    );
};