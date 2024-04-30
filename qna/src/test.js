
    // const handleMoveItem = (direction) => {

    //     console.log(" all selectedItems", selectedItems);
    //     console.log(" selected index,", selectedItemIndex);
    //     // console.log("selectedIndices", selectedIndices);
    //     if (selectedItems.length !== 1) return;

    //     const selectedIndex = selectedItems;

    //     const newIndex = direction === 'up' ? selectedIndex - 1 : selectedIndex + 1;

    //     if (newIndex >= 0 && newIndex < selectedItems.length) {

    //         const newSelectedItems = [...selectedItems];
    //         const temp = newSelectedItems[selectedIndex];
    //         newSelectedItems[selectedIndex] = newSelectedItems[newIndex];
    //         newSelectedItems[newIndex] = temp;
    //         setSelectedItems(newSelectedItems);
    //         console.log("Selected index:", selectedItems);
    //         setSelectedIndices([newIndex]);
    //     }
    // };
    
    
    
    -------
    // const handleMoveUp = (index) => {
//     if (index > 0) {
//         const newSelectedItems = [...selectedItems];
//         const temp = newSelectedItems[index];
//         newSelectedItems[index] = newSelectedItems[index - 1];
//         newSelectedItems[index - 1] = temp;
//         setSelectedItems(newSelectedItems);
//     }
// };

// const handleMoveDown = (index) => {
//     if (index < selectedItems.length - 1) {
//         const newSelectedItems = [...selectedItems];
//         const temp = newSelectedItems[index];
//         newSelectedItems[index] = newSelectedItems[index + 1];
//         newSelectedItems[index + 1] = temp;
//         setSelectedItems(newSelectedItems);
//     }
// };

// ...

// <div className='box'>
//     <div className='only-flex'>
//         <h6>Selected items</h6>
//         <ul className="news-list">
//             {selectedItems.map((item, index) => (
//                 <li key={index}>
//                     <button className="news-item active">
//                         <h4> {item}</h4>
//                     </button>
//                     <div>
//                         <button onClick={() => handleMoveUp(index)}>
//                             <img width={"12px"} src="https://w7.pngwing.com/pngs/405/699/png-transparent-black-up-arrow-icon-brand-pattern-up-arrow-angle-web-design-text-thumbnail.png" alt='btn' />
//                         </button>
//                         <button onClick={() => handleMoveDown(index)}>
//                             <img width={"12px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dhwvtOZi_f-YhgpCcs40ZxBvEWup8sSnoTrKoi-Zo7aCgPpbviimmGX0maWFscstruY&usqp=CAU" alt='btn' />
//                         </button>
//                     </div>
//                 </li>
//             ))}
//         </ul>
//     </div>
// </div>


//-------
  // const handleMoveUp = (index) => {
    //     if (index > 0) {
    //         const newSelectedItems = [...selectedItems];
    //         const temp = newSelectedItems[index];
    //         newSelectedItems[index] = newSelectedItems[index - 1];
    //         newSelectedItems[index - 1] = temp;
    //         setSelectedItems(newSelectedItems);
    //     }
    // };

    // const handleMoveDown = (index) => {
    //     if (index < selectedItems.length - 1) {
    //         const newSelectedItems = [...selectedItems];
    //         const temp = newSelectedItems[index];
    //         newSelectedItems[index] = newSelectedItems[index + 1];
    //         newSelectedItems[index + 1] = temp;
    //         setSelectedItems(newSelectedItems);
    //     }
    // };
