import RecommendPostItem from './recommend-post-item'

function RecommendPostList() {
  return (
    <div className="w-full min-w-[200px] max-w-[480px] laptop:max-w-[200px] laptop:pt-[60px]">
      <h3 className="mb-[8px] text-[1.6rem] font-semibold">Recommended Post</h3>
      <div className="flex max-w-full gap-[10px] overflow-hidden overflow-x-scroll  scrollbar-hide laptop:flex-col">
        {['', '', ''].map((item, index) => (
          <RecommendPostItem key={index} />
        ))}
      </div>
    </div>
  )
}

export default RecommendPostList
