import NavBar from "../../../../components/NavBar"

export default function Page({params}: any) {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <NavBar/>
    <h1 className="text-black">Welcome {params.id}!</h1>
    </main>
  )
}