const PhonePage = (props: { id: string }) => {
  return (
    <>
      <h1>{props.id} Page</h1>
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
          phoneId: "1",
        },
      },
    ],
  };
};

export const getStaticProps = async (context: any) => {
  const phoneId = context.params.phoneId;

  //Fetch Data HERE

  return {
    props: {
      id: phoneId,
    },
  };
};

export default PhonePage;
