// careate, update, & delete database & data types in postgres
// create database test;
// alter database test rename to ph;
// drop database ph;

// data types useing for
    // data consistency
    // performance
    // constraint Enforcement
    // Convenience & Functionality
    // storage Efficiency

// postgres data types
    // boolean = true/false/null
    // numbers/Integers = 
        // INT:
            // Range -2,147,483,648, to 2,147, 483,647
            // Storage: 4 bytes
            // The INT data type is commonly used for integer values within the standard range.
        // BINT:
            // Range: -9,223,372,036,854,775,808 to 9, 223, 372, 036, 854, 775, 807
            // Storage: 8 byets
            // BIGINT provides a larger range than INT & is suitable for storing very large integer values.
        // SMALLINT:
            // Range:-32,768 to 32,767
            // SMALINT is suitable for storing smal interger velues withing a more limited range.
        // FLOAT4(Single Precision)
            // storage: 4 bytes
            // 6 digit precision
        // NUMERIC(precision, scale):
            // Range: Unlimited precision
            // Storage: Variable (depends on the input precision and scale)
            // ex: NUMERIC(4,3)
        // Serial:
            // Range: Like integers
            // Auto-incremeting integer
            
    // binary
    // date/time
    // json
    // character/string
        // CHAR:
            // CHAR is a fixed-length character type.
            // Storage: The length is fixed & specified when defining the column.
            // if the actual string is shorter thean the specified length, it is padded with spaces.
            // Example: CHAR(10) means a fixed-length string of 10 characters.
        // VARCHAR:
            // VARCHAR is a variable-length character type.
            // Storage: The lenght is not fixed & can vary up to the specified maximum length;
            // No padding with spaces is done, so it is more storage-efficient when dealing with variable-length strings.
            // Example: VARCHAR(255) means a variable-length string with a maximum length of 255 characters.
        // TEXT:
            // TEXT is also a variable-length character type.
            // Storage: Similar to VARCHAR, it is not fiexed in length.
            // Typically used for longer text strings where the exact length is not known or can vary widely.
            // Example: TEXT is often used for columns containing large amounts of text.
            
    // uuid
        // UUID(Universally Unique Identitifird)
            // Definition: UUID is a data type in PostgreSQL use to store universally unique dientifiers.
            // Storage:It is a 128-bit value, typically displayed as 32 hexadecimal characters separated by hyphens.
            // Example: 3c0ab34f-54sgf-fd3ee4yffdr33-dfdrgnerervfv
    // array
    // xml