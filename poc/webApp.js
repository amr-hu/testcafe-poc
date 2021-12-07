fixture("Web App Fixture");

test("My Test", async (t) => {
    await t.navigateTo("http://localhost:8090/getName")
        .expect(false).ok();
});
