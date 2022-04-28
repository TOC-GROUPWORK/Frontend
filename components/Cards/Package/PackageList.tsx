import Packageitem from "./Packageitem";
import Box from "@mui/material/Box";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";
import { ImageList } from "@mui/material";

function PackageList(props: {
  promotions: any[];
  handleClick: any;
  handlePackageDetailSelect: any;
  packageNumber: any;
}) {
  const { promotions } = props;

  return (
    <ImageList
      sx={{
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fill,minmax(350px,1fr)) !important",
        gridAutoColumns: "minmax(350px, 1fr)",
        width: 1500,
      }}
    >
      {promotions.map((packageDetail, index) => {
        if (index < promotions.length) {
          return (
            <Packageitem
              key={index}
              index={index}
              PackageName={packageDetail.name}
              PackageDetail={packageDetail.detail}
              packageNumber={props.packageNumber}
              handleClick={props.handleClick}
              handlePackageDetailSelect={props.handlePackageDetailSelect}
            />
          );
        }
      })}
    </ImageList>
  );
}

export default PackageList;
