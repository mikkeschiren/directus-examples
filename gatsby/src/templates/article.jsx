import * as React from "react";
import { Link, graphql } from "gatsby";
import DefaultLayout from "../layouts/default";
import MoreArticles from "../components/MoreArticles";
import IconBack from "../components/icons/Back";
import IconLink from "../components/icons/Link";
import IconGithub from "../components/icons/Github";
import IconYoutube from "../components/icons/Youtube";
import IconLinkedin from "../components/icons/Linkedin";
import IconTwitter from "../components/icons/Twitter";
import { formatRelativeTime } from "../utils/format-relative-time";

export default function ArticleTemplate({ data, path }) {
  const originalArticle = data.directus.articles_by_id;
  const article = {
    ...originalArticle,
    date_created: formatRelativeTime(new Date(originalArticle.date_created)),
  };

  return (
    <DefaultLayout>
      <div className="current-article">
        <section>
          <div className="container">
            <Link to="/" className="current-article__backlink">
              <IconBack className="icon" />
              <span>Back to Articles</span>
            </Link>
            <h1 className="current-article__title">{article.title}</h1>
            <div className="current-article__detail">
              <div className="current-article__wrapperOuter">
                <div className="current-article__wrapperInner">
                  <div className="current-article__authorImage">
                    <img
                      src={`${process.env.GATSBY_DIRECTUS_URL}/assets/${article.author.avatar.id}`}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="current-article__authorName">
                      {`${article.author.first_name} ${article.author.last_name}`}
                    </div>
                    <div className="current-article__time">
                      {article.date_created}
                    </div>
                  </div>
                </div>
                <ul className="current-article__socials">
                  <li>
                    <a href={path} target="_blank" rel="noreferrer noopener">
                      <IconLink />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/c/DirectusVideos"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <IconYoutube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/directus"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <IconLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/directus"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <IconTwitter />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="current-article_coverImage">
                <img
                  src={`${process.env.GATSBY_DIRECTUS_URL}/assets/${article.cover_image.id}`}
                  alt=""
                />
              </div>
            </div>
            <div className="current-article__body">
              <div
                className="current-article__bodyContent"
                dangerouslySetInnerHTML={{ __html: article.body }}
              ></div>
              <ul className="current-article__bodySocials">
                <li>
                  <a
                    href="https://github.com/directus"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IconGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/c/DirectusVideos"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IconYoutube />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/directus"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IconLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/directus"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IconTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <MoreArticles />
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query ($id: ID!) {
    directus {
      articles_by_id(id: $id) {
        id
        title
        excerpt
        body
        date_created
        author {
          first_name
          last_name
          avatar {
            id
          }
        }
        cover_image {
          id
        }
      }
    }
  }
`;
