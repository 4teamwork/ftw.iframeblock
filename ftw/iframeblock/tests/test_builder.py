from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from ftw.iframeblock.tests import FunctionalTestCase
from ftw.testing import IS_PLONE_5


class TestIFrameBlockBuilder(FunctionalTestCase):

    def setUp(self):
        super(TestIFrameBlockBuilder, self).setUp()
        self.grant('Manager')

    @browsing
    def test_add_iframeblock(self, browser):
        block_title = u'My iFrame block'
        content_page = create(Builder('sl content page'))
        create(Builder('iframe block')
               .titled(block_title)
               .within(content_page))

        browser.login().visit(content_page)

        if IS_PLONE_5:
            nodes = content_page.getChildNodes()
            iframe_block_title = nodes._data[0].title

            self.assertEqual(block_title, iframe_block_title,
                             'We expect that a iframe block was created '
                             'within the content page. Therefore the block '
                             'must be the only child element of the content '
                             'page having the title given.')
        else:
            self.assertTrue(len(browser.css('.sl-block')), 'Expect one block')
