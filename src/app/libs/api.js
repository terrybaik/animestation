export const getAnimeResponse = async(resource, query) => {
    const response = await fetch(`${process.env.PUBLIC_API_BASE_URL}${resource}?${query}`);
    const data = await response.json()
    return data
}

export const getNestedAnime = async(resource, objectProperty) => {
    const response = await getAnimeResponse(resource);
    return response.data.flatMap(item => item.entry);
}