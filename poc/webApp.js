fixture("Web App Fixture");

test("My Test", async (t) => {
    await t.navigateTo("http://192.168.1.5:58350/home")
        .expect(false).ok();
});