import PackageDetailitem from "./PackageDetailitem";
import Box from "@mui/material/Box";

function PackageList(props: { packagesdetail: any[] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      {props.packagesdetail.map((packagesdetail) => (
        <PackageDetailitem
          key={packagesdetail.id}
          id={packagesdetail.id}
          PackagePrice={packagesdetail.PackagePrice}
          PackageDetail={packagesdetail.PackageDetail}
          PackageContract={packagesdetail.PackageContract}
        />
      ))}
    </Box>
  );
}

export default PackageList;
