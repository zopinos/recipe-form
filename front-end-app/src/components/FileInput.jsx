const FileInput = ({ handleFile }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        handleFile(json);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        alert('Invalid JSON file.');
      }
    };

    if (file) {
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <label className="button-text" htmlFor='button-import' >
        <span>Avaa resepti</span>
      </label>
      <input
        type="file"
        id='button-import'
        accept=".json"
        onChange={handleFileChange}
        onClick={(event) => event.target.value = null}
      />
    </div>
  );
};

export default FileInput;