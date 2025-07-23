export const sampleDataset = {
  id: "",
  title: "",
  description: "",
  created_at: "",
  updated_at: "",
  download_count: 0,
  geography: "",
  tags: [],
  formats: [],
  sectors: [],
  organization: {
    name: "",
    id: ""
  }
};

export const sampleFilterState = {
  sectors: [],
  geographies: [],
  tags: [],
  formats: [],
  timePeriods: [],
  licenses: []
};

export const sampleApiResponse = {
  results: [], // Array of datasets
  total: 0,
  aggregations: {
    sectors: {},
    geographies: {},
    tags: {},
    formats: {},
    licenses: {}
  }
};