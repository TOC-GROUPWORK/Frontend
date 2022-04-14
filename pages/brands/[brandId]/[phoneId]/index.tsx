import PackageList from "../../../../components/Cards/Package/PackageList";
const DUMMY_PACKAGE = [
  {
    id: "p1",
    PackageName: "ลูกค้าเก่ารายเดือน",
    PackageDetail: "อัพเกรดแพ็กเกจใหม่ จ่ายเท่าเดิม 1099.-",
  },
  {
    id: "p2",
    PackageName: "ลูกค้าใหม่",
    PackageDetail: "ย้ายค่ายเบอร์เดิมพร้อมสมัครแพ็คเกจ 1399.- ขึ้นไป",
  },
];
const PhoneDetail = () => {
  return (
    <div>
      <PackageList packages={DUMMY_PACKAGE} />
    </div>
  );
};

//Required for serverside rendering
export const getStaticPaths = async () => {
  return {
    fallback: true,
    paths: [
      {
        params: {
          brandId: "apple",
          phoneId: "1001",
        },
      },
    ],
  };
};

export const getStaticProps = async (context: any) => {
  const phoneId = context.params.phoneId;

  //Fetch Data HERE

  //Mockup
  const { data } = require("../../../../mocks/brand/brand_by_id.json");

  return {
    props: {
      phone: data,
    },
  };
};

export default PhoneDetail;
