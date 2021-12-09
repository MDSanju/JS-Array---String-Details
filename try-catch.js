const getError = 'hypnosis';

try {
    getError = 'bizarre';
} catch (error) {
    console.log(error);
} finally {
    // console.log(getError);
}