import { Gitlab } from "@gitbeaker/node";

const api = new Gitlab({
  host: "your_gitlab_repo_host", // Replace with your GitLab instance URL
  token: "your_gitlab_access_token", // Replace with your GitLab personal access token
});

async function deleteProject(projectId: any) {
  try {
    // Delete the project
    await api.Projects.remove(projectId);

    console.log(`Project with ID ${projectId} deleted successfully.`);
  } catch (error) {
    console.error("Failed to delete the project:", error);
  }
}

// Replace PROJECT_ID with the ID of the project you want to delete
const projectId = "project_id_to_delete";

deleteProject(projectId);
