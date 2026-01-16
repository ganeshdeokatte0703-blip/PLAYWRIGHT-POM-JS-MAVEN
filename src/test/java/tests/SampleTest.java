gackage tests;

import com.microsoft.playwright.*;
import org.testng.annotations.Test;

public class SampleTest {

    @Test
    public void launchBrowser() {
        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(
                new BrowserType.LaunchOptions().setHeadless(true)
            );
            Page page = browser.newPage();
            page.navigate("https://example.com");
            System.out.println(page.title());
        }
    }
}
