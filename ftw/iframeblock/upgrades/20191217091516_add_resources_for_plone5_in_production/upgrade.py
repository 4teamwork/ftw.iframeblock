from ftw.upgrade import UpgradeStep
import pkg_resources


IS_PLONE_5 = pkg_resources.get_distribution('Products.CMFPlone').version >= '5'


class AddResourcesForPlone5InProduction(UpgradeStep):
    """Add resources for plone5 in production.
    """

    def __call__(self):
        if IS_PLONE_5:
            self.install_upgrade_profile()
        else:
            # do not add the registry.xml in plone 4
            pass
