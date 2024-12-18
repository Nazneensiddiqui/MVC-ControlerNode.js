
const stuHome = (req, res) => {
    res.render("Home");
}

const stuAbout = (req, res) => {
    res.render("About");
}

const stuContact = (req, res) => {
    res.render("Contact");
}



module.exports = {
    stuHome,
    stuAbout,
    stuContact

}