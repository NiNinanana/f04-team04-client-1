import { IChatListProps } from "./ChatListOnly.types";
import {
  MessageWrapper,
  Contents,
  LastTime,
  Name,
  ChatWrapper,
  NameAndTime,
} from "./ChatListOnly.styled";

const ChatListPresenter = (props: IChatListProps) => {
  return (
    <>
      <ChatWrapper ref={props.msgRef}>
        {props.messages.map((el: any) => (
          <MessageWrapper
            key={el.id}
            onClick={props.onClickToChatRoom(el)}
            // id={el.roomId}
          >
            {/* <ProfileImg src={el.profilePicUrl} /> */}
            <div>
              <NameAndTime>
                <Name>{el.writer}</Name>
                <LastTime>{el.id?.slice(4, 15)}</LastTime>
              </NameAndTime>
              <Contents>{el.text.slice(0, 42)}</Contents>
            </div>
          </MessageWrapper>
        ))}
      </ChatWrapper>
    </>
  );
};

export default ChatListPresenter;
