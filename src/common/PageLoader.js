import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

export default function PageLoader() {
  return (
    <PageLoaderWrapper>
      <Loader type="Bars" color="black" height={100} width={100} />
    </PageLoaderWrapper>
  );
}

const PageLoaderWrapper = styled.div`
  position: fixed;
  z-index: 999;
  height: 100px;
  width: 100px;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
