import PackageDetailItem from "./PackageDetailitem";
import Box from "@mui/material/Box";
import { ImageList, ImageListItem } from "@mui/material";

function PackageList(props: {
  packages: any[];
  packageNumber: any;
  handlePackageDetailSelect: any;
}) {
  const { packages, packageNumber } = props;

  return (
    <ImageList
      sx={{
        // display: "flex",
        // flexDirection: "row",
        // justifyContent: "flex-start",
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fill,minmax(350px,1fr)) !important",
        gridAutoColumns: "minmax(350px, 1fr)",
        width: 2400,
      }}
    >
      {packages.map((packagesdetail: any, index: number) => {
        const details = packagesdetail;

        return (
          <PackageDetailItem
            key={index}
            index={index}
            PackagePrice={details !== undefined ? details.specialprice : ""}
            PackageDetail={details !== undefined ? details.prepaid : ""}
            PackageContract={details !== undefined ? details.package_type : ""}
            Package={details !== undefined ? details.package : ""}
            handlePackageDetailSelect={props.handlePackageDetailSelect}
          />
        );
      })}
    </ImageList>
  );
}

export default PackageList;
