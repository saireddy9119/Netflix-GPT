export const USER_AVATAR = "https://compote.slate.com/images/22ce4663-4205-4345-8489-bc914da1f272.jpeg?crop=1560%2C1040%2Cx0%2Cy0";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w400"

export const BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"

export const SUPPORTED_LANGUAGES = [{ identifier: "en", name: "English" }, { identifier: "hindi", name: "हिन्दी" }, { identifier: "spanish", name: "española" }]
