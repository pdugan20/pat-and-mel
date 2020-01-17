export const apiEndpoint = 'https://pat-and-mel.cdn.prismic.io/api/v2';

export const linkResolver = (doc) => {
    if (doc.type === 'page') {
        return `/${doc.uid}`;
    }
    return '/';
};

export const hrefResolver = (doc) => {
    if (doc.type === 'page') {
        return '/[uid]';
    }
    return '/';
};
