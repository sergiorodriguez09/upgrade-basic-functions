/* 1.5 */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let count = 0;
    for (let i = 0; i < param.length; i++) {
        if (typeof param[i] === 'string') {
            count += param[i].length
        } else {
            count += param[i]
        }
    }
    return count 
}

