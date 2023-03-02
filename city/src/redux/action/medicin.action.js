export const getMedicines = () => (dispatch) => {
    try {
        fetch('http://localhost:3007/posts')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    catch (errors) {

    }
}