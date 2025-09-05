'use client';

import {
  selectSelectedCategory,
  setSelectedCategory,
} from '@/features/matchSlice';
import { Category } from '@/features/types';
import { categories } from '@/lib/constant';
import { useTranslations } from 'next-intl';
import { useDispatch, useSelector } from 'react-redux';

function AppSidebar() {
  const t = useTranslations('Categories');
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectSelectedCategory);

  const handleCategoryChange = (category: Category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <aside className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
      <h3 className='mb-4 text-lg font-semibold text-gray-900'>Categories</h3>
      <nav className='space-y-2'>
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => handleCategoryChange(category.key)}
            className={`w-full rounded-md px-4 py-3 text-left text-sm font-medium transition-colors duration-150 ${
              selectedCategory === category.key
                ? 'border border-blue-200 bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            {t(category.translationKey)}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default AppSidebar;
