import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { objectToURL } from 'src/utils/queryString';
import useDebounce from '@utils/useDebounce';
import useNavigation from '../hooks/useNavigation';

export default function Search({}: any) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const { query } = useNavigation();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (search === '') {
      delete query.search;
      router.push(`${pathname}?${objectToURL(query)}`);
    }
  }, [search]);

  useEffect(() => {
    if (debouncedSearch) {
      const addQuery = {
        ...query,
        search: debouncedSearch,
      };
      router.push(`${pathname}?${objectToURL(addQuery)}`);
    }
  }, [debouncedSearch]);
  return (
    <div className="relative flex-1 max-w-md py-3">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            const addQuery = {
              ...query,
              search: search,
            };
            router.push(`${pathname}?${objectToURL(addQuery)}`);
          }
        }}
        className="block w-full py-3 pl-10 dark:bg-[#151419] rounded-md dark:text-white placeholder-gray-400 border border-[#32313A] focus:border-[#32313A] focus:outline-none"
      />
      <button className="absolute left-0 flex items-center justify-center w-8 h-8 p-1 text-gray-600 transition-all duration-300 bg-transparent rounded-full top-1/2 -translate-y-1/2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      {search && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
          <MdCancel
            onClick={() => {
              setSearch('');
            }}
            color="white"
            size={20}
          />
        </span>
      )}
    </div>
  );
}
