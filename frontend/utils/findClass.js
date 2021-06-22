export const findClass = (arr, element) => {
    let classFind = false
    const classes = arr.className.split(' ').filter(e => { 
        if (!(e === element)) {
            return true
        }
        classFind = true
        return false
    }).join(' ')
    return { classes, classFind }
}