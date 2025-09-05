import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useLocalStorage<T>(
  initialValue: T,
  key: string,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(function () {
    const stored = localStorage.getItem(key);
    if (stored) setValue(JSON.parse(stored));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  );

  return [value, setValue];
}
