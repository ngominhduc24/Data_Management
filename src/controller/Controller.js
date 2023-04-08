
let getHomePage = (req, res) => {
    const rows = [
        {
            id: 1,
            firstName: 'Duc',
            lastName: 'Minh',
        },
        {
            id: 2,
            firstName: 'Dung',
            lastName: 'Nam',
        }
    ]
    return res.render('index.ejs', { dataUser: rows });
}



module.exports = {
    getHomePage
}