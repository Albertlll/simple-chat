import { messageDataProps } from "./props";

function Message(props : {messageData : messageDataProps}) {
    console.log(props.messageData.position)
    return (
        <div className={props.messageData.position == "left" ?
        "w-full flex justify-end" :
        "w-full flex justify-start"
        }>
            <div className={props.messageData.position == "left" ?
                "relative mt-4 max-w-[70%] text-right break-all p-2 bg-primary rounded-lg" :
                "relative mt-4 max-w-[70%] text-right break-all p-2 bg-secondary rounded-lg"}>
                {props.messageData.message}
            </div>
        </div>

    );
}

export default Message;