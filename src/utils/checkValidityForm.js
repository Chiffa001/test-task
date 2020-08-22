const checkValidityPassword = (str) => {
    const messages = [];
    const characters = [...str].filter(symbol => !/[0-9]/i.test(symbol));
    if (str.length < 8) messages.push({id: 1, message: "Коротенький"});
    if (!characters.some(symbol => symbol === symbol.toUpperCase())) {
        messages.push({id: 2, message: "Должен быть хотя бы один символ в заглавном регистре"});
    }
    if (!characters.some(symbol => symbol === symbol.toLowerCase())) {
        messages.push({id: 3, message: "Должен быть хотя бы один символ в нижнем регистре"});
    }
    if (!characters.every(symbol => /[a-z]/i.test(symbol.toLowerCase()))) {
        messages.push({id: 4, message: "Символы должны быть латинского алфавита"});
    }
    if (![...str].some(symbol => /[0-9]/i.test(symbol))) {
        messages.push({id: 5, message: "Должна быть хотя бы одна цифра"});
    }
    return messages;
};

export default checkValidityPassword;
