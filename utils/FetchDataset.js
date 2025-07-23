export async function fetchDatasets(params = {}) {
  const baseUrl = "https://api.datakeep.civicdays.in/api/search/dataset/";
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams.append(key, value.toString());
    }
  });

  const url = `${baseUrl}?${searchParams.toString()}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return await response.json();
}
