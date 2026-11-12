export function initials(name: string) {
  const parts = name.replace(/\(.*?\)/g, '').trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

export function optionLabel(options: { id: string; label: string }[], id?: string) {
  return options.find((o) => o.id === id)?.label ?? '—';
}
