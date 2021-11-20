export enum DispatchActionType {
  AUTH_REGISTER = "AUTH_REGISTER",
  AUTH_LOGIN = "AUTH_LOGIN",
  AUTH_LOGIN_TOKEN = "AUTH_LOGIN_TOKEN",
  AUTH_VERIFY = "AUTH_VERIFY",

  TEAMS_VIEW = "TEAMS_VIEW",
  TEAM_JOIN = "TEAM_JOIN",
  TEAM_INFO = "TEAM_INFO",
  TEAM_LEAVE = "TEAM_LEAVE",
  TEAM_CREATE = "TEAM_CREATE",
  TEAM_INVITE_BY_EMAIL = "TEAM_INVITE_BY_EMAIL",
  TEAM_EDIT = "TEAM_EDIT",
  USER_GET_TEAM = "USER_GET_TEAM",

  USER_STATUS = "GET_APP_STATUS",
  SPONSORS_LIST = "SPONSORS_LIST",
  USER_CONFIRM = "USER_CONFIRM",

  CURRENT_USER_REQUESTS = "CURRENT_USER_REQUESTS",
  CURRENT_TEAM_REQUESTS = "CURRENT_TEAM_REQUESTS",
  REQUEST_OPEN = "REQUEST_OPEN",
  REQUEST_ACCEPT = "REQUEST_ACCEPT",
  REQUEST_DECLINE = "REQUEST_DECLINE",
  REQUEST_CANCEL = "REQUEST_CANCEL",
  // Application form
  APPLICATION_UPLOAD_RESUME = "APPLICATION_UPLOAD_RESUME",
  APPLICATION_MISSING_RESUME = "APPLICATION_MISSING_RESUME",
  APPLICATION_DISPLAY_NAME_AVAILABLE = "APPLICATION_DISPLAY_NAME_AVAILABLE",
  APPLICATION_SUBMIT_FORM = "APPLICATION_SUBMIT_FORM",
  // Save application section data
  APPLICATION_SAVE_BASIC = "APPLICATION_SAVE_BASIC",
  APPLICATION_SAVE_ESSAY = "APPLICATION_SAVE_ESSAY",
  APPLICATION_SAVE_EXPERIENCE = "APPLICATION_SAVE_EXPERIENCE",
  APPLICATION_SAVE_LOGISTICS = "APPLICATION_SAVE_LOGISTICS",
  APPLICATION_SAVE_PORTFOLIO = "APPLICATION_SAVE_PORTFOLIO",
  APPLICATION_SAVE_SCHOOL = "APPLICATION_SAVE_SCHOOL",
  APPLICATION_SAVE_WORK_AUTH = "APPLICATION_SAVE_WORK_AUTH"
}
