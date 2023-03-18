const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true,
        image: "data:image/jpeg;base64,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"
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false,
        image: "data:image/jpeg;base64,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"
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true,
        image: "data:image/jpeg;base64,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"
    }
];

module.exports = {
    fruits: fruits,
}