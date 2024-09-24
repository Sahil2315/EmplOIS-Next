import { useEffect, useState } from "react"
import { io } from "socket.io-client"
const socket = io("http://localhost:5590", {transports: ["websocket"]})

export const Chat = () => {
    let [msgarray, resetmsgarray] = useState<Array<string>>([])
    useEffect(() => {
        socket.emit("InitConnect", {
            'message': "LMAONOOBXD"
        })
    }, [])
    socket.on("newmsg", (msg: string) => {
        let temparray = msgarray
        msgarray.push(msg)
        resetmsgarray(temparray)
    })
    return (
        <div>
            {
                msgarray.map((item: string, index: number) => {
                    return(
                        <div key={index}>
                            <span className="text-cyan-400 text-xl">{item}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
