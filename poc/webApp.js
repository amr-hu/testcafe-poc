fixture("Web App Fixture");

test("My Test", async (t) => {
    await t.navigateTo("http://192.168.1.5:8090/getName")
        .expect(false).ok();
});
