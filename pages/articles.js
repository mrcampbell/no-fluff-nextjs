import { Component } from "react";
import { attributes, react as ArticleContent } from "../content/articles.md";

export default class Home extends Component {
  render() {
    let { title, pokemon } = attributes;
    return (
      <>
        <article>
          <h1>{title}</h1>
          <ArticleContent />
          <ul>
            {pokemon.map((p, k) => (
              <li key={k}>
                <a href={p.link}>
                  <h2>{p.name}</h2>
                </a>
              </li>
            ))}
          </ul>
        </article>
      </>
    );
  }
}
