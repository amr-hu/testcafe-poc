import { ClientFunction } from "testcafe";

const getURL = ClientFunction(() => window.location.href);

fixture("Web App Fixture");

test("My Test", async (t) => {
    await t.navigateTo("http://localhost:8090/getName");

    console.log("Page URL: " + await getURL());

    await t.expect(false).ok();
});
