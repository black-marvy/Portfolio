
import { ID } from "appwrite";
import { databases, DATABASE_ID, TABLE_ID } from "./config";
console.log("DATABASES OBJECT:", databases);
console.log("DATABASES CONSTRUCTOR:", databases?.constructor?.name);
console.log("CREATE ROW FUNCTION:", databases?.createRow);
export const sendMessage = async ({
  Name,
  Email,
  Subject,
  Message,
}) => {
  try {
    const response = await databases.createRow(
      DATABASE_ID,
      TABLE_ID,
      ID.unique(),
      {
        Name: Name,
        Email: Email,
        Subject: Subject,
        Message: Message,
      }
    );

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

