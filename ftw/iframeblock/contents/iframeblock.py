from ftw.iframeblock import _
from ftw.iframeblock.contents.interfaces import IIFrameBlock
from plone.autoform.interfaces import IFormFieldProvider
from plone.dexterity.content import Item
from plone.directives import form
from zope import schema
from zope.interface import alsoProvides
from zope.interface import implements


class IIFrameBlockSchema(form.Schema):
    """iFrame block for simplelayout
    """

    url = schema.URI(
        title=_(u'iframeblock_url_label', default=u'URL'),
        required=True,
    )

    height = schema.Int(
        title=_(u'iframeblock_height_label', default=u'Height'),
        required=True,
        default=400,
    )

alsoProvides(IIFrameBlockSchema, IFormFieldProvider)


class IFrameBlock(Item):
    implements(IIFrameBlock)
