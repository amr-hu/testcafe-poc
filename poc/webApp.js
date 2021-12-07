fixture("Web App Fixture");

test("My Test", async (t) => {
    await t.navigateTo("https://192.168.1.5:58350/getName")
        .expect(false).ok();
});
