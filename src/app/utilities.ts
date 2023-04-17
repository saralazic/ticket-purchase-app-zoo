export function reloadPage() {
  window.location.reload();
}

export async function sleep(ms: number): Promise<any> {
  return new Promise((r) => setTimeout(r, ms));
}
