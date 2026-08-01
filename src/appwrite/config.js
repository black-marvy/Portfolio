
import { ID } from "appwrite";
import { databases, DATABASE_ID, TABLE_ID } from "./config";

export const sendMessage = async ({
  Name,
  Email,
  Subject,
  Message,
}) => {
  try {
    const response = await databases.createRow({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      rowId: ID.unique(),

      data: {
        Name: Name,
        Email: Email,
        Subject: Subject,
        Message: Message,
      },
    });

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.log("FULL ERROR:", error);
    console.log("MESSAGE:", error.message);
    console.log("CODE:", error.code);
    console.log("TYPE:", error.type);

    return {
      success: false,
      error,
    };
  }
};

