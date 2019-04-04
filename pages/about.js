import styled from "styled-components";
import Layout from "../components/MyLayout";

const MyTitle = styled.h1`
  color: blue;
`;

const About = () => (
  <Layout>
    <MyTitle>An About page.</MyTitle>
  </Layout>
);

export default About;
