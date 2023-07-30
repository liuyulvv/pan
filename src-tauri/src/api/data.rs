use serde::{Deserialize, Serialize};
use std::sync::Mutex;

#[derive(Deserialize, Serialize, Default, Debug)]
pub struct AccessTokenJSON {
    pub expires_in: u32,
    pub refresh_token: String,
    pub access_token: String,
    pub session_secret: String,
    pub session_key: String,
    pub scope: String,
}

#[derive(Deserialize, Serialize, Default)]
pub struct AuthCode {
    pub code: Mutex<String>,
}

#[derive(Deserialize, Serialize, Default)]
pub struct AccessToken {
    pub token: Mutex<AccessTokenJSON>,
}
