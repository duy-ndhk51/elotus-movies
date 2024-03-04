import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export function useCurrentPage() {
  const currentParams = useSearchParams();
  const currentPage = useMemo(() => {
    const page = Number(currentParams?.get('page'));
    return !Number.isNaN(page) && page !== 0 ? page : 1;
  }, [currentParams]);
  return currentPage;
}
