import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// External Imports
import { Card, CardPrimaryAction, CardMedia } from "rmwc/Card";

// Library Imports
import Loading from "../../Modules/Loading";
import DataSet from "../../Modules/DataSet";

// Project Specific Imports
import Style from "./style.css";
import dataQuery from "./query.gql";

class FeaturedProperties extends Component {
  constructor(props) {
    super(props);
    this.mediaURLAccessor = property => {
      let result = "";
      property.media.forEach(media => {
        if (media.isFeatured) {
          result = media.handle;
        }
      });
      return ["https://media.graphcms.com/resize=w:800/compress/", result].join(
        ""
      );
    };

    this.unitToGridItem = (property, grid) => {
      const lowestPrice = Math.min(
        ...property.units.map(unit => unit.price / unit.bedrooms)
      );
      const price = Math.floor(lowestPrice);
      const gridItem = (
        <Link
          key={property.id}
          href
          to={["properties", property.id, property.units[0].id].join("/")}
        >
          <Card className={Style.gridItem}>
            <CardPrimaryAction>
              <div className={Style.cornerRibbon}>
                {property.imageBanner ? property.imageBanner : "Top Pick"}
              </div>
              <CardMedia
                sixteenByNine
                style={{
                  backgroundImage: `url(${this.mediaURLAccessor(property)})`
                }}
              />
              <div style={{ padding: "1em" }}>
                <h2>Starting at ${price} / bed</h2>
                <h3>
                  {property.address}, {property.city}
                </h3>
              </div>
            </CardPrimaryAction>
          </Card>
        </Link>
      );
      grid.push(gridItem);
    };
  }
  render() {
    if (this.props.data.loading === true) {
      return <Loading />;
    }
    if (this.props.data.error !== undefined) {
      return <div>{this.props.data.error.toString()}</div>;
    }

    const grid = [];
    this.props.data.allProperties
      .slice()
      .filter(property => property.isFeatured)
      .filter(property => property.zoning === "Residential")
      .sort((a, b) => a.priority - b.priority)
      .reverse()
      .slice(0, 3)
      .forEach(property => {
        this.unitToGridItem(property, grid);
      });

    return (
      <div className={Style.container}>
        <div className={Style.grid}>{grid}</div>
      </div>
    );
  }
}
FeaturedProperties.propTypes = {
  data: PropTypes.shape({
    allProperties: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.object,
    loading: PropTypes.bool
  }).isRequired
};

export default DataSet(dataQuery)(FeaturedProperties);