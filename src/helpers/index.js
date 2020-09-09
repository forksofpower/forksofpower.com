const slugOptions = {
    replacement: '-',
    lower: true
}

// slug helper
const toSlug = (string) => {
    return slugify(string, slugOptions)
}
