import React, { useState } from 'react';

function ListingPage() {

    const [selectedItems, setSelectedItems] = useState([
        "G7 eyes possible end date for coal-fired power plants",
        "Columbia protests LIVE updates | University president asks police to remain on campus until May 17",
        "Little correlation between higher temperatures and lower turnout: Data",
        "Competition and conflict: On the U.S.-China relationship ",
        "Empowering Strategic Thinkers: IIM Kozhikode’s Advanced Strategic Management Programme",
        "Slow and steady, be more wealthy: More start-ups eye private equity funds, bypass VCs"
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



    const handleMove = () => {
        let newSelectedItems = [...selectedItems];
        let newAllItems = [...allItems];

        const sortedSelectedIndices = [...selectedItemIndex].sort((a, b) => b - a);

        sortedSelectedIndices.forEach((index) => {
            const itemToMove = newSelectedItems.splice(index, 1)[0];
            newAllItems.unshift(itemToMove);
        });

        setSelectedItems(newSelectedItems);
        setAllItems(newAllItems);
        setSelectedItemIndex([]);
    };

    const handleMoveItem = (direction) => {
        console.log("all selectedItems", selectedItems);
        console.log("selected index,", selectedItemIndex);

        const newSelectedItems = [...selectedItems];

        const sortedSelectedIndices = [...selectedItemIndex].sort((a, b) => direction === 'up' ? a - b : b - a);

        sortedSelectedIndices.forEach((index) => {
            let newIndex = direction === 'up' ? index - 1 : index + 1;
            if (newIndex >= 0 && newIndex < newSelectedItems.length) {
                const itemToMove = newSelectedItems.splice(index, 1)[0];
                newSelectedItems.splice(newIndex, 0, itemToMove);
            }
        });

        setSelectedItems(newSelectedItems);

        setSelectedItemIndex(sortedSelectedIndices.map(index => direction === 'up' ? index - 1 : index + 1));
    };

    //the item is not already selected, and fewer than three items are currently selected
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
                <hr />
                <div>
                    {allItems.length === 0 && <p>No result</p>}
                    <ul class="list-group">
                        {allItems.map((item, index) => (
                            <li class="list-group-item list-group-item-secondary" key={index}>
                                <button
                                    style={{ backgroundColor: selectedIndices.includes(index) ? 'darkgreen' : 'transparent' }}
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
                <button type="button" class="btn btn-outline-dark" onClick={handleMove}>
                    <img width={"20px"} src="https://www.svgrepo.com/show/70596/left-arrow.svg" alt='btn' />
                </button> {" "}
                <button type="button" class="btn btn-outline-dark" onClick={handleSide}>
                    <img width={"23px"} src="https://flyclipart.com/thumb2/arrow-symbols-png-png-image-290937.png" title="top icons" alt='btn' />
                </button>
            </div>
            <div className='box'>
                <div className='only-flex'>
                    <h6>Selected items</h6>
                    <hr />
                    {selectedItems.length === 0 && <p>No result</p>}
                    <ul class="list-group">
                        {selectedItems.map((item, index) => (
                            <li class="list-group-item list-group-item-success" key={index}>
                                <button
                                    className="news-item active"
                                    style={{ backgroundColor: selectedItemIndex.includes(index) ? 'white' : 'transparent' }}
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
                <button type="button" class="btn btn-outline-dark" onClick={() => handleMoveItem('up')}>
                    <img width={"20px"} src="https://w7.pngwing.com/pngs/405/699/png-transparent-black-up-arrow-icon-brand-pattern-up-arrow-angle-web-design-text-thumbnail.png " title="top icons" alt='btn' />
                </button>
                <br />
                <br />
                <button type="button" class="btn btn-outline-dark" onClick={() => handleMoveItem('down')}>
                    <img width={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dhwvtOZi_f-YhgpCcs40ZxBvEWup8sSnoTrKoi-Zo7aCgPpbviimmGX0maWFscstruY&usqp=CAU "
                        title="top icons" alt='btn' />
                </button>
            </div>
        </div>
    );

}

export default ListingPage;


