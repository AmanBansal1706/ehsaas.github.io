jQuery(document).ready(function(e) {
    "use strict";
    e("#commentform").validate({
        submitHandler: function(o) {
            var s = e(o),
                r = e("#contactSuccess"),
                a = e("#contactError"),
                t = e(this.submitButton);
            t.button("loading"), e.ajax({
                type: "POST",
                url: s.attr("action"),
                data: {
                    name: s.find("#name").val(),
                    email: s.find("#email").val(),
                    subject: s.find("#subject").val(),
                    message: s.find("#message").val()
                },
                dataType: "json",
                complete: function(o) {
                    return "object" == typeof o.responseJSON && "success" == o.responseJSON.response ? (r.removeClass("d-none"), a.addClass("d-none"), s.find(".form-control").val("").blur().parent().removeClass("has-success").removeClass("has-error").find("label.error").remove(), s.find(".form-control").removeClass("error"), r.offset().top - 80 < e(window).scrollTop() && e("html, body").animate({
                        scrollTop: r.offset().top - 80
                    }, 300), t.button("reset"), void e(".form-control").keyup(function() {
                        r.addClass("d-none")
                    })) : (a.removeClass("d-none"), r.addClass("d-none"), s.find(".form-control").val("").blur().parent().removeClass("has-success").removeClass("has-error").find("label.error").remove(), a.offset().top - 80 < e(window).scrollTop() && e("html, body").animate({
                        scrollTop: a.offset().top - 80
                    }, 300), s.find(".has-success").removeClass("has-success"), t.button("reset"), void e(".form-control").keyup(function() {
                        a.addClass("d-none")
                    }))
                }
            })
        }
    })
});