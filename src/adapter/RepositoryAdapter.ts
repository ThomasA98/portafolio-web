import type { Repository } from "../model/Repository";

// site: 'https://ThomasA98.github.io'
// base: '/portafolio-web'

export const repositoryAdapter = (repos: Array<Repository>) => {
    return repos.map(repo => ({
        ...repo,
        contents_url: repo.contents_url.replace('{+path}', 'README.md'),
        language: `https://ThomasA98.github.io/portafolio-web/image/${repo.language?.toLowerCase()}.svg`
    }))
};