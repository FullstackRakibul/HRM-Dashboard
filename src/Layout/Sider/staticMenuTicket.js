const supportTicketMenu = [
  {
    ModuleID: "****",
    MenuName: "Support Ticket",
    IconName: "fa-solid fa-ticket",
    IconColor: "#5B2C6F",
    SortOrder: "****",
    MenuPath: "ticket",
    children: [
      {
        MenuId: "****",
        MenuName: "Ticket",
        MenuPath: "ticket/ticket",
        children: [
          {
            MenuPermissionId: "**",
            UserId: "**",
            key: "****",
            MenuName: "Create Ticket",
            MenuPath: "../ticket/create",
            SortOrder: "****",
            ModuleId: "****",
          },
          {
            MenuPermissionId: "**",
            UserId: "**",
            key: "****",
            MenuName: "Recently Added Ticket",
            MenuPath: "../ticket/listTicket",
            SortOrder: "****",
            ModuleId: "****",
          },
          {
            MenuPermissionId: "**",
            UserId: "**",
            key: "****",
            MenuName: "Acknowled Ticket",
            MenuPath: "../ticket/acknowledge",
            SortOrder: "****",
            ModuleId: "****",
          },
        ],
      },
    ],
  },
];
