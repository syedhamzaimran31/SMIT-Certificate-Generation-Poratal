const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}


// const generateUniqueRollNumber = (count, digits) => {
//     const uniqueNumbers = new Set();
//     const maxNumber = Math.pow(10, digits) - 1;
//     const minNumber = Math.pow(10, digits - 1);

//     while (uniqueNumbers.size < count) {
//         const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
//         uniqueNumbers.add(randomNumber);
//     }

//     return Array.from(uniqueNumbers)[0]; // Return only one unique number
// };


// export {
//     generateOtp,
//     generateUniqueRollNumber
// }
 
export default generateOtp