fixture("Root Fixture");

test.meta("ID", 'SEAL-dummy22')("Root1 Test",
    async (t) => {
        console.log("Root Test");
    }
);

test.meta("ID", 'SEAL-dummy3')("Root2 Test",
    async (t) => {
        console.log("Root2 Test");
    }
);
