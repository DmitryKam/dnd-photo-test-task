import Head from 'next/head';
import styled from 'styled-components';

import PrintPage from '../components/PrintPage';
import { pageData } from '../mooks/pageData';
import { colors } from '../styles/colors';

const PageHeader = styled.div`
  width: 600px;
  margin: auto;
  border-bottom: 1px solid ${colors.platinumGray};
  margin-bottom: 42px;
  padding-bottom: 24px;

  h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.36px;
    color: ${colors.darkGray};
    margin-bottom: 8px;
  }

  p {
    color: ${colors.eastBay};
    margin: 0;
  }
`;

export default function Testpage() {
  return (
    <div>
      <Head>
        <title>Test Page | Popsa.com</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader>
        <h1>Trip to the Beach</h1>
        <p>Hardback Photobook last edited on Thursday 13 April 2022 at 16:28</p>
      </PageHeader>
      <PrintPage data={pageData} />
    </div>
  );
}
