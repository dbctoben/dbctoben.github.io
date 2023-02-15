const fetchData = (url: string) => {
    return fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw response;
    })
    .catch(error => {
        console.error(error);
        return [];
    })
}

export default fetchData;