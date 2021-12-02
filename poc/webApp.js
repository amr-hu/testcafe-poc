fixture("Web App Fixture");

test("My Test", async (t) => {
    await t.navigateTo("192.168.1.5:58350")
        .expect(false).ok();
});
