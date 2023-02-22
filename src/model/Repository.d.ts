export interface Repository {
    id: number
    name: string
    full_name: string
    html_url: string
    description: string
    languages_url: string
    contents_url: string // cambiar {+path} por README.md
    language: string
}

/* [
    {
      "id": 604857166,
      "name": "text-repo",
      "full_name": "ThomasA98/text-repo",
      "html_url": "https://github.com/Tamiel/text-repo",
      "description": "probando la api de github",
      "languages_url": "https://api.github.com/repos/Tamiel/text-repo/languages",
      "contents_url": "https://api.github.com/repos/Tamiel/text-repo/contents/{+path}", // hacer macth a {+path}
      "created_at": "2023-02-21T23:48:43Z",
      "updated_at": "2023-02-21T23:48:43Z",
      "pushed_at": "2023-02-21T23:48:44Z",
      "language": null,
    }
  ] */