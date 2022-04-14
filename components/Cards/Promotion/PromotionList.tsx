import Promotionitem from "./Promotionitem";
import Box from "@mui/material/Box";

function PromotionList(props: { promotions: any[] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      {props.promotions.map((promotions) => (
        <Promotionitem
          key={promotions.id}
          id={promotions.id}
          PromotionName={promotions.PromotionName}
          PromotionStart={promotions.PromotionStart}
          PromotionPrice={promotions.PromotionPrice}
        />
      ))}
    </Box>
  );
}

export default PromotionList;
