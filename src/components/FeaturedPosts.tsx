import React from 'react';

const FeaturedPosts = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development...",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      category: "Technology",
      date: "Mar 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mastering Modern Design Principles",
      excerpt: "A comprehensive guide to creating stunning user interfaces in 2024...",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800",
      category: "Design",
      date: "Mar 14, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Rise of AI in Content Creation",
      excerpt: "How artificial intelligence is revolutionizing the way we create and consume content...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      category: "AI",
      date: "Mar 13, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-48">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <a
                href={`/post/${post.id}`}
                className="inline-flex items-center text-blue-500 hover:text-blue-600"
              >
                Read more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;