import React, { useState } from 'react';

function ListingPage() {

    const [selectedItems, setSelectedItems] = useState([
        "G7 eyes possible end date for coal-fired power plants",
        "Columbia protests LIVE updates | University president asks police to remain on campus until May 17"
    ]);

    // const [selectedItems, setSelectedItems] = useState([]); //all items selected
    const [selectedItemIndex, setSelectedItemIndex] = useState([]); // selected to move index
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


    // const handleMoveItem = (direction) => {

    //     console.log(" all selectedItems", selectedItems);
    //     console.log(" selected index,", selectedItemIndex);

    //     if (selectedItemIndex.length === 1) {
    //         const indexToMove = selectedItemIndex[0];
    //         let newIndex = direction === 'up' ? indexToMove - 1 : indexToMove + 1;
    //         if (newIndex >= 0 && newIndex < selectedItems.length) {
    //             const newSelectedItems = [...selectedItems];
    //             const itemToMove = newSelectedItems.splice(indexToMove, 1)[0]; //remove  item from its current position
    //             newSelectedItems.splice(newIndex, 0, itemToMove); //insert item at new position
    //             setSelectedItems(newSelectedItems);
    //             console.log("newSelectedItems", newSelectedItems);
    //             setSelectedItemIndex([newIndex]);
    //             console.log("newIndex", newIndex);
    //         }
    //     } else if (selectedItemIndex.length === 2) {
    //         const [index1, index2] = selectedItemIndex;

    //         let newIndex1 = direction === 'up' ? index1 - 1 : index1 + 1;
    //         let newIndex2 = direction === 'up' ? index2 - 1 : index2 + 1;

    //         if (newIndex1 >= 0 && newIndex1 < selectedItems.length &&
    //             newIndex2 >= 0 && newIndex2 < selectedItems.length) {
    //             const newSelectedItems = [...selectedItems];
    //             const itemToMove1 = newSelectedItems.splice(index1, 1)[0]; //remove first item
    //             const itemToMove2 = newSelectedItems.splice(index2 - 1, 1)[0]; //remove  second item adjust 
    //             newSelectedItems.splice(newIndex1, 0, itemToMove1); //insert first item at new position
    //             newSelectedItems.splice(newIndex2, 0, itemToMove2); //insert second item atnew position

    //             setSelectedItems(newSelectedItems);

    //             console.log("in multi newSelectedItems", newIndex1, newIndex2);
    //             setSelectedItemIndex([newIndex1, newIndex2]);
    //         }
    //     }
    // };

    const handleMove = () => {
        let newSelectedItems = [...selectedItems];
        let newAllItems = [...allItems];

        const sortedSelectedIndices = [...selectedItemIndex].sort((a, b) => a - b);

        sortedSelectedIndices.forEach((index) => {
            const itemToMove = newSelectedItems.splice(index, 1)[0];
            newAllItems.push(itemToMove);
        });

        setSelectedItems(newSelectedItems);
        setAllItems(newAllItems);
        setSelectedItemIndex([]);
    };

    const handleMoveItem = (direction) => {
        console.log(" all selectedItems", selectedItems);
        console.log(" selected index,", selectedItemIndex);

        if (selectedItemIndex.length === 1) {
            const indexToMove = selectedItemIndex[0];
            let newIndex = direction === 'up' ? indexToMove - 1 : indexToMove + 1;
            if (newIndex >= 0 && newIndex < selectedItems.length) {
                const newSelectedItems = [...selectedItems];
                const itemToMove = newSelectedItems.splice(indexToMove, 1)[0];
                newSelectedItems.splice(newIndex, 0, itemToMove);
                setSelectedItems(newSelectedItems);
                console.log("newSelectedItems", newSelectedItems);
                setSelectedItemIndex([newIndex]);
                console.log("newIndex", newIndex);
            }
        } else if (selectedItemIndex.length === 2) {
            const [index1, index2] = selectedItemIndex;

            let newIndex1 = direction === 'up' ? index1 - 1 : index1 + 1;
            let newIndex2 = direction === 'up' ? index2 - 1 : index2 + 1;

            if (direction === 'up') {
                if (index2 > index1) {
                    newIndex2 = index1; // Move the lower item to the position of the middle item
                }
            } else { // direction === 'down'
                if (index2 < index1) {
                    newIndex2 = index1; // Move the lower item to the position of the middle item
                }
            }

            if (newIndex1 >= 0 && newIndex1 < selectedItems.length &&
                newIndex2 >= 0 && newIndex2 < selectedItems.length) {
                const newSelectedItems = [...selectedItems];
                const itemToMove1 = newSelectedItems.splice(index1, 1)[0];
                const itemToMove2 = newSelectedItems.splice(index2 - 1, 1)[0];
                newSelectedItems.splice(newIndex1, 0, itemToMove1);
                newSelectedItems.splice(newIndex2, 0, itemToMove2);
                setSelectedItems(newSelectedItems);
                console.log("in multi newSelectedItems", newIndex1, newIndex2);
                setSelectedItemIndex([newIndex1, newIndex2]);
            }
        } else if (selectedItemIndex.length === 3) {
            const [index1, index2, index3] = selectedItemIndex;

            let newIndex1 = direction === 'up' ? index1 - 1 : index1 + 1;
            let newIndex2 = direction === 'up' ? index2 - 1 : index2 + 1;
            let newIndex3 = direction === 'up' ? index3 - 1 : index3 + 1;

            if (direction === 'up') {
                if (index2 > index1) {
                    newIndex2 = index1; // Move the lower item to the position of the middle item
                }
            } else { // direction === 'down'
                if (index2 < index1) {
                    newIndex2 = index1; // Move the lower item to the position of the middle item
                }
            }

            if (newIndex1 >= 0 && newIndex1 < selectedItems.length &&
                newIndex2 >= 0 && newIndex2 < selectedItems.length &&
                newIndex3 >= 0 && newIndex3 < selectedItems.length) {
                const newSelectedItems = [...selectedItems];
                const itemToMove1 = newSelectedItems.splice(index1, 1)[0];
                const itemToMove2 = newSelectedItems.splice(index2 - 1, 1)[0];
                const itemToMove3 = newSelectedItems.splice(index3 - 2, 1)[0];
                newSelectedItems.splice(newIndex1, 0, itemToMove1);
                newSelectedItems.splice(newIndex2, 0, itemToMove2);
                newSelectedItems.splice(newIndex3, 0, itemToMove3);
                setSelectedItems(newSelectedItems);
                console.log("in multi newSelectedItems", newIndex1, newIndex2, newIndex3);
                setSelectedItemIndex([newIndex1, newIndex2, newIndex3]);
            }
        }
    };


    const handleItemClick = (index) => {
        if (!selectedIndices.includes(index) && selectedIndices.length < 3) {
            setSelectedIndices([...selectedIndices, index]);
        }
    };

    const handleSide = () => {
        const newSelectedItems = selectedIndices
            .filter((index) => !selectedItems.includes(allItems[index]))
            .map((index) => allItems[index]);

        const newAllItems = allItems.filter((item, index) => !selectedIndices.includes(index));

        setSelectedItems([...selectedItems, ...newSelectedItems]);
        setAllItems(newAllItems);
        setSelectedIndices([]);
    };


    //selected for up down position change -multiple

    const handleItemClicked = (index) => {
        if (!selectedItemIndex.includes(index) && selectedItemIndex.length < 3) {
            setSelectedItemIndex([...selectedItemIndex, index]);
        }
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
                                    style={{ backgroundColor: selectedIndices.includes(index) ? 'grey' : 'transparent' }}
                                    onClick={() => { handleItemClick(index); setIsUpButtonClicked(true); }}
                                >
                                    <h4 style={{ backgroundColor: isUpButtonClicked ? 'white' : 'transparent' }}>{item}</h4>
                                </button>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='box btn-wrapper'>
                <button onClick={handleMove}>

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
                                    className="news-item active"
                                    style={{ backgroundColor: selectedItemIndex.includes(index) ? 'grey' : 'transparent' }}
                                    onClick={() => { handleItemClicked(index); setIsDownButtonClicked(true); }}
                                >
                                    <h4>{item}</h4>
                                </button>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>

            <div className='up-btn-wrap wrap-flex'>
                <button onClick={() => handleMoveItem('up')}>
                    <img width={"12px"} src="https://w7.pngwing.com/pngs/405/699/png-transparent-black-up-arrow-icon-brand-pattern-up-arrow-angle-web-design-text-thumbnail.png " title="top icons" alt='btn' />
                </button>
                <br />
                <button onClick={() => handleMoveItem('down')}>
                    <img width={"12px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dhwvtOZi_f-YhgpCcs40ZxBvEWup8sSnoTrKoi-Zo7aCgPpbviimmGX0maWFscstruY&usqp=CAU "
                        title="top icons" alt='btn' />
                </button>
            </div>

        </div>
    );
}

export default ListingPage;


