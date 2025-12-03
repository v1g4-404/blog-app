import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function PostList() {

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

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        読み込み中...
      </div>
    );
  }

  return (
    <div>
      <ul className='block mt-4 mb-4 pl-10'>
        {posts.map((post) => (
          <li className='flex-col' key={post.id}>
            <Link to={`posts/${post.id}`} className='cursor-pointer'>
              <div className="p-4 mb-8 border max-w-2xl mx-auto flex-col">
                <div className='flex justify-between'>
                  <p className="text-[#888] text-xs">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>

                  <div className="flex">
                    {post.categories.map((arr) => (
                      <span className="block py-[3.2px] px-[6.4px] mr-2 text-[#0066cc] border rounded-md text-xs" key={arr}>
                        {arr}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="mt-2 mb-4 text-2xl">{post.title}</h2>

                <div
                  className="line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </Link>
          </li>
        ))
        }
      </ul>
    </div >
  )
}