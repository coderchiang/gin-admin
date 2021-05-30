import { getCurrentInstance } from 'vue';

// expose public app
export function useExpose<T>(apis: T) {
  const instance = getCurrentInstance();
  if (instance) {
    Object.assign(instance.proxy, apis);
  }
}
