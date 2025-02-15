const fs = require('fs');

// Writing and reading files in callback hell

fs.writeFile('file1.txt', 'Hello, this is file 1.', (err) => {
    if (err) {
        console.error('Error writing to file1:', err);
    } else {
        console.log('File1 created successfully');
        
        // Nested callback for writing the second file
        fs.writeFile('file2.txt', 'Hello, this is file 2.', (err) => {
            if (err) {
                console.error('Error writing to file2:', err);
            } else {
                console.log('File2 created successfully');
                
                // Nested callback for reading the first file
                fs.readFile('file1.txt', 'utf8', (err, data) => {
                    if (err) {
                        console.error('Error reading file1:', err);
                    } else {
                        console.log('File1 content:', data);
                        
                        // Nested callback for reading the second file
                        fs.readFile('file2.txt', 'utf8', (err, data) => {
                            if (err) {
                                console.error('Error reading file2:', err);
                            } else {
                                console.log('File2 content:', data);
                            }

                             //...........................................................again
                        });
                    }
                });
            }
        });
    }
});


//SOLUTION :  FS/PROMISES module of node