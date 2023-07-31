interface AccessToken {
    expires_in: number;
    refresh_token: string;
    access_token: string;
    session_secret: string;
    session_key: string;
    scope: string;
}

interface Store {
    AppTheme: string;
    AppThemeOption: string;
    AccessToken: AccessToken;
}

interface UserInfo {
    avatar_url: string;
    baidu_name: string;
    errmsg: string;
    errno: number;
    netdisk_name: string;
    request_id: string;
    uk: number;
    vip_type: number;
}

interface DriveStorage {
    errmsg: string;
    errno: number;
    expire: boolean;
    free: number;
    is_show_window: number;
    newno: string;
    recmd_vip: string;
    recyclestatus: number;
    request_id: number;
    sbox_total: number;
    sbox_used: number;
    server_time: number;
    total: number;
    used: number;
}

enum FileType {
    VIDEO,
    AUDIO,
    IMAGE,
    DOCUMENT,
    APPLICATION,
    OTHER,
    SEED
}

interface FileInfo {
    category: FileType;
    // extent_tinyint7: number;
    // from_type: number;
    fs_id: number;
    isdir: number;
    local_ctime: number;
    local_mtime: number;
    oper_id: number;
    owner_id: number;
    owner_type: number;
    path: string;
    pl: number;
    real_category: '';
    server_atime: number;
    server_ctime: number;
    server_filename: string;
    server_mtime: number;
    share: number;
    size: number;
    tkbind_id: number;
    unlist: number;
    wpfile: number;
}

interface FileInfoResponse {
    errno: number;
    guid: number;
    guid_info: string;
    list: FileInfo[];
    request_id: number;
}

export type { AccessToken, DriveStorage, FileInfo, FileInfoResponse, FileType, Store, UserInfo };
