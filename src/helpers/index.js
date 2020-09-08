const slugOptions = {
    replacement: '-',
    lower: true
}

// slug helper
export const toSlug = (string) => {
    return slugify(string, slugOptions)
}
