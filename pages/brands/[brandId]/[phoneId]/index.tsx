const PhoneDetail = () => {
  return (
    <>
      <h1>Phone Detail Page</h1>
    </>
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
