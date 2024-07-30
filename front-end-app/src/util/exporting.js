const exportObjectAsJSON = (filename, dataObjToWrite) => {
  const blob = new Blob([JSON.stringify(dataObjToWrite, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
};

export default exportObjectAsJSON;