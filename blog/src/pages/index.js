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
  max-width: 1000px;
  margin: 0 auto;
`

const Hero = styled.section`
  text-align: center;
  margin-bottom: 3rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  color: #2f2218;
`

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #5c4b3f;
  max-width: 700px;
  margin: 0 auto;
`

const LessonsGrid = styled.div`
  display: grid;
  gap: 2rem;
`

const LessonCard = styled.article`
  background: white;
  border: 1px solid #ddd4c8;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
`

const LessonContent = styled.div`
  padding: 1.25rem;
`

const LessonTitle = styled.h2`
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2f2218;

  &:hover {
    color: #8b5e34;
  }
`

const Description = styled.p`
  color: #5c4b3f;
  line-height: 1.6;
  margin-bottom: 1rem;
`

const ReadMore = styled(Link)`
  display: inline-block;
  margin-top: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  color: #8b5e34;

  &:hover {
    text-decoration: underline;
  }
`

const IndexPage = ({ data }) => {
  const lessons = data.allContentfulLesson.nodes

  return (
    <Page>
      <Container>
        <Hero>
          <Title>Acoustic Guitar Songbook</Title>
          <Subtitle>
            Browse simple acoustic guitar lessons and song guides to improve
            your playing.
          </Subtitle>
        </Hero>

        <LessonsGrid>
          {lessons.map((lesson) => {
            const image = getImage(lesson.heroImage)

            return (
              <LessonCard key={lesson.id}>
                {image && <GatsbyImage image={image} alt={lesson.title} />}

                <LessonContent>
                  <LessonTitle>
                    <StyledLink to={`/${lesson.slug}`}>{lesson.title}</StyledLink>
                  </LessonTitle>

                  <Description>{lesson.description?.description}</Description>

                  <ReadMore to={`/${lesson.slug}`}>Read Lesson</ReadMore>
                </LessonContent>
              </LessonCard>
            )
          })}
        </LessonsGrid>
      </Container>
    </Page>
  )
}

export const query = graphql`
  query {
    allContentfulLesson {
      nodes {
        id
        title
        slug
        description {
          description
        }
        heroImage {
          gatsbyImageData(width: 1000)
        }
      }
    }
  }
`

export default IndexPage