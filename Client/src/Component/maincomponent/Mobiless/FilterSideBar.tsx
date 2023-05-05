

import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";

export default function FilterSideBar() {
    const [sections, setSections] = React.useState([
        {
            id: 1,
            title: "Availabilty",
            items: [{ id: 1, text: "Available" }],
            open: false
        },
        {
            id: 2,
            title: "Brand",
            items: [
                { id: 1, text: "Apple" },
                { id: 2, text: "Samsung " },
                { id: 3, text: "Vivo " },
                { id: 4, text: "Oppo " },
                { id: 4, text: "MI " }
            ],
            open: false
        },
        {
            id: 3,
            title: "Offers",
            items: [
                { id: 1, text: "Buy More Save More " },
                { id: 2, text: "No Cost EMI" },
                { id: 3, text: "Special Price 2" },
            ],
            open: false
        },
        {
            id: 4,
            title: "Customer Rating",
            items: [
                { id: 1, text: "4 * and Above" },
                { id: 2, text: "3 * and Above" },
            ],
            open: false
        },
        {
            id: 4,
            title: "Discount",
            items: [
                { id: 1, text: "70% or More" },
                { id: 2, text: "60% or More" },
                { id: 3, text: "50% or More" },
                { id: 4, text: "40% or More" },
                { id: 5, text: "30% or More" },
            ],
            open: false
        }
    ]);

    const handleClick = (sectionId: any) => {
        setSections((prevSections) =>
            prevSections.map((section) =>
                section.id === sectionId ? { ...section, open: !section.open } : section
            )
        );
    };

    return (
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", textAlign: "initial", paddingLeft: 0 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <h3>Filter</h3>
                </ListSubheader>
            }
        >
            {sections.map((section) => (
                <React.Fragment key={section.id}>
                    <ListItemButton onClick={() => handleClick(section.id)}>
                        <ListItemText primary={section.title} sx={{ textTransform:'capitalize' }} />
                        {section.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={section.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {section.items.map((item) => (
                                <ListItemButton key={item.id} sx={{ pl: 4 }}>
                                    <ListItemIcon sx={{ minWidth: "unset", width: "auto" }}>
                                        <Checkbox size="small" />
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} sx={{ fontSize: "small", textAlign: "initial", paddingLeft: 0 }} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </React.Fragment>
            ))}
        </List>
    );
}
