import React, { Fragment } from "react";
import { UseFetchGifs } from "../hooks/useFetchGifs";
import { Row,Breadcrumb } from "react-bootstrap";
import "animate.css";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ list }) => {
  const { data: images } = UseFetchGifs(list);

  return (
    <Fragment>
     <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>{list}</Breadcrumb.Item>
        <Breadcrumb.Item active>Lista</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        {images.map((data) => {
          return <GifGridItem {...data} key={data.id} />;
        })}
      </Row>
    </Fragment>
  );
};
