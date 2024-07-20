import Message from "./message";
import { MessageInput } from "./message-input-area";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
export function Chat() {
    const [messagesData, setMessagesData] = useState<Array<{message : string, position : 'left' | 'right'}>>([]);

    return (
        <div className="relative flex flex-col justify-between p-8 h-full w-full border rounded-md border-input bg-background">

            <ScrollArea  className="relative w-full h-full p-3">
                {messagesData.map((messageData, index) => (
                    <Message key={index} messageData={messageData}/>
                ))}
            </ScrollArea>

            <div className="relative top-auto w-full bottom-0 p]">
            <MessageInput setMessagesData={setMessagesData}/>
            </div>
        </div>
    );
}
