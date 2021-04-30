import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [
  {
    id: "dashboards",
    icon: "iconsminds-shop",
    label: "menu.dashboards",
    to: `${adminRoot}/piaf`,
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.start",
        to: `${adminRoot}/piaf/start`
        // roles: [UserRole.Admin, UserRole.Editor],
      }
    ]
  },
  {
    id: "catalogue ",
    icon: "iconsminds-chemical",
    label: "menu.catalogue",
    to: `${adminRoot}/second-menu`,
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.matter",
        to: `${adminRoot}/second-menu/second`
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.teacher",
        to: `${adminRoot}/second-menu/second`
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.position",
        to: `${adminRoot}/second-menu/second`
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.type_center",
        to: `${adminRoot}/second-menu/second`
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.bank_account",
        to: `${adminRoot}/second-menu/second`
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.department",
        to: `${adminRoot}/second-menu/second`
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.employment_relationship",
        to: `${adminRoot}/second-menu/second`
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.inscription",
        to: `${adminRoot}/second-menu/second`
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.inscription",
        to: `${adminRoot}/second-menu/second`
      }
    ]
  },
  {
    id: "admission ",
    icon: "iconsminds-chemical",
    label: "menu.admission",
    to: `${adminRoot}/second-menu`,
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.inscription",
        to: `${adminRoot}/second-menu/second`
      }
    ]
  },
  {
    id: "financial",
    icon: "iconsminds-digital-drawing",
    label: "menu.financial",
    to: "/user/login",
    subs: [
      {
        icon: "simple-icon-user-following",
        label: "menu.login",
        to: "/user/login",
        newWindow: true
      },
      {
        icon: "simple-icon-user-follow",
        label: "menu.register",
        to: "/user/register",
        newWindow: true
      },
      {
        icon: "simple-icon-user-unfollow",
        label: "menu.forgot-password",
        to: "/user/forgot-password",
        newWindow: true
      },
      {
        icon: "simple-icon-user-following",
        label: "menu.reset-password",
        to: "/user/reset-password",
        newWindow: true
      }
    ]
  },
  {
    id: "human-resources",
    icon: "iconsminds-chemical",
    label: "menu.human-resources",
    to: `${adminRoot}/second-menu`,
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.inscription",
        to: `${adminRoot}/second-menu/second`
      }
    ]
  },
  {
    id: "settings",
    icon: "iconsminds-three-arrow-fork",
    label: "menu.settings",
    to: `${adminRoot}/single`
  },
  {
    id: "docs",
    icon: "iconsminds-library",
    label: "menu.docs",
    to: "https://piaf-vue-docs.coloredstrategies.com/",
    newWindow: true
  }
];
export default data;
