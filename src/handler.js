//handler.js : Memuat seluruh fungsi-fungsi handler yang digunakan pada berkas routes.
const {nanoid} = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request,h) => {
    const {title,tags,body} = request.payload;
    const id = nanoid(16); //lib string unique : npm install nanoid
    const createAt = new Date().toISOString();
    const updateAt = createAt;

    const newNote = {
        title,tags,body,id,createAt,updateAt,
    };

    notes.push(newNote);

    //melihat apakah newNote sudah masuk ke dalam array
    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        const response = h.response ({
            status : 'success',
            message : 'Catatan berhasil ditambahkan',
            data: {
                noteId : id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status : 'fail',
        message : 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
};
//lib untuk id= npm install nanoid
module.exports = {addNoteHandler};