import ChatComponent from "@/components/ChatComponent"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='bg-slate-800 p-3 w-[800px] rounded-lg text-white'>
        <h2 className='text-2xl'>AMD GPT Application</h2>
        <ChatComponent />
      </div>
    </main>
  )
}
