import type { Component} from "solid-js";

import './RepoCard.css';

interface RepoCardProps {
    id: number
    name: string
    full_name: string
    html_url: string
    description: string
    languages_url: string
    contents_url: string
    language: string
}

export const RepoCard: Component<RepoCardProps> = (props) => {

    /* const [ getLanguage, setLanguage ] = createSignal({});

    fetch(props.languages_url)
        .then(res => res.json())
        .then(data => setLanguage(data)); */

    return <div class="repo-card">
        {/* <p>ID{ props.id }</p> */}
        <h3 class="repo-card-title">{ props.name }</h3>
        {/* <h3 class="repo-card-title">{ props.full_name }</h3> */}

        <div class="repo-card-container">
            <p class="repo-card-description">{ props.description ?? 'No description available for this repository'}</p>
            {/* <h4>Languages Proyect:</h4> */}
            {/* esto esta comentado de momento para optimizar las peticiones  <ul>{
                Object.keys(getLanguage()).map(language => <li>{ language }</li>)
            }</ul> */}
            {/* <p>contents_url { props.contents_url }</p> */}
        </div>
        <div class="repo-card-footer">
            <img class="repo-card-principal-lang-img" src={ props.language } />
            <a class="repo-card-ref" href={ props.html_url } target="_blank">go to repository</a>
        </div>
    </div>
};