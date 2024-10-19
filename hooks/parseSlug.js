const parseSlug = (title) => {
    let parsedTitle = title
    .toLocaleLowerCase()
    .replace(/\é|\è|\ê/ig, 'e')
    .replace(/\à|\á|\â/ig, 'a')
    .replace(/[^\w]|\s/ig, '-')
    .replace(/\-\-\-|\-\-/ig, '-')
    .replace(/^\-|\-$/ig, '');

    return parsedTitle;
}

export default parseSlug;