// import React from 'react';

// const Question = () => {
//     const [selectValue, setSelectValue] = useState("");
//     const onChange = (event) => {
//         const value = event.target.value;
//         // setSelectValue(value);
//     };
//     return (
//         <div>
//             <h2 className="mb-3">React Select onChange Example</h2>
//             <select onChange={onChange} className="form-select">
//                 <option defaultValue disabled>
//                     Select Fruit
//                 </option>
//                 <option value="Luxury-Car">Luxury-Car</option>
//                 <option value="Electronic-Car">Electronic-Car</option>
//                 <option value="Micro-Bus">Micro-Bus</option>
//             </select>
//             {
//                 selectValue === 'Luxury-Car' &&
//                 <p>Luxury Car</p>
//             }
//             {
//                 selectValue === 'Electronic-Car' &&
//                 <p>Electronic-Car</p>
//             }
//             {
//                 selectValue === 'Luxury-Car' &&
//                 <p>Luxury Car</p>
//             }
//         </div>
//     );
// };

// export default Question;