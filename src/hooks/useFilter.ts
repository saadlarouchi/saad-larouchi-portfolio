import { useState, useCallback } from 'react';

/**
 * A generic hook to handle filtering logic.
 *
 * @param items The full array of items to filter.
 * @param defaultFilter The initial filter state (usually 'All' or 'all').
 * @param getCategory A function to extract the string category from an item.
 */
export function useFilter<T, K extends string>(
  items: T[],
  defaultFilter: K,
  getCategory: (item: T) => string
) {
  const [activeFilter, setActiveFilter] = useState<K>(defaultFilter);

  // Normalize state values for safe comparisons
  const normalizedActive = activeFilter.trim().toLowerCase();
  const normalizedDefault = defaultFilter.trim().toLowerCase();

  // Always derive displayed items directly (no caching)
  const filteredItems = 
    (normalizedActive === normalizedDefault || normalizedActive === 'all')
      ? items
      : items.filter((item) => {
          const itemCategory = getCategory(item).trim().toLowerCase();
          
          // Strip non-alphanumeric characters to safely match 
          // cases like "E-commerce" (Filter) with "ecommerce" (Data)
          const safeItemCategory = itemCategory.replace(/[^a-z0-9]/g, '');
          const safeActive = normalizedActive.replace(/[^a-z0-9]/g, '');
          
          return safeItemCategory === safeActive;
        });

  // Expose a stable setter
  const setFilter = useCallback((filter: K) => {
    setActiveFilter(filter);
  }, []);

  return { activeFilter, setFilter, filteredItems };
}
