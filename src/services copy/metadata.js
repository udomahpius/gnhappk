export const SOCIAL_METADATA = "socialbooster-metadata";

export function getSocialBoosterMetadata() {
  let metadata = JSON.parse(localStorage.getItem(SOCIAL_METADATA)) || {
    logged_in_users_ids: [],
    trial_expired_user_ids: [],
    blocked_user_ids: [],
  };
  if (!("logged_in_users_ids" in metadata)) {
    metadata = {
      ...metadata,
      logged_in_users_ids: [],
    };
  }
  if (!("trial_expired_user_ids" in metadata)) {
    metadata = {
      ...metadata,
      trial_expired_user_ids: [],
    };
  }
  if (!("blocked_user_ids" in metadata)) {
    metadata = {
      ...metadata,
      blocked_user_ids: [],
    };
  }
  return metadata;
}

export function storeSocialBoosterMetadata(metadata) {
  localStorage.setItem(SOCIAL_METADATA, JSON.stringify(metadata));
}
