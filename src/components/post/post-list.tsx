import PostItem from './post-item'

interface PostListProps {
  title: string
}
function PostList({title}: PostListProps) {
  return (
    <div className="flex w-full max-w-[480px] flex-col justify-center">
      <h2 className="mb-[12px] text-[3.2rem] font-bold uppercase">{title}</h2>
      {['', ''].map((item, index) => (
        <PostItem key={index} />
      ))}
    </div>
  )
}

export default PostList
