export interface General {
  mode: "dark" | "light";
  primaryColor: "#50CD89";
  pageWidth: string;
  layout: "dark-sidebar" | "light-sidebar" | "light-header" | "dark-header";
}

export interface Illustrations {
  set: "dozzy-1" | "sigma-1" | "sketchy-1" | "unitedpalms-1";
}

export interface ScrollTop {
  display: boolean;
}

export interface Header {
  display: boolean;
  default: {
    container: "fixed" | "fluid";
    fixed: {
      desktop: boolean;
      mobile: boolean;
    };
    menu: {
      display: boolean;
      iconType: "svg" | "font";
    };
  };
}

export interface PageTitle {
  display: boolean;
  breadcrumb: boolean;
  direction: string;
}

export interface Sidebar {
  display: boolean;
  default: {
    minimize: {
      desktop: {
        enabled: boolean;
        default: boolean;
        hoverable: boolean;
      };
    };
    menu: {
      iconType: "svg" | "font";
    };
  };
}

export interface Content {
  container: "fixed" | "fluid";
}

export interface Toolbar {
  display: boolean;
  container: "fixed" | "fluid";
  fixed: {
    desktop: boolean;
    mobile: boolean;
  };
}

export interface Footer {
  display: boolean;
  container: "fixed" | "fluid";
  fixed: {
    desktop: boolean;
    mobile: boolean;
  };
}

export interface LayoutConfig {
  general: General;
  illustrations: Illustrations;
  scrolltop: ScrollTop;
  header: Header;
  toolbar: Toolbar;
  pageTitle: PageTitle;
  sidebar: Sidebar;
  content: Content;
  footer: Footer;
}