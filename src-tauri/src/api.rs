pub mod data;

use data::{AccessToken, AccessTokenJSON};
use tauri::Manager;

#[tauri::command]
pub async fn open_auth_window(handle: tauri::AppHandle) {
    let window = tauri::WindowBuilder::new(
        &handle,
        "auth", 
        tauri::WindowUrl::External("http://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=QpuX8aaCSNPy50WYKZzh1meOBo6EUbA6&redirect_uri=auth://localhost&scope=basic,netdisk&qrcode=1&force_login=1".parse().unwrap()),
    )
    .build()
    .unwrap();
    window.set_title("登录").unwrap();
}

#[tauri::command]
pub fn get_access_token(handle: tauri::AppHandle) -> AccessTokenJSON {
    let access_token = handle.state::<AccessToken>();
    let access_token = &access_token.token.lock().unwrap();
    AccessTokenJSON {
        expires_in: access_token.expires_in,
        refresh_token: access_token.refresh_token.to_owned(),
        access_token: access_token.access_token.to_owned(),
        session_secret: access_token.session_secret.to_owned(),
        session_key: access_token.session_key.to_owned(),
        scope: access_token.scope.to_owned(),
    }
}

pub fn request_access_token(auth_code: &str) -> AccessTokenJSON {
    let url = "https://openapi.baidu.com/oauth/2.0/token?grant_type=authorization_code&client_id=QpuX8aaCSNPy50WYKZzh1meOBo6EUbA6&client_secret=ZEUmnAUszGCoGWbhVg01mhsRcSAGPLDW&redirect_uri=auth://localhost&code=".to_string() + auth_code;
    let resp = reqwest::blocking::get(url);
    match resp {
        Ok(response) => {
            let json = response.json::<AccessTokenJSON>();
            match json {
                Ok(token) => token,
                Err(_) => AccessTokenJSON::default(),
            }
        }
        Err(_) => AccessTokenJSON::default(),
    }
}
