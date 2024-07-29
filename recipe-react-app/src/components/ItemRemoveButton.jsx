const ItemRemoveButton = ({ handleDelete }) => {
  return (
    <div className='container-remove-item'>
      <button className='button button-remove-item' type='button' onClick={handleDelete} >
        <svg className='graphics-remove-item' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.2 105.2">
          <path d="M52.6 0A52.6 52.6 0 0 0 0 52.6a52.6 52.6 0 0 0 52.6 52.6 52.6 52.6 0 0 0 52.6-52.6A52.6 52.6 0 0 0 52.6 0zM33.8 26.4a5 5 0 0 1 3.6 1.2l16.7 14.8L66.5 29a5 5 0 0 1 3.5-1.7 5 5 0 0 1 3.6 1.3 5 5 0 0 1 .3 7L61.4 49.3a242 242 0 0 1 16.3 17 5 5 0 0 1-.5 7 5 5 0 0 1-7-.5c-4-4.6-9.3-10-15.5-16-5.7 6.8-11.9 14.8-19.2 25.9a5 5 0 0 1-7 1.4 5 5 0 0 1-1.3-7c7.6-11.6 14.2-20 20.2-27A775 775 0 0 0 31 35.1a5 5 0 0 1-.5-7.1 5 5 0 0 1 3.4-1.7z"/>
        </svg>
      </button>
    </div>
  );
};
  

export default ItemRemoveButton;