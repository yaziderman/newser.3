import React, { Component, Suspense } from "react";
import Categories from "./Categories";
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

const LazyHeadlines = React.lazy(() => import("./Headlines"));
const override = css`
    display: block !important;
    margin: 0 auto;
    border-color: red;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <React.Fragment>
        <Categories />
        <Suspense fallback={<ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />}>
          <LazyHeadlines />
        </Suspense>
      </React.Fragment>
    );
  }
}

export default Home;
