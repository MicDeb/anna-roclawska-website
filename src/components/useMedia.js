import { useEffect, useState, useCallback } from 'react';

export default function useMedia(queries, values, defaultValue) {
  if (typeof window !== 'undefined') {
    const match = useCallback(() => (
      values[queries.findIndex((q) => window.matchMedia(q).matches)] || defaultValue
    ), [defaultValue, queries, values]);
    const [value, set] = useState(match);
    useEffect(() => {
      const handler = () => set(match);
      window.addEventListener('resize', handler);
      // return () => window.removeEventListener(handler);
    }, [match]);
    return value;
  }

  return null;
}
