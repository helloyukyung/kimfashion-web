import RecommendPostItem from './recommend-post-item'

function RecommendPostList() {
  return (
    <div className="w-full min-w-[200px] max-w-[480px] laptop:max-w-[200px] laptop:pt-[60px]">
      <h3 className="mb-[8px] text-[16px] font-bold">추천 게시물</h3>
      <div className="scrollbar-hide flex max-w-full gap-[10px] overflow-hidden  overflow-x-scroll laptop:flex-col">
        {['', '', ''].map((item, index) => (
          <RecommendPostItem key={index} />
        ))}
      </div>
    </div>
  )
}

export default RecommendPostList
