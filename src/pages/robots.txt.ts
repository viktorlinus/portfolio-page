import { GetServerSideProps } from 'next';

const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: https://eken-consulting.com/sitemap.xml`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write(generateRobotsTxt());
  res.end();

  return {
    props: {},
  };
};

export default function RobotsTxt() {
  return null;
}
