import { Selector } from "testcafe";
import xlsx from "xlsx";

// var users = ["User1", "User2", "User3", "User4", "User5", "User6", "User7", "User8", "User9", "User10", "User11", "User12",
//     "User13", "User14", "User15", "User16", "User17", "User18", "User19", "User20"];

var users = ["User1"];

fixture("Registration Fixture")
    .page("https://demo.nopcommerce.com/")
    .beforeEach(
        async (t) => {
            await t.maximizeWindow()
                .click(".ico-register");
        }
    );

users.forEach(
    user => {
        test.meta("ID", 'SEAL-dummy1')(`${user} registration`,
            async (t) => {
                console.log(`${user} clicked the registration button`);

                user = "User" + Math.floor(Math.random() * 100000) + 1;
                await t.expect(false).ok();
                await t.click(".male")
                    .typeText("#FirstName", `${user} First Name`, { replace: true, paste: true })
                    .typeText("#LastName", `${user} Last Name`, { replace: true, paste: true })
                    .click("[name='DateOfBirthDay']")
                    .click(Selector("option").withExactText("4"))
                    .click("[name='DateOfBirthMonth']")
                    .click(Selector("option").withExactText("September"))
                    .click("[name='DateOfBirthYear']")
                    .click(Selector("option").withExactText("1992"))
                    .typeText("#Email", user + "@mail.com", { replace: true, paste: true })
                    .typeText("#Company", "DocuSign", { replace: true, paste: true })
                    .typeText("#Password", "P@ssw0rd", { replace: true, paste: true })
                    .typeText("#ConfirmPassword", "P@ssw0rd", { replace: true, paste: true })
                    .click("#register-button")
                    .expect(Selector(".result").withExactText("Your registration completed").exists).ok();
            }
        );
    }
)
