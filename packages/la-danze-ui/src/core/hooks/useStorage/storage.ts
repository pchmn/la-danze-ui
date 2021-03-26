import Cookies from 'js-cookie';

export type StorageType = 'localStorage' | 'sessionStorage' | 'cookieStorage';
export class StorageChangeEvent<T> extends CustomEvent<{value: T, cause?: 'write' | 'remove'}> {
}

abstract class Store<T> {

  protected listener: EventListener | undefined;

  constructor(protected storageType: StorageType) {
  }

  abstract set(key: string, value: T, options?: Cookies.CookieAttributes): void;
  abstract get(key: string, defaultValue?: T): T | undefined;
  abstract remove(key: string, options?: Cookies.CookieAttributes): void;

  watch(key: string, listener: (event: StorageChangeEvent<T>) => void): void {
    this.listener = listener as EventListener;
    window.addEventListener(`${this.storageType}:${key}`, this.listener);
  }

  unwatch(key: string): void {
    if (this.listener) {
      window.removeEventListener(`${this.storageType}:${key}`, this.listener);
    }
  }
}

export class HTML5Store<T> extends Store<T> {

  private storage: Storage;

  constructor(protected storageType: StorageType) {
    super(storageType);
    this.storage = storageType === 'localStorage' ? localStorage : sessionStorage;
  }

  set(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
    dispatchStorageEvent(`${this.storageType}:${key}`, value, 'write');
  }

  get(key: string, defaultValue?: T): T | undefined {
    const item = this.storage.getItem(key);

    if (item !== null) {
      return JSON.parse(item);
    }

    return defaultValue;
  }

  remove(key: string): void {
    this.storage.removeItem(key);
    dispatchStorageEvent(`${this.storageType}:${key}`, undefined, 'remove');
  }

}

export class CookieStore<T> extends Store<T> {

  constructor(protected storageType: StorageType) {
    super(storageType);
  }

  set(key: string, value: T, options?: Cookies.CookieAttributes): void {
    Cookies.set(key, JSON.stringify(value), options);
    dispatchStorageEvent(`${this.storageType}:${key}`, value, 'write');
  }

  get(key: string, defaultValue?: T): T | undefined {
    const item = Cookies.get(key);

    if (item !== undefined) {
      return JSON.parse(item);
    }
  
    return defaultValue;
  }

  remove(key: string, options?: Cookies.CookieAttributes): void {
    Cookies.remove(key, options);
    dispatchStorageEvent(`${this.storageType}:${key}`, undefined, 'remove');
  }

}

function dispatchStorageEvent<T>(eventName: string, value: T, cause?: 'write' | 'remove'): void {
  window.dispatchEvent(
    new StorageChangeEvent(eventName, {
      detail: {
        value,
        cause
      }
    })
  );
}

export function getStorage<T>(storageType: StorageType): Store<T> {
  switch (storageType) {
    case 'cookieStorage': return new CookieStore<T>(storageType);
    default: return new HTML5Store<T>(storageType);
  }
}