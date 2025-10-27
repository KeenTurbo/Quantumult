/*
 * ===============================================
 * Pterodactyl 面板 - 获取Cookie脚本
 * 配合 [rewrite_local] 或远程重写片段使用
 * ===============================================
 */
const cookieKey = "PterodactylCookie"; // 定义一个独一无二的键名，必须与签到脚本中的保持一致

if ($request.headers['Cookie']) {
    const cookie = $request.headers['Cookie'];
    const oldCookie = $prefs.valueForKey(cookieKey);

    if (cookie !== oldCookie) {
        $prefs.setValueForKey(cookie, cookieKey);
        console.log(`成功更新Pterodactyl Cookie`);
        $notify("✅ FreeCloud Cookie 获取成功", "新的身份凭证已保存", "现在可以禁用此重写规则了。");
    } else {
        console.log(`Pterodactyl Cookie 未变化，无需更新。`);
    }
} else {
    console.log("请求中未找到Cookie。");
}

$done({}); // 结束重写脚本