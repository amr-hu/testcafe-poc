const DOC_ALLURE_CONFIG = {
    CLEAN_REPORT_DIR: true,
    COPY_HISTORY: false,
    RESULT_DIR: '/allure/allure-results',
    REPORT_DIR: '/allure',
    TEST_LABEL: 'JIRA Test Link',
    TEST_URL: 'https://jira.corp.docusign.com/browse/{{ID}}',
    labels: {
        screenshotLabel: 'Screenshot',
        browserLabel: 'Browser',
        userAgentLabel: 'User Agent',
        allureStartMessage: 'Allure reporter started.....',
        allureClosedMessage: 'Allure reporter closed.....'
    }
};

export default DOC_ALLURE_CONFIG;