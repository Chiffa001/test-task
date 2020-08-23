const compose = (...functions) => (comp) => {
    return functions.reduceRight((prev, f) => f(prev), comp);
};

export default compose;
