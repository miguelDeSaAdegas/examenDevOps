// TODO: Add here the function to validate
const isGamerTag = (gamerTag) => {
    if (gamerTag === undefined) return false;
    return true;
}

const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;
exports.isGamerTag = isGamerTag;
