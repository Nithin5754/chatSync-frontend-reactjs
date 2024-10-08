import { useEffect, useState } from "react";
import { apiClient } from "../../../../lib/api-client";
import { SEARCH_USERS } from "../../../../utils/constant";
import {
  setCurrentSearchRslt,
  setUserResult,
} from "../../../../store/slices/userSlice";
import { useAppDispatch } from "../../../../store/hooks";

const SearchInput = () => {
  // SEARCH_USERS

  const [search, setSearch] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    let timer = setTimeout(() => {
      if (search.trim() !== "") {
        handleSearch(search);
      }
    }, 300);

    if (search === "") {
      dispatch(setCurrentSearchRslt(null));
    }

    return () => clearTimeout(timer);
  }, [search]);

  const handleSearch = async (searchItem: string) => {
    try {
      if (
        searchItem !== undefined ||
        searchItem !== null ||
        searchItem !== ""
      ) {
        const searchResult = await apiClient.post(
          SEARCH_USERS,
          { searchItem },
          { withCredentials: true }
        );

        if (
          searchResult?.status === 200 &&
          searchResult?.data?.data !== "empty users"
        ) {
          dispatch(
            setUserResult({ key: searchItem, result: searchResult?.data?.data })
          );
        } else {
          dispatch(setCurrentSearchRslt(null));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search friends here.."
      className="flex-1 px-4 py-2 outline-none border-none  bg-transparent text-white  h-full w-full rounded-md overflow-x-hidden"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
export default SearchInput;
