import { Button } from 'react-bootstrap';

const GroceryList = ({ items, removeItem, clearList }) => {

  return (
    <div style={{ 
      textAlign: 'center', // Center align text within the container
      position: 'fixed', 
      top: '50px', 
      right: '10px', 
      backgroundColor: 'white', 
      padding: '10px', 
      width: '250px',
      height: '350px',
      maxHeight: '650px',  // Adjust the maximum height as needed
      overflowY: 'auto',    // Enable vertical scrolling
      border: '2px solid #ccc', // Add border with defined color and width
      borderRadius: '5px', // Optional: add border radius for rounded corners
      display: 'flex',      // Use flexbox layout
      flexDirection: 'column', // Arrange children in a column
    }}>
      <h3>Grocery List</h3>
      <ul style={{ 
        listStyle: 'none', 
        padding: 0,
        flex: 1,    // Fill remaining space
        marginBottom: '10px', // Adjust margin for spacing
        overflowY: 'auto', // Enable scrolling for the list
      }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>
            {item}
            <Button 
              variant="danger" 
              size="sm" 
              onClick={() => removeItem(index)} 
              style={{ marginLeft: '5px' }}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
      <Button 
        variant="danger" 
        onClick={clearList} 
        style={{ marginTop: '10px' }}
      >
        Clear List
      </Button>
    </div>
  );
};

export default GroceryList;