import * as React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Page = styled.main`
  min-height: 100vh;
  padding: 2.5rem 1.5rem;
  background: #f7f4ef;
`

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: #8b5e34;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

const LessonCard = styled.article`
  background: white;
  border: 1px solid #ddd4c8;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
`

const LessonContent = styled.div`
  padding: 1.5rem;
`

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #2f2218;
`

const Description = styled.p`
  font-size: 1.05rem;
  color: #5c4b3f;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
`

const Body = styled.div`
  color: #3f3128;
  line-height: 1.8;

  h2,
  h3,
  h4 {
    color: #2f2218;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul,
  ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }
`

const LessonTemplate = ({ data }) => {
  const lesson = data.contentfulLesson
  const image = getImage(lesson.heroImage)

  return (
    <Page>
      <Container>
        <BackLink to="/">← Back to Home</BackLink>

        <LessonCard>
          {image && <GatsbyImage image={image} alt={lesson.title} />}

          <LessonContent>
            <Title>{lesson.title}</Title>
            <Description>{lesson.description?.description}</Description>

            <Body
              dangerouslySetInnerHTML={{
                __html: lesson.body.childMarkdownRemark.html,
              }}
            />
          </LessonContent>
        </LessonCard>
      </Container>
    </Page>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulLesson(slug: { eq: $slug }) {
      title
      description {
        description
      }
      heroImage {
        gatsbyImageData(width: 1200)
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default LessonTemplate