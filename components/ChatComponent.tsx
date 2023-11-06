'use client'
import { useChat, Message } from "ai/react"

function ChatComponent() {

  const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();

  return (
    <>
      {messages.map((message : Message) => {
        return (
          <div key={message.id}>
            {
              message.role === 'assistant'
              ?
              <h3 className="text-lg font-semibold mt-2">GPT</h3>
              :
              <h3 className="text-lg font-semibold mt-2">User</h3>
            }
            {/* Formatting the message*/}
            {
              message.content.split("\n").map((currentTextBlock: string, index: number) => {
                if(currentTextBlock === "") {
                  return <p key={message.id + index}>&nbsp;</p> // " "
                } else {
                  return <p key={message.id + index}>{currentTextBlock}</p> 
                }
              })
            }
          </div>
        )
      })}

      <form className="mt-12" onSubmit={ handleSubmit }>
            <p>User Message</p>
            <textarea 
                className="mt-2 w-full bg-slate-600 p-2"
                placeholder="Write in your prompt!"
                value={ input }
                onChange={ handleInputChange }
            />
          <button className="rounded-md bg-blue-600 p-2 m-2">
            Send Message
          </button>
       </form>
    </>
  )
}

export default ChatComponent