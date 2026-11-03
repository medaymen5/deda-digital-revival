// Resolves brand photography by key (e.g. "hero-1", "product-the-sage-blazer-1").
// Photos were migrated from deda.tn, optimized to WebP and hosted on the Lovable CDN.
type AssetPointer = { url: string };

const modules = import.meta.glob<AssetPointer>("../assets/deda/*.asset.json", {
  eager: true,
  import: "default",
});

const byKey: Record<string, string> = {};
for (const [path, pointer] of Object.entries(modules)) {
  const file = path.split("/").pop() ?? "";
  byKey[file.replace(/\.webp\.asset\.json$/, "")] = pointer.url;
}

export function img(key: string | null | undefined): string {
  if (!key) return "";
  const url = byKey[key];
  if (!url && import.meta.env.DEV) console.warn(`[images] missing image key: ${key}`);
  return url ?? "";
}
