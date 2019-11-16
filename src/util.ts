

function getPublicPath(): string {
  const path = process.env.BASE_URL || "/";
  return path.endsWith("/") ? path : `${path}/`;
}

const publicPath = getPublicPath();

export function resolvePublicPath(child: string): string {
  const c = child.startsWith("/") ? child.substring(1) : child;
  return `${publicPath}${c}`;
}
