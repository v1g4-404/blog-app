import { posts } from '../Data/posts'
import { useParams } from "react-router-dom";


export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id))

  if (!post) {
    return <div>記事が見つかりませんでした</div>
  }

  return (
    <div className='mx-auto my-10 max-w-[800px] flex-col p-4'>
      <div className=''>
        <img src={post.thumbnailUrl} className='' />
      </div>
      <div className='p-4'>
        <div className='flex justify-between'>
          <div className="text-[#888] text-xs">
            {new Date(post.createdAt).toLocaleDateString()}
          </div>
          <div className="flex">
            {post.categories.map((arr) => (
              <div className="block py-[3.2px] px-[6.4px] mr-2 text-[#0066cc] border rounded-md text-xs" key={arr}>
                {arr}
              </div>
            ))}
          </div>
        </div>
        <div className='mt-2 mb-4 text-2xl'>{post.title}</div>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  )
}