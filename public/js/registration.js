!function () {
    function e(e, a) {
        $(".alert").removeClass("display").removeClass("alert-info").removeClass("alert-success").removeClass("alert-danger").addClass(e),
            a && $(".alert").addClass("display"),
            "alert-success" === e ? $(".alert > span").text("Profile saved") : "alert-danger" === e && $(".alert > span").text("Profile reset")
    }
    $("input.form-control[name=avatar-file]").change(function () {
        !function (e) {
            if (e.files && e.files[0]) {
                var a = new FileReader; a.onload = function (e) {
                    $(".avatar-bg").css({
                        background: "url(" + e.target.result + ")", "background-size": "cover", "background-position": "50% 50%"
                    })
                }, a.readAsDataURL(e.files[0])
            }
        }(this)
    }),
        $("#profile").delegate("form", "submit", function (a) {
            var t = this; new FormData($(this)[0]);
            return $(t).find("button[type = submit]").addClass("loading").prop("disabled", !0), e("alert-success", !0),
                setTimeout(function () {
                    $(t).find("button[type = submit]").removeClass("loading").prop("disabled", !1), e("alert-success")
                }, 1e3), !1
        }),
        $("#profile").delegate("form", "reset", function (a) {
            var t = this; new FormData($(this)[0]); return $(t).find("button[type = reset]").addClass("loading").prop("disabled", !0), e("alert-danger", !0),
                setTimeout(function () {
                    $(t).find("button[type = reset]").removeClass("loading").prop("disabled", !1), e("alert-danger")
                }, 1e3), !1
        })
}();