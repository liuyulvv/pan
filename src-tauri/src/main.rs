#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod api;

use tauri::Manager;
use tauri::State;

use api::data::{AccessToken, AuthCode};
use api::{get_access_token, open_auth_window, request_access_token};

fn main() {
    tauri_plugin_deep_link::prepare("com.liuyulvv.pan");
    tauri::Builder::default()
        .setup(|app| {
            app.manage(AuthCode::default());
            app.manage(AccessToken::default());

            let handle = app.handle();
            tauri_plugin_deep_link::register("auth", move |request| {
                let res: Vec<&str> = request.split("code=").collect();
                assert_eq!(res.len(), 2);
                let window = handle.get_window("auth").unwrap();
                let auth_code: State<'_, AuthCode> = handle.state::<AuthCode>();
                let mut auth_code = auth_code.code.lock().unwrap();
                *auth_code = res[1].to_string();
                let token = request_access_token(res[1]);
                let access_token = handle.state::<AccessToken>();
                let mut access_token = access_token.token.lock().unwrap();
                *access_token = token;
                handle.emit_all("access_token", {}).unwrap();
                let _ = window.close();
            })
            .unwrap();
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![open_auth_window, get_access_token])
        .plugin(tauri_plugin_store::Builder::default().build())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
