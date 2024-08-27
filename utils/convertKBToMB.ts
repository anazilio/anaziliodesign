export const convertKBToMB = (bytes: number) => {
  const kb = bytes / 1024;
  if (Number(kb.toFixed(0)) <= 1000) return `${kb.toFixed(2)} KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(2)} MB`;
};
