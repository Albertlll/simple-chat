import { messageDataProps } from "./props";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import avatarImg from '../assets/avatarbot.jpeg'
import { motion } from "framer-motion";
function Message(props : {messageData : messageDataProps}) {
    console.log(props.messageData.position)
    return (
        <div className={props.messageData.position == "left" ?
        "w-full flex justify-end" :
        "w-full flex justify-start gap-3"
        }>


        
                    


        {
        props.messageData.position != "left" && 
                <motion.div

                initial={{opacity : 0, scale: 0.1}}
                animate={{opacity : 1, scale: 1}}
                transition={{type : 'spring', 
                        duration : 0.01,
                        damping : 20,
                        stiffness : 200,
                        mass : 1,
                        ease : "easeInOut"

                    }} 
                
                
                >
                <Avatar>
                    <AvatarImage src={avatarImg}/>
                </Avatar>
                </motion.div>

            }
            <motion.div
                    initial={{opacity : 0, scale: 0.1}}
                    animate={{opacity : 1, scale: 1}}
                    transition={{type : 'spring', 
                            duration : 0.01,
                            damping : 20,
                            stiffness : 200,
                            mass : 1,
                            ease : "easeInOut"
 
                        }} className={props.messageData.position == "left" ?
                "relative max-w-[70%] text-left break-words p-2 bg-primary rounded-lg" :
                "relative max-w-[70%] text-left break-words p-2 bg-secondary rounded-lg"}>
                {props.messageData.message.toString()}
            </motion.div>    
        </div>

    );
}

export default Message;