import type { Repository } from "../model/Repository";

export const repositoryAdapter = (repos: Array<Repository>) => {
    return repos.map(repo => ({
        ...repo,
        contents_url: repo.contents_url.replace('{+path}', 'README.md'),
        language: `image-languages/${repo.language.toLowerCase()}.svg`
    }))
};