import { createResource, For, Show } from "solid-js";
import { repositoryAdapter } from "../../adapter/RepositoryAdapter";
import type { Repository } from "../../model/Repository";
import { RepoCard } from "./RepoCard";

import './GitRepositoriyList.css';
import { Loader } from "./Loader";

interface Props {
  gitUser: string
}

export const GitRepositoryList = (props: Props) => {
    const [ repositories ] = createResource<Array<Repository>>(
      async () => fetch(`https://api.github.com/users/${ props.gitUser }/repos`)
      .then(res => res.json())
      .then(data => repositoryAdapter(data))
    );

    return (
        <section class="container-repositories">{
          <Show when={ !repositories.loading } fallback={ <Loader /> }>
            <For each={ repositories() } >
              {(repo) => <RepoCard {...repo} />}
            </For>
          </Show>
        }</section>
    );
};

//Similar a como se haria en react
  // const [ getRepositories, setRepositories ] = createSignal<Array<Repository>>([]);

  // fetch(`https://api.github.com/users/${ props.gitUser }/repos`)
  //   .then(res => res.json())
  //   .then((data: Array<Repository>) => {
  //     setRepositories(repositoryAdapter(data))
  //   })