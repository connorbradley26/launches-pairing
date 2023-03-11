export function getStandardOptionsData(limit: number) {
  return {
    customLabels: {
      docs: 'launches',
    },
    limit: limit,
    sort: {
      date_utc: 'asc',
    },
    select: ['links.patch.small', 'name', 'date_utc', 'success'],
    populate: [
      {
        path: 'payloads',
        select: ['type', 'name'],
      },
      {
        path: 'cores.core',
        select: ['serial'],
      },
    ],
  };
}
