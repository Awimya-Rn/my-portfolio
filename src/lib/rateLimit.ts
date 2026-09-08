const rateMap = new Map<string, { count: number; resetTime: number }>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

export function rateLimit(ip: string): { success: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateMap.get(ip);

  // Clean up expired entries periodically
  if (rateMap.size > 1000) {
    for (const [key, val] of rateMap.entries()) {
      if (now > val.resetTime) rateMap.delete(key);
    }
  }

  if (!entry || now > entry.resetTime) {
    rateMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return { success: true, remaining: MAX_REQUESTS - 1 };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { success: false, remaining: 0 };
  }

  entry.count++;
  return { success: true, remaining: MAX_REQUESTS - entry.count };
}
