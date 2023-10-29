module.exports = async (res, statusCode, data) => {
    res.status(statusCode).send(data);
};
