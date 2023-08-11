import { Gitlab } from "@gitbeaker/node";

const api = new Gitlab({
    host: "your_gitlab_repo_host", // Replace with your GitLab instance URL
    token: "your_gitlab_access_token", // Replace with your GitLab personal access token
});

async function deleteProject(groupId: any) {
  try {
    // Delete the project
    await api.Groups.remove(groupId);

    console.log(`group with ID ${groupId} deleted successfully.`);
  } catch (error) {
    console.error("Failed to delete the group:", error);
  }
}

// Replace PROJECT_ID with the ID of the project you want to delete
const groupId = "group_id";

deleteProject(groupId);
