"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";

function paramsToObject(entries: any): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of entries) {
    result[key] = value;
  }
  return result;
}

export default function useNavigation() {
  const pathname = usePathname();
  const searchParams: any = useSearchParams();
  const params: any = useParams();
  const lang = (params.lang as "en" | "bn") ?? "bn";
  return {
    params: params,
    query: paramsToObject(searchParams.entries()),
    lang: lang,
    pathname,
  };
}
