interface Type {
  updateMessage: (message: string) => void;
  message: string;
}

const InputMessage = ({ message, updateMessage }: Type) => {
  return (
    <input
      onChange={(e) => updateMessage(e.target.value)}
      value={message}
      type="text"
      placeholder="Enter Message"
      className=" p-5   dark:bg-[#3d3e41] flex-1   bg-transparent focus:outline-none focus:border-none rounded-md"
    />
  );
};
export default InputMessage;
