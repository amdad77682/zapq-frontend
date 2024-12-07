import Image from 'next/image';
import React, { useState } from 'react';
import { Imeta } from './models';
import { useOutsideHandler } from './hooks/useOutsideHandler';
import { objectToURL } from 'src/utils/queryString';
import { usePathname, useRouter } from 'next/navigation';
import useNavigation from './hooks/useNavigation';

export default function Pagination({ meta }: { meta: Imeta }) {
  const [isOpen, setisOpen] = useState(false);
  const ref = React.useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const { query } = useNavigation();
  useOutsideHandler(ref, () => isOpen && setisOpen(false));
  const onClickNext = (url: string) => {
    if (!url) {
      return;
    }
    const currectPage = Number(query?.page || 0) + 1;
    const queryObj = {
      ...query,
      page: currectPage,
      limit: Number(query?.limit || 15),
    };
    router.push(`${pathname}?${objectToURL(queryObj)}`);
  };
  const onClickPrev = (url: string) => {
    if (!url) {
      return;
    }
    const currectPage = Number(query?.page || 0) - 1;
    const queryObj = {
      ...query,
      page: currectPage,
      limit: Number(query?.limit || 15),
    };
    router.push(`${pathname}?${objectToURL(queryObj)}`);
  };
  const onClickNav = (label: string) => {
    if (!label) {
      return;
    }
    const queryObj = {
      ...query,
      page: label,
      limit: Number(query?.limit || 15),
    };
    router.push(`${pathname}?${objectToURL(queryObj)}`);
  };
  return (
    <div className="flex flex-wrap items-center justify-between py-1 gap-2">
      <span className="block pb-1 text-xs font-medium text-gray-500 md:text-sm">
        Showing {meta?.from ?? 0} of {meta?.to ?? 0} items
      </span>
      <div className="flex flex-wrap gap-2 items-center space-x-2">
        {Array.isArray(meta?.links) &&
          meta.links.map((item) => {
            if (item?.label.includes('Previous')) {
              return (
                <button
                  onClick={() => onClickPrev(item?.url as string)}
                  key={item?.label}
                  className="flex items-center justify-center w-8 h-8 p-1 dark:text-[#FFFFFF] dark:bg-[#151419] transition-colors duration-300  rounded-md border border-[#323236] "
                >
                  <Image
                    alt="left arrow"
                    src={'/images/leftArrow.svg'}
                    height={20}
                    width={20}
                  />
                </button>
              );
            }

            if (item.label.includes('Next')) {
              return (
                <button
                  onClick={() => onClickNext(item?.url as string)}
                  key={item?.label}
                  className="flex items-center justify-center w-8 h-8 p-1 dark:text-[#FFFFFF] dark:bg-[#151419] transition-colors duration-300  rounded-md border border-[#323236]"
                >
                  <Image
                    alt="left arrow"
                    src={'/images/rightArrow.svg'}
                    height={20}
                    width={20}
                  />
                </button>
              );
            }
            return (
              <button
                onClick={() => onClickNav(item?.label as string)}
                key={item?.label}
                className={` ${
                  query?.page == item?.label
                    ? 'dark:bg-gray-500'
                    : 'dark:bg-[#151419]'
                } flex items-center justify-center w-8 h-8 p-1 text-xs font-semibold dark:text-[#FFFFFF]  transition-colors duration-300 rounded-md md:text-sm border border-[#323236] `}
              >
                {item?.label}
              </button>
            );
          })}
        <div className="relative">
          <button
            onClick={() => setisOpen(true)}
            className="flex items-center justify-center gap-1 w-[94px] h-8 p-1 dark:text-[#FFFFFF] dark:bg-[#151419] transition-colors duration-300  rounded-md border border-[#323236]"
          >
            {meta?.per_page}/page
            <Image
              alt="down arrow"
              src={'/images/downArrow.svg'}
              height={12}
              width={12}
            />
          </button>
          {isOpen ? (
            <ul
              ref={ref}
              className="dark:bg-[#201F25] absolute top-full right-0 w-full z-20"
            >
              {[10, 20, 30, 40, 50, 100].map((item) => {
                return (
                  <li
                    onClick={() => {
                      const allQuery = {
                        ...query,
                        page: 1,
                        limit: item,
                      };
                      router.push(`${pathname}?${objectToURL(allQuery)}`);
                      setisOpen(false);
                    }}
                    key={item}
                  >
                    <a className="flex items-center dark:text-white flex-1 p-3 text-sm font-normal ">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
