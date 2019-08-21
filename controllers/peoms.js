const handleApiCall = (req, res) => {
        fetch('https://www.poemist.com/api/v1/randompoems')
        .then(data => {
            res.json(data)
        })
        .catch(err => res.status(400).json('unable to work with API'))
}


// const handlePoems = (req, res, db) => {
//     const { id } = req.body;
//     db('users').where('id', '=', id)
//         .increment('views', 1)
//         .returning('views')
//         .then(views => {
//             res.json(views[0]);
//         })
//         .catch(err => res.status(400).json('unable to get views'))
// }

module.exports = {
    handleApiCall
};