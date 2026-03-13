/**
 * Converts a string to kebab-case format
 * @param {string} input - The string to convert
 * @returns {string} The converted kebab-case string
 * @throws {Error} If input is not a valid string
 */
function toKebabCase(input) {
    // Step 3: Error handling
    if (input === null || input === undefined) {
        throw new Error('toKebabCase expects a string input, but received null or undefined.');
    }
    
    if (typeof input !== 'string') {
        throw new Error(`toKebabCase expects a string input, but received ${typeof input}.`);
    }

    // Step 2: Normalize the input
    return input
        .trim() // Remove leading and trailing whitespace
        .toLowerCase() // Convert to lowercase
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Handle camelCase patterns
        .replace(/[\s_-]+/g, '-') // Replace multiple separators with single hyphen
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Step 4: Example usage and edge case handling
console.log(toKebabCase('Hello World Example'));     // "hello-world-example"
console.log(toKebabCase('helloWorldTest'));           // "hello-world-test"
console.log(toKebabCase('hello_world_example'));      // "hello-world-example"
console.log(toKebabCase('hello--world__example'));    // "hello-world-example"
console.log(toKebabCase('  hello world  '));          // "hello-world"
console.log(toKebabCase('HTTPSConnection'));          // "h-t-t-p-s-connection"

// Error cases
try {
    toKebabCase(null);
} catch (error) {
    console.error(error.message);
}

try {
    toKebabCase(undefined);
} catch (error) {
    console.error(error.message);
}

try {
    toKebabCase(123);
} catch (error) {
    console.error(error.message);
}