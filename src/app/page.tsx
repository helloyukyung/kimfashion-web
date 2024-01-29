export default async function Home() {
  // const setNewView = async () => {
  //   const {data, error} = await supabase.from('views').insert({name: 'hello'})
  //   console.log('work')
  //   console.log('data', data)
  //   if (data) {
  //     console.log('data->', data)
  //   }
  //   if (error) {
  //     console.log('error->', error)
  //   }
  // }

  // setNewView()
  return (
    <main className="w-[470px] bg-[beige]">
      메인페이지
      <div>hi</div>
    </main>
  )
}
