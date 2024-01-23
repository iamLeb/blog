const index = (req, res) => {
    res.send("This is the controller page");
}

const about = (req, res) => {
    res.send('This is the about page');
}

module.exports = {
    index,
    about
}