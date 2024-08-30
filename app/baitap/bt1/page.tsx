import { NextResponse } from 'next/server';

interface Post {
  id: number;
  title: string;
  thumbnailUrl: string;
}

const posts: Post[] = [
  { id: 1, title: 'Accusamus beatae ad facilis', thumbnailUrl: 'https://via.placeholder.com/150/90EE90/FFFFFF?text=150x150' },
  { id: 2, title: 'Reprehenderit est deserunt', thumbnailUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=150x150' },
  { id: 3, title: 'Officia porro iure quia', thumbnailUrl: 'https://via.placeholder.com/150/FF69B4/FFFFFF?text=150x150' },
  { id: 4, title: 'Qui eius qui autem sed', thumbnailUrl: 'https://via.placeholder.com/150/20B2AA/FFFFFF?text=150x150' },
  { id: 5, title: 'Epudiandae iusto deleniti', thumbnailUrl: 'https://via.placeholder.com/150/228B22/FFFFFF?text=150x150' },
  { id: 6, title: 'Iusto sunt nobis quasi veritatis', thumbnailUrl: 'https://via.placeholder.com/600/FFFF00/000000?text=600x600' },
];

export async function GET() {
  return NextResponse.json(posts);
}

export default function PostsPage() {
  const postsData = posts;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>
      <div className="grid grid-cols-3 gap-4">
        {postsData.map(post => (
          <div key={post.id} className="border p-4 rounded-lg">
            <img src={post.thumbnailUrl} alt={post.title} className="w-full h-36 object-cover" />
            <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}