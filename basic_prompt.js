function makeCamelCase(str) {
    return str
        .split(' ')
        .map((word, index) =>
            index === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

console.log(makeCamelCase('hello world example'));
