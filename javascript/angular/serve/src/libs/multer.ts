import multer from 'multer';
// where I want to save my images
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads/');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
})

export default multer({ storage })