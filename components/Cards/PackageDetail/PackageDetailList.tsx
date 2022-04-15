import PackageDetailitem from "./PackageDetailitem";
import Box from "@mui/material/Box";

function PackageList(props: { packages: any[]; packageNumber: any }) {
  const { packages, packageNumber } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      {packages[packageNumber].package.map(
        (packagesdetail: any, index: number) => {
          const details = packagesdetail;

          return (
            <PackageDetailitem
              key={index}
              id={index}
              PackagePrice={details !== undefined ? details.specialprice : ""}
              PackageDetail={details !== undefined ? details.prepaid : ""}
              PackageContract={details !== undefined ? details.type : ""}
            />
          );
        }
      )}
    </Box>
  );
}

export default PackageList;
