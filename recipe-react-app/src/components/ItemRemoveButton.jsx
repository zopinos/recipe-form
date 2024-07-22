const ItemRemoveButton = ({ handleDelete }) => {
  return (
    <div className='container-remove-item'>
      <button className='button button-remove-item' type='button' onClick={handleDelete} >
        <img className='graphics-remove-item' src='/src/assets/remove-item.svg' />
      </button>
    </div>
  );
};
  

export default ItemRemoveButton;