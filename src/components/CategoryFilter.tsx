import React from 'react';

const CategoryFilter = () => {
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'technology', name: 'Technology' },
    { id: 'design', name: 'Design' },
    { id: 'ai', name: 'AI' },
    { id: 'development', name: 'Development' },
    { id: 'tutorials', name: 'Tutorials' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            className="px-4 py-2 rounded-full text-sm font-medium transition-colors
              hover:bg-blue-500 hover:text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              bg-gray-100 text-gray-700"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;