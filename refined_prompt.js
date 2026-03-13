function toCamelCase(input) {
    // Error handling for null, undefined, and non-string types
    if (input === null || input === undefined) {
        throw new Error("Input must be a valid string. Received null or undefined.");
    }

    if (typeof input !== "string") {
        throw new Error(
            `Input must be a valid string. Received ${typeof input} instead.`
        );
    }

    // Handle empty strings and strings with only whitespace
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return "";
    }

    // Split by multiple separators (spaces, hyphens, underscores)
    // and filter out empty strings
    const words = trimmed.split(/[\s\-_]+/).filter((word) => word.length > 0);

    // Convert to camelCase
    const camelCased = words
        .map((word, index) => {
            // First word stays lowercase, subsequent words are capitalized
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");

    return camelCased;
}

// Test cases
console.log(toCamelCase("hello world")); // "helloWorld"
console.log(toCamelCase("hello-world-test")); // "helloWorldTest"
console.log(toCamelCase("  multiple   spaces here ")); // "multipleSpacesHere"

// Error handling tests
try {
    toCamelCase(null);
try {
    toCamelCase(undefined);
} catch (e) {
    console.error(e.message);
}

/**
 * Converts a string to dot.case format.
 * 
 * Transforms the input string by splitting it on whitespace, hyphens, or underscores,
 * converting each word to lowercase, and joining them with dots.
 * 
 * @param {string} input - The string to convert to dot.case format.
 * @returns {string} The input string converted to dot.case format, or an empty string if input is empty/whitespace-only.
 * 
 * @throws {Error} If input is null or undefined.
 * @throws {Error} If input is not a string type.
 * 
 * @example
 * toDotCase("hello world");           // Returns: "hello.world"
 * toDotCase("HelloWorld");            // Returns: "helloworld"
 * toDotCase("hello-world_test case"); // Returns: "hello.world.test.case"
 * toDotCase("   ");                   // Returns: ""
 * toDotCase(null);                    // Throws: Error
 * toDotCase(123);                     // Throws: Error
 */
function toDotCase(input) {
    // Error handling for null, undefined, and non-string types
    if (input === null || input === undefined) {
        throw new Error("Input must be a valid string. Received null or undefined.");
    }

    if (typeof input !== "string") {
        throw new Error(
            `Input must be a valid string. Received ${typeof input} instead.`
        );
    }

    // Handle empty strings and strings with only whitespace
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return "";
    }

    // Split by multiple separators (spaces, hyphens, underscores)
    // and filter out empty strings
    const words = trimmed.split(/[\s\-_]+/).filter((word) => word.length > 0);

    // Convert to dot.case
    const dotCased = words
        .map((word) => word.toLowerCase())
        .join(".");

    return dotCased;
}

// Test cases
console.log(toDotCase("hello world")); // "hello.world"
console.log(toDotCase("hello-world-test")); // "hello.world.test"
console.log(toDotCase("  multiple   spaces here ")); // "multiple.spaces.here"
} catch (e) {
    console.error(e.message);
}

try {
    toCamelCase(123);
} catch (e) {
    console.error(e.message);
}