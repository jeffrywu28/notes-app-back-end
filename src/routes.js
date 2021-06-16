const { addNoteHandler } = require('./handler');

//routes.js : Memuat kode konfigurasi routing server seperti menentukan path, method, dan handler yang digunakan.
const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
];

module.exports = routes;