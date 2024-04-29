// import React from 'react'

// function SelectedNews() {
//     return (
//         <div>
//             <div className="container">
//                 <h6>Selected News</h6>
//                 <div className="container">
//                     {/* <div>
//                         <ul className="news-list">
//                             <li >
//                                 <button
//                                     className="news-item active"
//                                 >
//                                     <h4>
//                                         Anticyclones, hanging even now over India, link warming to heat | Explained
//                                     </h4>

//                                 </button>
//                             </li>
//                             <li  >
//                                 <button
//                                     className="news-item active" >
//                                     <h4>
//                                         Jayden Daniels, insensible aux spéculations sur le repêchage de la NFL,
//                                         serait heureux d'avoir une place avec les commandants de Washington
//                                     </h4>

//                                 </button>
//                             </li>
//                             <li >
//                                 <button
//                                     className="news-item active">
//                                     <h4>

//                                     </h4>

//                                 </button>
//                             </li>
//                             <li
//                             >
//                                 <button className="news-item active">
//                                     <h4>

//                                     </h4>

//                                 </button>
//                             </li>
//                             <li>

//                                 <button
//                                     className="news-item active">
//                                     <h4>

//                                     </h4>
//                                 </button>
//                             </li>
//                         </ul>
//                     </div> */}


//                 </div>
//             </div>



//         </div>
//     )
// }

// export default SelectedNews
import React, { useState } from 'react';

function ListingPage() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [itemToAdd, setItemToAdd] = useState(null);

    const handleItemClick = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const handleMoveDown = () => {
        if (itemToAdd && !selectedItems.includes(itemToAdd)) {
            setSelectedItems([...selectedItems, itemToAdd]);
            setItemToAdd(null);
        }
    };

    return (
        <div className='maincontainer'>
            <div className="box">
                <h6>All items</h6>
                <div>
                    <ul className="news-list">
                        <li >
                            <button
                                className="news-item active"
                                onClick={() => handleItemClick(
                                    "Anticyclones, hanging even now over India, link warming to heat | Explained"
                                )}
                            >
                                <h4>
                                    Anticyclones, hanging even now over India, link warming to heat | Explained
                                </h4>

                            </button>
                        </li>
                        <li  >
                            <button
                                className="news-item active"
                                onClick={() => handleItemClick(
                                    "Jayden Daniels, insensible aux spéculations sur le repêchage de la NFL, serait heureux d'avoir une place avec les commandants de Washington"
                                )}
                            >
                                <h4>
                                    Jayden Daniels, insensible aux spéculations sur le repêchage de la NFL,
                                    serait heureux d'avoir une place avec les commandants de Washington
                                </h4>
                            </button>
                        </li>
                        {/* Add similar buttons for other items */}
                    </ul>
                </div>

            </div>
            <div className='box btn-wrapper'>
                <button>

                    <img width={"12px"} src="https://www.svgrepo.com/show/70596/left-arrow.svg" />
                </button>
                <button onClick={handleMoveDown}>
                    <img width={"12px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRga9lBVVw6reQpry-BgPCVeVw9MWyUYa-BN8hOYv-ucA&s" title="top icons" />
                </button>
            </div>

            <div className='box'>
                <div className='only-flex'>
                    <h6>Selected items</h6>

                    <ul className="news-list">
                        {selectedItems.map((item, index) => (
                            <li key={index}>
                                <button className="news-item active">
                                    <h4>{item}</h4>
                                </button>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
            <div className='up-btn-wrap wrap-flex'>
                <button>
                    <img width={"12px"} src="https://w7.pngwing.com/pngs/405/699/png-transparent-black-up-arrow-icon-brand-pattern-up-arrow-angle-web-design-text-thumbnail.png " title="top icons" alt='btn' />
                </button>
                <br />
                <button>
                    <img width={"12px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dhwvtOZi_f-YhgpCcs40ZxBvEWup8sSnoTrKoi-Zo7aCgPpbviimmGX0maWFscstruY&usqp=CAU "
                        title="top icons" alt='btn' />
                </button>
            </div>
        </div>
    );
}

export default ListingPage;
