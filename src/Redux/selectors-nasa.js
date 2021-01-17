

export const getNasaPhoto = (state) => {
    return state.nasaPage.photo.url;
}
export const getDay = (state) => {
    return state.nasaPage.day;
}
export const getExplanation = (state) => {
    return state.nasaPage.photo.explanation;
}
export const getTitleOfNasaPhoto = (state) => {

return state.nasaPage.photo.title;


}
export const getError = (state) => {

return state.nasaPage.error;


}