import { CornerDownLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { useState } from "react"
import { messageDataProps } from "./props"
import data from '../assets/data.json'





export function MessageInput(props: {setMessagesData : Function}) {

  const [message, setMessage] = useState<string>('');

  const handleMessageSend = () => {
    if (message.trim() === '') {
      return
    }

    

    var num = Math.floor(Math.random() * data.length)
    
    props.setMessagesData((prev : Array<messageDataProps>) => [...prev, {position : 'left', message : message}])
    setTimeout(() => {

        props.setMessagesData((prev : Array<messageDataProps>) => [...prev, {position : 'right', message : data[num]}])
    
    }, 300)
}

  return (
    <div
      className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
    >
      <Label htmlFor="message" className="sr-only">
        Message
      </Label>
      <Textarea
        id="message"
        placeholder="Type your message here..."
        className="min-h-12 resize-none shadow-none !bg-transparent !outline-none !border-transparent"
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex items-center p-3 pt-0">
        <Button type="submit" size="sm" className="ml-auto gap-1.5" onClick={() => {handleMessageSend()}}>
          Send Message
          <CornerDownLeft className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
