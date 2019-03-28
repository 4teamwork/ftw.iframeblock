from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from ftw.testbrowser.pages import factoriesmenu
from ftw.iframeblock.tests import FunctionalTestCase


class TestIFrameBlockContentType(FunctionalTestCase):

    def setUp(self):
        super(TestIFrameBlockContentType, self).setUp()
        self.grant('Manager')

    @browsing
    def test_block_can_be_added_with_factories_menu(self, browser):
        content_page = create(Builder('sl content page').titled(u'A page'))

        browser.login().visit(content_page)
        factoriesmenu.add('iFrame block')
        browser.fill({
            'URL': u'http://www.google.com',
            'Height': u'400',
        })

        browser.find_button_by_label('Save').click()
        browser.visit(content_page)

        self.assertTrue(len(browser.css('.sl-block')), 'Expect one block')

        from lxml import html
        tree = html.fromstring(browser.contents)
        iframe = tree.xpath('//iframe')[0]

        self.assertEqual(iframe.get('width'), '100%')
        self.assertEqual(iframe.get('class'), 'iframeblock loading')
        self.assertEqual(iframe.get('onload'), 'onIframeLoaded(this)')
        self.assertEqual(iframe.get('src'), 'http://www.google.com')
        self.assertEqual(iframe.get('height'), '400')
        self.assertEqual(iframe.get('scrolling'), 'auto')
        self.assertEqual(iframe.get('data-height-calculation-method'), 'bodyOffset')
