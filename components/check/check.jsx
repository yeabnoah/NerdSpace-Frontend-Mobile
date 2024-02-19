// import React, { useState } from "react";
// import { View, Alert } from "react-native";
// import { Menu, IconButton } from "react-native-paper";

// const PostComponent = () => {
//   const [isMenuVisible, setMenuVisible] = useState(false);

//   const openMenu = () => setMenuVisible(true);
//   const closeMenu = () => setMenuVisible(false);

//   const handleEdit = () => {
//     // Example implementation for edit action
//     closeMenu();
//     Alert.alert("Edit", "Perform edit action");
//   };

//   const handleDelete = () => {
//     // Example implementation for delete action
//     closeMenu();
//     Alert.alert("Delete", "Perform delete action");
//   };

//   const handleShare = () => {
//     // Example implementation for share action
//     closeMenu();
//     Alert.alert("Share", "Perform share action");
//   };

//   return (
//     <View>
//       <IconButton icon="dots-vertical" onPress={openMenu} />
//       <Menu
//         visible={isMenuVisible}
//         onDismiss={closeMenu}
//         anchor={<IconButton icon="dots-vertical" onPress={openMenu} />}
//       >
//         <Menu.Item onPress={handleEdit} title="Edit" />
//         <Menu.Item onPress={handleDelete} title="Delete" />
//         <Menu.Item onPress={handleShare} title="Share" />
//       </Menu>
//     </View>
//   );
// };

// export default PostComponent;
