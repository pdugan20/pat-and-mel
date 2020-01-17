import Prismic from 'prismic-javascript';
import { apiEndpoint } from '../config/prismic';

export async function getPageType(req) {
    let pageType = req.url;
    pageType = pageType.replace('/', '');
    return pageType;
}

export async function getPageData(req, pageType) {
    const data = await Prismic.getApi(apiEndpoint, req);
    return data.getSingle(pageType);
}

export default {
    getPageType,
    getPageData,
};
