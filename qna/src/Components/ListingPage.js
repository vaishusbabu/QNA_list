import React, { useState } from 'react';

function ListingPage() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [allItems, setAllItems] = useState([
        "Anticyclones, hanging even now over India, link warming to heat | Explained",
        "Jayden Daniels, insensible aux spéculations sur le repêchage de la NFL, serait heureux d'avoir une place avec les commandants de Washington",
        "El presidente español Sánchez suspende sus funciones públicas en medio de la acusación de corrupción de su esposa",
        "Aumenta a 33.686 mártires y 76.309 heridos el número de víctimas de la agresión israelí contra la Franja de Gaza",
        "Avances en la Investigación Desvelan Tratamiento Potencial para el Cáncer de Páncreas"
    ]);

    const [selectedIndices, setSelectedIndices] = useState([]);

    const handleItemClick = (index) => {
        if (selectedIndices.includes(index)) {
            setSelectedIndices(selectedIndices.filter((selectedIndex) => selectedIndex !== index));
        } else {
            setSelectedIndices([...selectedIndices, index]);
        }
    };

    const handleSide = () => {
        const newSelectedItems = selectedIndices.map((index) => allItems[index]);
        setSelectedItems([...selectedItems, ...newSelectedItems]);
        setSelectedIndices([]);
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
                                    className={`news-item active ${selectedIndices.includes(index) ? 'selected' : ''}`}
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
                        <li >
                            <button
                                className="news-item active"
                            >
                                <h4>
                                    Anticyclones, hanging even now over India, link warming to heat | Explained
                                </h4>

                            </button>
                        </li>
                        <li  >
                            <button
                                className="news-item active" >
                                <h4>
                                    Jayden Daniels, insensible aux spéculations sur le repêchage de la NFL,
                                    serait heureux d'avoir une place avec les commandants de Washington
                                </h4>

                            </button>
                        </li>
                        {selectedItems.map((item) => (
                            <li key={item}>
                                <button className="news-item active">
                                    <h4> {item}</h4>
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


// import React, { useState } from 'react';

// function ListingPage() {
//     const [selectedItems, setSelectedItems] = useState([]);
//     const [itemToAdd, setItemToAdd] = useState(null);

//     const handleItemClick = (item) => {
//         setItemToAdd(item);
//     };

//     const handleSide = () => {
//         if (itemToAdd && !selectedItems.includes(itemToAdd)) {
//             setSelectedItems([...selectedItems, itemToAdd]);
//             setItemToAdd(null);
//         }
//     };

//     return (
//         <div className='maincontainer'>
//             <div className="box">
//                 <h6>All items</h6>
//                 <div>
//                     <ul className="news-list">
//                         <li >
//                             <button

//                                 className="news-item active"
//                                 onClick={() => handleItemClick(
//                                     "Anticyclones, hanging even now over India, link warming to heat | Explained"
//                                 )}
//                             >
//                                 <h4>
//                                     Anticyclones, hanging even now over India, link warming to heat | Explained
//                                 </h4>

//                             </button>
//                         </li>
//                         <li  >
//                             <button

//                                 className="news-item active"
//                                 onClick={() => handleItemClick(
//                                     "Jayden Daniels, insensible aux spéculations sur le repêchage de la NFL, serait heureux d'avoir une place avec les commandants de Washington"
//                                 )}
//                             >
//                                 <h4>
//                                     Jayden Daniels, insensible aux spéculations sur le repêchage de la NFL,
//                                     serait heureux d'avoir une place avec les commandants de Washington
//                                 </h4>

//                             </button>
//                         </li>
//                         <li >
//                             <button

//                                 className="news-item active"
//                                 onClick={() => handleItemClick(
//                                     " El presidente español Sánchez suspende sus funciones públicas en medio de la acusación de corrupción de su esposa"
//                                 )}
//                             >
//                                 <h4>
//                                     El presidente español Sánchez suspende sus funciones públicas en medio
//                                     de la acusación de corrupción de su esposa
//                                 </h4>

//                             </button>
//                         </li>
//                         <li
//                         >
//                             <button

//                                 className="news-item active"

//                                 onClick={() => handleItemClick(
//                                     "Aumenta a 33.686 mártires y 76.309 heridos el número de víctimas de la  agresión israelí contra la Franja de Gazan"
//                                 )}
//                             >
//                                 <h4>
//                                     Aumenta a 33.686 mártires y 76.309 heridos el número de víctimas de la
//                                     agresión israelí contra la Franja de Gaza
//                                 </h4>

//                             </button>
//                         </li>
//                         <li>

//                             <button

//                                 className="news-item active"
//                                 onClick={() => handleItemClick(
//                                     "Avances en la Investigación Desvelan Tratamiento Potencial para elCáncer de Páncreas"
//                                 )}
//                             >
//                                 <h4>
//                                     Avances en la Investigación Desvelan Tratamiento Potencial para el
//                                     Cáncer de Páncreas
//                                 </h4>
//                             </button>
//                         </li>
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
//                         <li >
//                             <button
//                                 className="news-item active"
//                             >
//                                 <h4>
//                                     Anticyclones, hanging even now over India, link warming to heat | Explained
//                                 </h4>

//                             </button>
//                         </li>
//                         <li  >
//                             <button
//                                 className="news-item active" >
//                                 <h4>
//                                     Jayden Daniels, insensible aux spéculations sur le repêchage de la NFL,
//                                     serait heureux d'avoir une place avec les commandants de Washington
//                                 </h4>

//                             </button>
//                         </li>
//                         {selectedItems.map((item) => (
//                             <li key={item}>
//                                 <button className="news-item active">
//                                     <h4> {item}</h4>
//                                 </button>
//                             </li>
//                         ))}

//                     </ul>
//                 </div>
//             </div>
//             <div className='up-btn-wrap wrap-flex'>
//                 <button>
//                     <img width={"12px"} src="https://w7.pngwing.com/pngs/405/699/png-transparent-black-up-arrow-icon-brand-pattern-up-arrow-angle-web-design-text-thumbnail.png " title="top icons" alt='btn' />
//                 </button>
//                 <br />
//                 <button>
//                     <img width={"12px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dhwvtOZi_f-YhgpCcs40ZxBvEWup8sSnoTrKoi-Zo7aCgPpbviimmGX0maWFscstruY&usqp=CAU "
//                         title="top icons" alt='btn' />
//                 </button>
//             </div>

//         </div>
//     );
// }

// export default ListingPage;
