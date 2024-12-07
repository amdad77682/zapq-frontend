'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useOutsideHandler } from '../hooks/useOutsideHandler';
import { usePathname, useRouter } from 'next/navigation';
import useNavigation from '../hooks/useNavigation';
import { objectToURL } from 'src/utils/queryString';
import useDebounce from './useDebounce';

export default function DropDown({
  name,
  data = [],
  onClickItemQuery,
  isSearchEnabled,
  onSearch,
}: {
  name: string;
  data?: any;
  onClickItemQuery: string;
  isSearchEnabled: boolean;
  onSearch?: any;
}) {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const pathname = usePathname();
  const { query } = useNavigation();
  const [selectedValue, setSelectedValue] = useState(null);
  const debouncedSearchTerm = useDebounce(search, 500);

  const [isOpen, setisOpen] = useState(false);
  const ref = React.useRef(null);

  useOutsideHandler(ref, () => isOpen && setisOpen(false));
  useEffect(() => {
    if (isSearchEnabled) onSearch(search);
  }, [isSearchEnabled, debouncedSearchTerm]);

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      const selectedItem = data.find(
        (item) => item?.id == query[onClickItemQuery]
      );
      setSelectedValue(selectedItem?.name);
    }
  }, [data]);

  return (
    <div className="relative min-w-[150px]  md:min-w-[200px] ">
      <button
        onClick={() => setisOpen(!isOpen)}
        className="flex  w-full  items-center gap-2 md:gap-5 border bg-white dark:bg-[#201F25] dark:border-[#1F1E25] rounded-md dark:text-white flex-1  p-2 md:p-4 text-sm font-semibold whitespace-nowrap"
      >
        <p className="truncate max-w-[100px]">{selectedValue || name}</p>
        <Image
          alt={name}
          src={'/images/downArrow.svg'}
          height={20}
          width={20}
        />
      </button>
      {isOpen ? (
        <div
          ref={ref}
          className="dark:bg-[#201F25] absolute rounded-md top-full right-0 w-full z-20 shadow-md max-h-[600px] overflow-y-scroll"
        >
          {isSearchEnabled ? (
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="block px-1 w-full py-1 pl-2 dark:bg-[#151419] sticky top-0 rounded-md dark:text-white placeholder-gray-400 border border-[#32313A] focus:border-[#32313A] focus:outline-none"
            />
          ) : null}

          <ul>
            <li
              onClick={() => {
                delete query[onClickItemQuery];
                onClickItemQuery &&
                  router.push(`${pathname}?${objectToURL(query)}`);
                setisOpen(false);
                setSelectedValue(null);
              }}
            >
              <a className="flex items-center dark:text-white flex-1 p-3 text-sm font-normal ">
                {'All'}
              </a>
            </li>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item) => {
                return (
                  <li
                    onClick={() => {
                      const allQuery = {
                        ...query,
                        [onClickItemQuery]: item?.id,
                      };

                      onClickItemQuery &&
                        router.push(`${pathname}?${objectToURL(allQuery)}`);
                      setisOpen(false);
                      setSelectedValue(item?.name);
                    }}
                    className="cursor-pointer"
                    key={item}
                  >
                    <a className="flex items-center hover:bg-[#151419] dark:text-white flex-1 p-3 text-sm font-normal ">
                      {item?.name}
                    </a>
                  </li>
                );
              })
            ) : (
              <p className="p-2 dark:text-white ">No Data found</p>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
