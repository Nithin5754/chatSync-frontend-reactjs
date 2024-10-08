import { Plus } from "lucide-react";
import { userType } from "../../../../../store/slices/userSlice";
import { changeColor } from "../../../../../utils/colorHelper";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../../store/hooks";
import { setCurrentChatPage } from "../../../../../store/slices/singleChatCurPageSlice";

interface Type {
  list: userType;
}

const SearchFriendDetails = (params: Type) => {
  const dispatch = useAppDispatch();
  const [color, setcolor] = useState("");
  useEffect(() => {
    let isColor = "bg-" + changeColor(params.list.firstName[0]) + "-600";
    setcolor(isColor);
  }, [params.list]);

  const handleSelectThePage = ({
    user,
    type,
  }: {
    user: userType;
    type: string;
  }) => {
    if (user !== null && type !== null) {
      dispatch(setCurrentChatPage({ user, type }));
    }
  };

  return (
    <div
      key={params.list.id}
      className="flex justify-between text-sm hover:bg-neutral-800 px-4 py-2 rounded-md transition-all duration-500"
    >
      <div className="flex gap-4">
        <div
          className={`${color}  flex justify-center text-xl  w-8 h-8 rounded-full`}
        >
          {params.list.firstName[0]}
        </div>
        <div className="flex flex-col font-semibold  hover:text-blue-600 ">
          <h6 className="flex gap-1">
            {" "}
            {params.list.firstName}{" "}
            <span className="">{params.list.lastName}</span>
          </h6>
          <div className="overflow-x-hidden w-[130px]  font-thin ">
            {params.list.email}
          </div>
        </div>
      </div>

      <div className="">
        <button
          className="border-none outline-none bg-transparent"
          onClick={() =>
            handleSelectThePage({ user: params.list, type: "single" })
          }
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};
export default SearchFriendDetails;
