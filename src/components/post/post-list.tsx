import PostItem from './post-item'

interface PostListProps {
  title: string
}

const temp: Post[] = [
  {
    id: 'trand2024',
    title: '2024 SS 패션 트렌드 TOP10 빠르게 알아보기',
    representativeImage: '/assets/temp/prada.avif',
    hashtags: ['fashion', 'trand', 'trand2024'],
    editor: '김패션',
    editorImage: '/assets/logo.png',
    createdAt: '2023.12.26'
  }
]

export interface Post {
  id: string
  title: string
  representativeImage: string
  hashtags: string[]
  editor: string
  editorImage: string
  createdAt: string
}
function PostList({title}: PostListProps) {
  return (
    <div className="flex w-full max-w-[480px] flex-col justify-center">
      <h1 className="mb-[12px] text-[3.2rem] font-bold uppercase">{title}</h1>
      {temp.map((item, index) => (
        <PostItem post={item} key={index} />
      ))}
    </div>
  )
}

export default PostList
