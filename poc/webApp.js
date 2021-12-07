import { ClientFunction } from "testcafe";

const getURL = ClientFunction(() => window.location.href);

fixture("Web App Fixture");

test("My Test", async (t) => {
    await t.navigateTo("http://192.168.1.5:8090/getName");

    console.log("Page URL: " + await getURL());

    await t.expect(false).ok();
});
