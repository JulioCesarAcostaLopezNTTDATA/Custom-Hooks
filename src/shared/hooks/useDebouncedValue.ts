import { useEffect, useState } from "react";

/**
 * Devuelve una versión "debounced" del valor después de N ms sin cambios.
 * Útil para inputs de búsqueda, filtros y cualquier cálculo costoso derivado del valor.
 */
export function useDebouncedValue<T>(value: T, delayMs: number = 300): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const t = window.setTimeout(() => setDebounced(value), delayMs);
    return () => window.clearTimeout(t);
  }, [value, delayMs]);

  return debounced;
}
