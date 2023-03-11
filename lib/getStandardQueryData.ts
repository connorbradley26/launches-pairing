export function getStandardQueryData(id?: string) {
  const query = id
    ? {
        _id: id,
        success: { 
            $in: [true, false] 
        }
      }
    : {
        success: { 
            $in: [true, false] 
        }
      };
  return query;
}
