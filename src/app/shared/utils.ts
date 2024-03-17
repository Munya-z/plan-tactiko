export function generateID() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export function initializeLocalStorage(keys: string[]) {
  keys.forEach((key) => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, '');
    }
  });
}

export function getItemIndex(initialArray: any[], item: any) {
  return initialArray.findIndex((arrayItem: any) => arrayItem.id === item.id);
}

export function updateData(
  localDataArrayName: string,
  originalData: any,
  updatedData: any
) {
  originalData.update((ogData: any[]) => {
    return ogData.map((data: any) => {
      return data.id === updatedData.id ? updatedData : data;
    });
  });

  localStorage.setItem(localDataArrayName, JSON.stringify(originalData));
}
