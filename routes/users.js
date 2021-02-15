var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    let dataAray = [
        { question: "What’s the best thing about Switzerland", answer: "I don’t know, but the flag is a big plus." },
        { question: "I invented a new word!", answer: "Plagiarism!" },
        { question: "Did you hear about the mathematician who’s afraid of negative numbers?", answer: "He’ll stop at nothing to avoid them. " },
        { question: "Why do we tell actors to “break a leg?”", answer: "Because every play has a cast." },
        { question: "Helvetica and Times New Roman walk into a bar.", answer: "Helvetica says, YOU'RE A TERABLE FONT, TIMES NEW ROMAN" },
        { question: "Yesterday I saw a guy spill all his Scrabble letters on the road.", answer: "I asked him, “What’s the word on the street?" },
        { question: "Hear about the new restaurant called Karma?", answer: "There’s no menu: You get what you deserve." }
    ];

    res.json({
        data: dataAray
    })


});

module.exports = router;
