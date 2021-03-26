import { getStorage, StorageChangeEvent, StorageType } from '@la-danze-ui/core/hooks/useStorage/storage';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

interface Options<T> {
  defaultValue?: T;
  storage: StorageType;
}

export function useStorage<T>(
  key: string,
  options: Options<T> = { storage: 'localStorage' }
): [T | undefined, (value: T, options?: Cookies.CookieAttributes) => void, (options?: Cookies.CookieAttributes) => void] {
  const store = getStorage<T>(options.storage);
  const [value, setValue] = useState(store.get(key, options.defaultValue));
  const listener = ((event: StorageChangeEvent<T>) => {
    if (event.detail.value !== value) {
      setValue(event.detail.value);
    }
  }) as EventListener;

  useEffect(() => {
    store.watch(key, listener);
    return () => {
      store.unwatch(key);
    };
  });

  const set = (value: T, options?: Cookies.CookieAttributes) => store.set(key, value, options);

  const remove = (options?: Cookies.CookieAttributes) => store.remove(key, options);

  return [value, set, remove];
}
