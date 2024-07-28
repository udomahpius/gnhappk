export const EMAIL_ID_STORAGE_KEY = "ai.good.email";
export const WORKSPACE_ID_STORAGE_KEY = "ai.good.workspace.id";
export const USER_SESSION_STORAGE_KEY = "good-auth-token";
export const WORKSPACE_ROLE_STORAGE_KEY = "ai.good.role";
export const WIZARD_TIMELINE = "ai.wizard.timeline";
export const AI_INTRO = "ai-intro-shown";


export function storeActiveEmail(email) {
  localStorage.setItem(EMAIL_ID_STORAGE_KEY, email);
}

export function storeActiveWorkspace(id) {
  localStorage.setItem(WORKSPACE_ID_STORAGE_KEY, id);
}

export function storeUserSession(session) {
  localStorage.setItem(USER_SESSION_STORAGE_KEY, JSON.stringify(session));
}

export function storeRole(role) {
  localStorage.setItem(WORKSPACE_ROLE_STORAGE_KEY, role);
}

export function storeWizardTimeline(timeline) {
  if (typeof window !== "undefined") {
    return localStorage.setItem(WIZARD_TIMELINE, JSON.stringify(timeline));
  }
}

export function getUserSession() {
  return JSON.parse(localStorage.getItem(USER_SESSION_STORAGE_KEY));
}

export function getStoredWorkspace() {
  return localStorage.getItem(WORKSPACE_ID_STORAGE_KEY);
}

export function getStoredEmail() {
  return localStorage.getItem(EMAIL_ID_STORAGE_KEY);
}

export function getStoredRole() {
  return localStorage.getItem(WORKSPACE_ROLE_STORAGE_KEY);
}

export function getAIIntro() {
  if (typeof window !== "undefined") {
    return localStorage.getItem(AI_INTRO);
  }
}

export function getWizardTimeline() {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(WIZARD_TIMELINE));
  }
}

export function removeUserSession() {
  return localStorage.removeItem(USER_SESSION_STORAGE_KEY);
}

export function removeWorkspace() {
  return localStorage.removeItem(WORKSPACE_ID_STORAGE_KEY);
}

export function removeEmail() {
  return localStorage.removeItem(EMAIL_ID_STORAGE_KEY);
}

export function removeRole() {
  return localStorage.removeItem(WORKSPACE_ROLE_STORAGE_KEY);
}

