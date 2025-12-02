import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function PostDetail() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
        const data = await res.json()
        setPosts(data.posts)
      } catch (err) {
        console.error("Errro", err);
      } finally {
        setLoading(false);
      }
    }

    fetcher()
  }, [])

  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id))

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        読み込み中...
      </div>
    );
  }

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