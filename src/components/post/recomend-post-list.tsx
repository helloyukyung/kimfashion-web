import RecommendPostItem from './recomend-post-item'

function RecomendPostList() {
  return (
    <div className="min-w-[200px] laptop:pt-[60px]">
      <h3 className="mb-[8px] text-[16px] font-bold">추천 게시물</h3>
      <div className="scrollbar-hide flex gap-[10px] overflow-x-scroll laptop:flex-col">
        {['', '', ''].map((item, index) => (
          <RecommendPostItem key={index} />
        ))}
      </div>
      <div className="mt-[10px] text-[10px] text-[lightgray]">© 2024 김패션 all rights reserved.</div>
    </div>
  )
}

export default RecomendPostList
