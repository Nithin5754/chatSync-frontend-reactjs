import { useEffect, useRef, useState } from "react";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { SmilePlus } from "lucide-react";

interface Type {
  updateMessage: (message: string) => void;
  currentMessage: string;
}

const EmojiPickerComponents = ({ updateMessage, currentMessage }: Type) => {
  const emojiRef = useRef<HTMLDivElement>(null);

  const [isEmojiOpen, setEmojiOpen] = useState<boolean>(false);
  useEffect(() => {
    function handleEventOutside(event: Event) {
      if (
        emojiRef.current &&
        !emojiRef.current.contains(event.target as Node)
      ) {
        setEmojiOpen(false);
      }
    }

    document.addEventListener("mousedown", handleEventOutside);

    return () => {
      removeEventListener("mousedown", handleEventOutside);
    };
  }, [emojiRef]);
  const handleClickEmoji = (emoji: any) => {
    updateMessage(currentMessage + emoji.emoji);
  };
  return (
    <>
      <button
        onClick={() => setEmojiOpen(!isEmojiOpen)}
        className=" text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all"
      >
        <SmilePlus size={24} />
      </button>
      <div className="absolute bottom-16 right-0 " ref={emojiRef}>
        <EmojiPicker
          theme={Theme.AUTO}
          open={isEmojiOpen}
          autoFocusSearch={false}
          onEmojiClick={handleClickEmoji}
        />
      </div>
    </>
  );
};
export default EmojiPickerComponents;
