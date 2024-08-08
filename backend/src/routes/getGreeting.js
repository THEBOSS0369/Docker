const GREETING = [
    'Hello World',
    'All Hands on the Deck',
    "Charthing the course ahead!",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING[Math.floor(Math.random() * GREETING.length)],
    });
};
