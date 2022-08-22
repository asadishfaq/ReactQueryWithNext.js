import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HeaderTabs } from "./components/HeaderTabs";
import users from "./data.json";

const GetData = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};
export default function FetchRecord() {
  const { user, tabs, urls } = users;
  const { data, isLoading, isError } = useQuery(["spacex"], GetData , {
    // keepPreviousData: true,
  });
  return (
    <>
      <HeaderTabs user={user} tabs={tabs} urls={urls} />
      {isLoading && <div>Loading</div>}
      {!isLoading &&
        data.data?.map((x) => {
          return <div key={x.id}>{x.name}</div>;
        })}
    </>
  );
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(["spacex"],GetData);
// //   await queryClient.prefetchQuery(["spacex"], GetData);
//   return {
//     props: {
//         dehydratedState: dehydrate(queryClient) || null,
//     },
//   };
// }


