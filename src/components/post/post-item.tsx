import Image from 'next/image'
import Link from 'next/link'
import {Post} from './post-list'

interface PostItemProps {
  post: Post
}
function PostItem({post}: PostItemProps) {
  return (
    <Link href={`/news/${post.id}`} className="w-full">
      <div className="flex items-center gap-[10px] pb-[12px] pl-[4px] pt-[8px]">
        <Image
          priority
          className="h-[32px] w-[32px] rounded-[100px]"
          width={32}
          height={32}
          src={post.editorImage}
          alt="logo"
        />
        <div>
          <span>{post.editor}</span>
          <span className="px-[4px] text-[#737373]">·</span>
          <span className="text-[#737373]">1일</span>
        </div>
      </div>
      <Image
        className="max-h-[585px] w-full overflow-hidden rounded object-cover"
        width={480}
        height={480}
        src={post.representativeImage}
        alt="representative-image"
      />
      <div className="py-[8px]">
        <h2>
          <b className="mr-[4px]">{post.editor}</b>
          {post.title}
        </h2>
        <div className="pt-[8px] text-[color:var(--hashtag)]">
          {post.hashtags.map((hashtag) => (
            <span className="pr-[4px]" key={hashtag}>
              #{hashtag}
            </span>
          ))}
        </div>
        <hr className="my-[8px]" />
      </div>
    </Link>
  )
}

export default PostItem
