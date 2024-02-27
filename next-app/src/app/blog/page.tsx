"use client";
import React from "react";
import { Layout } from "../Layout/page";
import { styled } from "styled-components";
import { blogData } from "../helper/constant";

function Blog() {
  return (
    <Layout>
      <BlogSection>
        <BlogMainContainer >
            <BlogHeading>BLOG</BlogHeading>
        </BlogMainContainer>
        <BlogContainer>
          {blogData.map((item) => (
            <BlogItem key={item.title}>
              <BlogImage src={item.image} alt="Blog image" />
            <BlogContent>
              <BlogTitle>{item.title}</BlogTitle>
              <BlogDate>{item.date}</BlogDate>
              <BlogDescription>{item.description}</BlogDescription>
              <ReadMoreButton>Read More</ReadMoreButton>
            </BlogContent>
            </BlogItem>
          ))}
        </BlogContainer>
      </BlogSection>
    </Layout>
  );
}

export default Blog;
const BlogSection = styled.section`
  background-repeat: no-repeat;
  height: 100vh;
  height: 700px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 0 auto;
  overflow-y: scroll;
  visiblity:hidden;
`;
const BlogContainer = styled.article`
  display: flex;
  justify-content: center;
`;
const BlogItem = styled.div`
  box-sizing: border-box;
  padding: 5rem;
`;
const BlogImage = styled.img`
  width: 100%;
`;
const BlogTitle = styled.h2`
  font-size: 2rem;
  line-height: 2rem;
  text-align: start;
`;
const BlogDate = styled.h3`
  line-height: 3rem;
`;
const BlogDescription = styled.p`
  font-family: Jazz LET, fantasy;
  padding: 1rem 0;
`;
const ReadMoreButton = styled.button`
  background-color: #2ea1a7;
  padding: 10px 20px;
  color: white;
  border: none;
  font-weight: bold;
  cursor:pointer;
`;

const BlogMainContainer = styled.div`
  background-image: url(${"/images/blogbg.jpg"});
  background-repeat: no-repeat;
  margin-top: 5rem;
  height: 100vh;
  height: 500px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const BlogHeading=styled.h1`
    color:white;
    font-size:3rem;
    text-align:center;
    position:relative;
    top:50%;
`
const BlogContent=styled.div`   
    padding-left:1.5rem;
`