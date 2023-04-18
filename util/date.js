export function getShortDateAndTime(dateString) {
    const dateObj = new Date(dateString);
    
    const shortDate = [
      ('0' + (dateObj.getMonth() + 1)).slice(-2),
      ('0' + dateObj.getDate()).slice(-2),
      String(dateObj.getFullYear()).slice(-2),
    ].join('/');
  
    const time = [
      ('0' + dateObj.getHours()).slice(-2),
      ('0' + dateObj.getMinutes()).slice(-2),
    ].join(':');
  
    return { shortDate, time };
  }
  
  export function groupSetsByDate(sets) {
    const groupedSets = sets.reduce((acc, set) => {
      const dateOnly = set.date.split('T')[0];
      if (!acc[dateOnly]) {
        acc[dateOnly] = [];
      }
      acc[dateOnly].push(set);
      return acc;
    }, {});
  
    return Object.entries(groupedSets).map(([date, data]) => ({ date, data }));
  }
  
  