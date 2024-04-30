// import React, { useState } from 'react';

// function ListingPage() {
//     const [selectedItems, setSelectedItems] = useState([]);
//     const [allItems, setAllItems] = useState([
//         "1 -Anticyclones, hanging even now over India, link warming to heat | Explained",
//         "2 -Jayden Daniels, insensible aux spéculations sur le repêchage de la NFL, serait heureux d'avoir une place avec les commandants de Washington",
//         "3 -El presidente español Sánchez suspende sus funciones públicas en medio de la acusación de corrupción de su esposa",
//         "4 -Aumenta a 33.686 mártires y 76.309 heridos el número de víctimas de la agresión israelí contra la Franja de Gaza",
//         "5 -Apple’s iPadOS to come under the control of stringent EU antitrust regulations",
//         "6 -Avances en la Investigación Desvelan Tratamiento Potencial para el Cáncer de Páncreas"
//     ]);

//     const [selectedItemIndices, setSelectedItemIndices] = useState([]);

//     // const handleMoveItem = (direction) => {
//     //     if (selectedIndices.length !== 2) return;

//     //     const [firstIndex, secondIndex] = selectedIndices;
//     //     const newIndex = direction === 'up' ? firstIndex - 1 : firstIndex + 1;

//     //     if (newIndex >= 0 && newIndex < selectedItems.length) {
//     //         const newSelectedItems = [...selectedItems];
//     //         const temp = newSelectedItems[firstIndex];
//     //         newSelectedItems[firstIndex] = newSelectedItems[newIndex];
//     //         newSelectedItems[newIndex] = temp;

//     //         const newSelectedIndices = selectedIndices.map(index => {
//     //             if (index === firstIndex) return newIndex;
//     //             if (index === newIndex) return firstIndex;
//     //             return index;
//     //         });

//     //         setSelectedItems(newSelectedItems);
//     //         setSelectedIndices(newSelectedIndices);
//     //     }
//     // };

//     // const handleMoveItem = (direction) => {

//     //     console.log(" all selectedItems", selectedItems);
//     //     console.log(" selected index,", selectedItemIndex);

//     //     if (selectedItemIndex.length !== 2) return;

//     //     const [firstIndex, secondIndex] = selectedItemIndex;


//     //     const indexToMove = selectedItemIndex;
//     //     const newIndex = direction === 'up' ? indexToMove - 1 : indexToMove + 1;
//     //     if (newIndex >= 0 && newIndex < selectedItems.length) {

//     //         const newSelectedItems = [...selectedItems];
//     //         const temp = newSelectedItems[indexToMove];
//     //         newSelectedItems[indexToMove] = newSelectedItems[newIndex];
//     //         newSelectedItems[newIndex] = temp;
//     //         setSelectedItems(newSelectedItems);
//     //         setSelectedItemIndex(newIndex);
//     //     }
//     // };

//     // const handleMoveItem = (direction) => {
//     //     if (selectedIndices.length !== 2) return;

//     //     const [firstIndex, secondIndex] = selectedIndices;
//     //     const newIndex = direction === 'up' ? firstIndex - 1 : firstIndex + 1;

//     //     if (newIndex >= 0 && newIndex < selectedItems.length) {
//     //         const newSelectedItems = [...selectedItems];
//     //         const temp = newSelectedItems[firstIndex];
//     //         newSelectedItems[firstIndex] = newSelectedItems[newIndex];
//     //         newSelectedItems[newIndex] = temp;

//     //         const newSelectedIndices = selectedIndices.map(index => {
//     //             if (index === firstIndex) return newIndex;
//     //             if (index === newIndex) return firstIndex;
//     //             return index;
//     //         });

//     //         setSelectedItems(newSelectedItems);
//     //         setSelectedIndices(newSelectedIndices);
//     //     }
//     // };

//     const handleMoveItem = (direction) => {
//         if (selectedItemIndices.length !== 2) return; // Ensure exactly two items are selected

//         const [index1, index2] = selectedItemIndices;
//         const newIndex1 = direction === 'up' ? index1 - 1 : index1 + 1;
//         const newIndex2 = direction === 'up' ? index2 - 1 : index2 + 1;

//         if (newIndex1 >= 0 && newIndex1 < selectedItems.length &&
//             newIndex2 >= 0 && newIndex2 < selectedItems.length) {

//             const newSelectedItems = [...selectedItems];
//             const temp = newSelectedItems[index1];
//             newSelectedItems[index1] = newSelectedItems[newIndex1];
//             newSelectedItems[newIndex1] = temp;

//             temp = newSelectedItems[index2];
//             newSelectedItems[index2] = newSelectedItems[newIndex2];
//             newSelectedItems[newIndex2] = temp;

//             setSelectedItems(newSelectedItems);
//             setSelectedItemIndices([newIndex1, newIndex2]);
//         }
//     };

//     const handleItemClick = (index) => {
//         if (!selectedItemIndices.includes(index)) {
//             setSelectedItemIndices([...selectedItemIndices, index]);
//         }
//     };

//     const handleSide = () => {
//         const newSelectedItems = selectedItemIndices
//             .filter((index) => !selectedItems.includes(allItems[index]))
//             .map((index) => allItems[index]);

//         setSelectedItems([...selectedItems, ...newSelectedItems]);
//         setSelectedItemIndices([]);
//     };

//     return (
//         <div className='maincontainer'>
//             <div className="box">
//                 <h6>All items</h6>
//                 <div>
//                     <ul className="news-list">
//                         {allItems.map((item, index) => (
//                             <li key={index}>
//                                 <button
//                                     className={`news-item active ${selectedItemIndices.includes(index) ? 'selected' : ''}`}
//                                     onClick={() => handleItemClick(index)}
//                                 >
//                                     <h4>{item}</h4>
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             <div className='box btn-wrapper'>
//                 <button>
//                     <img width={"12px"} src="https://www.svgrepo.com/show/70596/left-arrow.svg" alt='btn' />
//                 </button>
//                 <button onClick={handleSide}>
//                     <img width={"12px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRga9lBVVw6reQpry-BgPCVeVw9MWyUYa-BN8hOYv-ucA&s" title="top icons" alt='btn' />
//                 </button>
//             </div>
//             <div className='box'>
//                 <div className='only-flex'>
//                     <h6>Selected items</h6>
//                     <ul className="news-list">
//                         {selectedItems.map((item, index) => (
//                             <li key={index}>
//                                 <button
//                                     className={`news-item active ${selectedItemIndices.includes(index) ? 'selected' : ''}`}
//                                     onClick={() => handleItemClick(index)}
//                                 >
//                                     <h4>{item}</h4>
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             <div className='up-btn-wrap wrap-flex'>
//                 <button onClick={() => handleMoveItem('up')}>
//                     Move Up
//                 </button>
//                 <br />
//                 <button onClick={() => handleMoveItem('down')}>
//                     Move Down
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default ListingPage;
import React, { useState } from 'react';

function ListingPage() {

    const [selectedItems, setSelectedItems] = useState([]); //all items selected
    const [selectedItemIndex, setSelectedItemIndex] = useState(null); // selected to move index
    const [selectedIndices, setSelectedIndices] = useState([]); //all items select
    const [allItems, setAllItems] = useState([
        "1 -Anticyclones, hanging even now over India, link warming to heat | Explained",
        "2 -Jayden Daniels, insensible aux spéculations sur le repêchage de la NFL, serait heureux d'avoir une place avec les commandants de Washington",
        "3 -El presidente español Sánchez suspende sus funciones públicas en medio de la acusación de corrupción de su esposa",
        "4 -Aumenta a 33.686 mártires y 76.309 heridos el número de víctimas de la agresión israelí contra la Franja de Gaza",
        "5 -Avances en la Investigación Desvelan Tratamiento Potencial para el Cáncer de Páncreas",
        "6 -sAumenta a 33.686 mártires y 76.309 heridos el número de víctimas de la agresión israelí contra la Franja de Gaza"
    ]);

    const [isUpButtonClicked, setIsUpButtonClicked] = useState(false);
    const [isDownButtonClicked, setIsDownButtonClicked] = useState(false);

    const handleMoveItem = (direction) => {
        if (selectedItemIndex === null) return;

        const indexToMove = selectedItemIndex;
        const newIndex = direction === 'up' ? indexToMove - 1 : indexToMove + 1;
        if (newIndex >= 0 && newIndex < selectedItems.length) {

            const newSelectedItems = [...selectedItems];
            const temp = newSelectedItems[indexToMove];
            newSelectedItems[indexToMove] = newSelectedItems[newIndex];
            newSelectedItems[newIndex] = temp;
            setSelectedItems(newSelectedItems);
            setSelectedItemIndex(newIndex);
        }
    };

    const handleItemClick = (index) => {
        if (!selectedIndices.includes(index) && selectedIndices.length < 2) {
            setSelectedIndices([...selectedIndices, index]);
        }
    };

    const handleSide = () => {
        const newSelectedItems = selectedIndices
            .filter((index) => !selectedItems.includes(allItems[index]))
            .map((index) => allItems[index]);

        setSelectedItems([...selectedItems, ...newSelectedItems]);
        setSelectedIndices([]);
    };

    const handleItemClicked = (index) => {
        setSelectedItemIndex(index);
        console.log("selected", selectedItemIndex);
    };

    return (
        <div className='maincontainer'>
            <div className="box">
                <h6>All items</h6>
                <div>
                    <ul className="news-list">
                        {allItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    className="news-item active"
                                    onClick={() => handleItemClick(index)}
                                >
                                    <h4>{item}</h4>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='box btn-wrapper'>
                <button>
                    <img width={"12px"} src="https://www.svgrepo.com/show/70596/left-arrow.svg" alt='btn' />
                </button>
                <button onClick={handleSide}>
                    <img width={"12px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRga9lBVVw6reQpry-BgPCVeVw9MWyUYa-BN8hOYv-ucA&s" title="top icons" alt='btn' />
                </button>
            </div>

            <div className='box'>
                <div className='only-flex'>
                    <h6>Selected items</h6>
                    <ul className="news-list">
                        {selectedItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    className={`news-item active ${selectedIndices.includes(index) ? 'selected' : ''}`}
                                    onClick={() => handleItemClicked(index)}
                                >
                                    <h4>{item}</h4>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='up-btn-wrap wrap-flex'>
                <button
                    className="up-button"
                    onClick={() => { handleMoveItem('up'); setIsUpButtonClicked(true); }}
                    style={{ backgroundColor: isUpButtonClicked ? 'green' : 'transparent' }}
                >
                    <img width={"12px"} src="https://w7.pngwing.com/pngs/405/699/png-transparent-black-up-arrow-icon-brand-pattern-up-arrow-angle-web-design-text-thumbnail.png" title="top icons" alt='btn' />
                </button>
                <br />
                <button
                    className="down-button"
                    onClick={() => { handleMoveItem('down'); setIsDownButtonClicked(true); }}
                    style={{ backgroundColor: isDownButtonClicked ? 'red' : 'transparent' }}
                >
                    <img width={"12px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dhwvtOZi_f-YhgpCcs40ZxBvEWup8sSnoTrKoi-Zo7aCgPpbviimmGX0maWFscstruY&usqp=CAU" title="top icons" alt='btn' />
                </button>
            </div>
        </div>
    );
}

export default ListingPage;
// const handleMoveItem = (direction) => {

//     console.log(" all selectedItems", selectedItems);
//     console.log(" selected index,", selectedItemIndex);

//     if (selectedItemIndex === null) return;

//     const indexToMove = selectedItemIndex;
//     const newIndex = direction === 'up' ? indexToMove - 1 : indexToMove + 1;
//     if (newIndex >= 0 && newIndex < selectedItems.length) {

//         const newSelectedItems = [...selectedItems];
//         const temp = newSelectedItems[indexToMove];
//         newSelectedItems[indexToMove] = newSelectedItems[newIndex];
//         newSelectedItems[newIndex] = temp;
//         setSelectedItems(newSelectedItems);
//         setSelectedItemIndex(newIndex);
//     }
// };

    // const handleMoveItem = (direction) => {
    //     if (selectedItemIndex.length !== 2) return; // Ensure exactly two items are selected

    //     const [index1, index2] = selectedItemIndex;
    //     const newIndex1 = direction === 'up' ? index1 - 1 : index1 + 1;
    //     const newIndex2 = direction === 'up' ? index2 - 1 : index2 + 1;

    //     if (newIndex1 >= 0 && newIndex1 < selectedItems.length &&
    //         newIndex2 >= 0 && newIndex2 < selectedItems.length) {

    //         const newSelectedItems = [...selectedItems];
    //         const temp = newSelectedItems[index1];
    //         newSelectedItems[index1] = newSelectedItems[newIndex1];
    //         newSelectedItems[newIndex1] = temp;

    //         temp = newSelectedItems[index2];
    //         newSelectedItems[index2] = newSelectedItems[newIndex2];
    //         newSelectedItems[newIndex2] = temp;

    //         setSelectedItems(newSelectedItems);
    //         setSelectedItemIndex([newIndex1, newIndex2]);
    //     }
    // };
    
    // const handleMoveItem = (direction) => {

    //     console.log(" all selectedItems", selectedItems);
    //     console.log(" selected index,", selectedItemIndex);

    //     if (selectedItemIndex.length !== 2) return; // Ensure exactly two items are selected

    //     const [index1, index2] = selectedItemIndex;
    //     const newIndex1 = direction === 'up' ? index1 - 1 : index1 + 1;
    //     const newIndex2 = direction === 'up' ? index2 - 1 : index2 + 1;
    //     if (newIndex1 >= 0 && newIndex1 < selectedItems.length &&
    //         newIndex2 >= 0 && newIndex2 < selectedItems.length) {
    //         const newSelectedItems = [...selectedItems];
    //         const temp = newSelectedItems[index1];
    //         newSelectedItems[index1] = newSelectedItems[newIndex1];
    //         newSelectedItems[newIndex1] = temp;

    //         const temp1 = newSelectedItems[index2];

    //         newSelectedItems[index2] = newSelectedItems[newIndex2];
    //         newSelectedItems[newIndex2] = temp1;

    //         setSelectedItems(newSelectedItems);
    //         setSelectedItemIndex([newIndex1, newIndex2]);
    //     }
    // };