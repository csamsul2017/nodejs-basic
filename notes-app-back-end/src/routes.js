const { addNotesHandler } = require('./handler')

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNotesHandler, 
    }
]

module.exports = routes;