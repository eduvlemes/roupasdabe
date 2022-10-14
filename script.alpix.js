function moveDiv(e, t) {
    var o = document.querySelector(e);
    document.querySelector(t).append(o)
}

function removeAll(e) {
    document.querySelectorAll(e).forEach(e => e.remove())
}

function insertGraphismImages() {
    var e = document.createElement("img");
    e.classList.add("img-corpo-left"), e.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/Grupo 25.svg";
    var t = document.createElement("img");
    t.classList.add("img-corpo-right"), t.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/element-grafismo02.svg", document.getElementById("corpo").prepend(e), document.getElementById("corpo").append(t)
}

function hasClass(e, t) {
    return document.querySelector(e).classList.contains(t)
}

function paginaProduto() {
    return hasClass("body", "pagina-produto")
}

function paginaHome() {
    return hasClass("body", "pagina-inicial")
}

function paginaCadastro() {
    return hasClass("body", "pagina-cadastro")
}

function paginaCategoria() {
    return hasClass("body", "pagina-categoria")
}

function paginaBusca() {
    return hasClass("body", "pagina-busca")
}

function paginaCheckout() {
    return hasClass("body", "carrinho-checkout")
}

function paginaCarrinho() {
    return hasClass("body", "pagina-carrinho") && !hasClass("body", "carrinho-checkout")
}

function umaDasPaginasDeConta() {
    return !!document.querySelector(".pagina-conta, .pagina-pedido-listar, .pagina-favorito-listar, .pagina-pedido")
}

function paginaConta() {
    return hasClass("body", "pagina-conta")
}

function paginaPedidoAberto() {
    return hasClass("body", "pagina-pedido")
}

function paginaConteudo() {
    return hasClass("body", "pagina-pagina")
}

function paginaFAQ() {
    return !!paginaConteudo() && !!document.querySelector("#faq")
}

function paginaQuemSomos() {
    return !!paginaConteudo() && !!document.querySelector("#quem-somos")
}

function paginaPoliticaDePrivacidade() {
    return !!paginaConteudo() && !!document.querySelector("#politica-de-privacidade")
}

function unwrapElement(e) {
    for (var t = document.querySelector(e), o = t.parentNode; t.firstChild;) o.insertBefore(t.firstChild, t);
    o.removeChild(t)
}

function addSocialMediaToHeader(e, t) {
    var o = document.createElement("li"),
        r = document.createElement("a"),
        n = document.createElement("i");
    r.target = "_blank", r.href = e, n.classList.add(t), r.append(n), o.append(r), document.querySelector(".barra-inicial ul") && document.querySelector(".barra-inicial ul").append(o)
}

function addSocialHeader(e, t) {
    const o = document.createElement("li"),
        r = document.createElement("a"),
        n = document.createElement("i");
    r.target = "_blank", r.href = e, n.classList.add(t), r.append(n), o.append(r);
    document.querySelector(".conteiner-principal #cabecalho .conteiner .conteudo-topo .inferior ul.social").append(o)
}
window.addEventListener("load", () => {
    document.querySelector("body").classList.add("show-page")
}), document.addEventListener("DOMContentLoaded", (async function() {
    const e = document.querySelector("body"),
        t = document.createElement("div");
    t.id = "top", e.prepend(t);
    const o = e.querySelector(".pagina-inicial #corpo > .conteiner");
    o && o.classList.remove("conteiner"), setTimeout(() => {
        var e = document.querySelector(".carrinho-mobile #qtdcart"),
            t = document.querySelector(".qtd-carrinho").cloneNode(!0);
        e.prepend(t)
    }, "800")
})), document.addEventListener("DOMContentLoaded", (function() {
    const e = document.querySelector("#breadcrumbs");
    if ("/" === window.location.pathname) return void e.remove();
    const t = document.querySelector(".breadcrumbs");
    if (t) {
        const o = t.querySelector("ul").querySelectorAll("a, li > strong"),
            r = e.querySelector("ol");
        o.forEach((e, t) => {
            if (t) {
                const o = document.createElement("li");
                o.setAttribute("property", "itemListElement"), o.setAttribute("typeof", "ListItem");
                const n = document.createElement("a");
                n.setAttribute("property", "item"), n.setAttribute("typeof", "WebPage");
                const a = document.createElement("meta");
                a.setAttribute("property", "position"), a.setAttribute("content", t + 1), n.href = e.href, n.innerText = e.innerText, o.append(n), o.append(a), r.append(o)
            }
        }), e.append(r), t.remove();
        document.querySelector("#corpo > .conteiner").prepend(e)
    } else e.remove()
})), document.addEventListener("DOMContentLoaded", (async function() {
    const e = document.querySelector("#cabecalho"),
        t = document.querySelector(".pagina-inicial #cabecalho");
    if (t) {
        const e = document.createElement("div");
        e.classList.add("faixa-topo");
        const o = document.createElement("a");
        o.href = "https://www.roupasdabe.com.br/pagina/envios.html", o.classList.add("slogan"), o.innerHTML = "FRETE GRÃTIS para todas as regiÃµes, vem saber mais! ðŸšš", e.append(o), t.before(e)
    }
    const o = e.querySelectorAll(".conteudo-topo.span3");
    o.length && o.forEach(e => e.classList.remove("span3"));
    const r = document.querySelector("#barraTopo");
    r && r.remove();
    const n = document.querySelector("#form-buscar");
    if (n) {
        n.remove();
        const e = document.querySelector("#search-form");
        document.querySelector(".menu.superior").append(e)
    }
    if (document.querySelector(".menu.superior")) {
        const e = document.querySelector(`a[href="${window.location.href}"]`);
        e && e.parentNode.classList.add("active")
    }
    const a = document.querySelector(".barra-inicial ul");
    if (addSocialMediaToHeader("https://open.spotify.com/playlist/3ZN9ZKag8cuoslhKOkKWGV", "icon-spotify"), a) {
        const t = a.cloneNode(!0);
        t.classList.add("social");
        e.querySelectorAll(".conteudo-topo")[0].querySelector(".inferior").prepend(t)
    }
    const c = document.querySelector("#store-menu");
    if (c && !paginaCheckout()) {
        const t = c.cloneNode(!0),
            o = e.querySelectorAll(".conteudo-topo"),
            r = o[1].querySelector(".carrinho .qtd-carrinho");
        t.querySelector(".cart a").append(r), o[1].querySelector(".inferior").innerHTML = "", o[1].querySelector(".inferior").prepend(t), c.remove()
    }
    if (axios) {
        const {
            data: e
        } = await axios.get("/contato/popup"), t = (new DOMParser).parseFromString(e, "text/xml").querySelectorAll("td"), o = [{
            index: "name",
            label: "RazÃ£o Social:"
        }, {
            index: "cnpj",
            label: "CNPJ:"
        }, {
            index: "phone",
            label: "Telefone:"
        }, {
            index: "whats",
            label: "Whatsapp:"
        }, {
            index: "address",
            label: "EndereÃ§o:"
        }, {
            index: "email",
            label: "Email:"
        }, {
            index: "skype",
            label: "Skype"
        }];
        let r = !1,
            n = null;
        t.forEach(e => {
            const t = e.innerHTML.replace(/<\/?[^>]+(>|$)/g, "").trim(),
                a = o.filter(e => e.label === t);
            if (a[0]) n = a[0].index;
            else {
                const e = document.querySelectorAll(".data-" + n);
                let o = "";
                e.length && e.forEach(e => {
                    switch (n) {
                        case "whats":
                            o = "https://api.whatsapp.com/send?phone=55" + t.replace(/\D/g, "");
                            break;
                        case "phone":
                            o = "tel:" + t.replace(/\D/g, "");
                            break;
                        case "email":
                            o = "mailto:" + t
                    }
                    e.innerHTML = t, e.href = o
                }), "cnpj" !== n || window.cnpj || (window.cnpj = t), "address" !== n || window.address || (window.address = t), r = !1
            }
        })
    }
}));
const menuMobile = () => {
    const e = `\n        <div id="menu-mobile">\n            <div class="conteiner">\n                <div class="top">\n                    <button id="toggle-mobile"><span class="menu-open">Menu</span><span class="menu-close d-none">Fechar</span></button>\n                    \x3c!-- <div class="perfil-mobile">\n                        <a href="#">\n                            <i class="icon-user"></i>\n                            \n                        </a>\n                    </div> --\x3e\n                    <h2 class="logo-mobile">\n                        <a href="/">\n                            <img src="https://cdn.awsli.com.br/1952/1952461/arquivos/Logo - Puro@2x.png" width="62" height="40" alt="Roupas da BÃª">\n                        </a>\n                    </h2>\n                    <a class="carrinho-mobile" href="/carrinho/index">         \n                        Carrinho\n                        <div id="qtdcart"></div>\n                    </a>\n                </div>\n                <div class="bottom">\n                    <div class="search-mobile">${document.querySelector("div#cabecalho .busca-mobile .busca").innerHTML}</div>\n                </div>\n            </div>\n        </div>\n        <div id="overlay-menu"><div class="bg-menu"></div>\n            <ul class="nivel-um">\n                <li class="minha-conta">\n                    \n                    <a href="/conta/index">\n                        <img src="https://cdn.awsli.com.br/1952/1952461/arquivos/icon-user@2x.png">\n                        \n                        \n                    </a>\n                </li>\n                ${document.querySelector("div#cabecalho .menu.superior > ul.nivel-um").innerHTML}\n            </ul>\n        </div>\n    `;
    document.querySelector("div#cabecalho").innerHTML = e + document.querySelector("div#cabecalho").innerHTML, document.querySelector("#menu-mobile .top #toggle-mobile, #overlay-menu .bg-menu").onclick = function() {
        document.querySelector("#overlay-menu").classList.toggle("show"), document.querySelectorAll("#menu-mobile .top #toggle-mobile span").forEach(e => e.classList.toggle("d-none")), document.querySelector("body").classList.toggle("no-scroll")
    };
    var t = document.createElement("li");
    t.classList.add("go-back"), t.innerHTML = "&larr; voltar", document.querySelectorAll("#overlay-menu ul.nivel-um>li ul").forEach(e => e.prepend(t.cloneNode(!0))), document.querySelectorAll("#overlay-menu ul.nivel-um>li.com-filho >a").forEach(e => e.removeAttribute("href")), document.querySelectorAll("#overlay-menu ul.nivel-um>li>a").forEach(e => e.onclick = function(e) {}), document.querySelectorAll("#overlay-menu ul.nivel-um>li>a").forEach(e => e.onclick = function(e) {
        e.path[0].parentNode.querySelector("ul").classList.add("show")
    }), document.querySelectorAll("#overlay-menu ul.nivel-um>li ul li.go-back").forEach(e => e.onclick = function(e) {
        e.path[0].parentElement.classList.remove("show")
    }), jQuery("body:not(.pagina-inicial) #listagemProdutos ul li.listagem-linha > ul > li").unwrap(), jQuery("body:not(.pagina-inicial) #listagemProdutos ul li.listagem-linha > li").unwrap(), jQuery("body:not(.pagina-inicial) #listagemProdutos ul li.listagem-linha > ul > li").unwrap()
};

function carrinhoNav(e) {
    let t = document.createElement("a"),
        o = document.createElement("img");
    o.src = "https://cdn.awsli.com.br/1952/1952461/logo/273c352b6f.png", t.href = "https://www.roupasdabe.com.br/", o.style.width = "auto", o.style.height = "130px", t.appendChild(o);
    let r = document.createElement("div");
    r.style.justifyContent = "flex-end", r.className = "row-fluid", r.style.display = "flex";
    let n = document.createElement("div"),
        a = document.createElement("img");
    a.style.justifyContent = "space-between", a.style.maxWidth = "92px", a.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/selo-compra.svg", a.alt = "selo-compra", n.appendChild(a);
    let c = document.createElement("div"),
        i = document.createElement("img");
    i.style.maxWidth = "92px", i.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/selo-google.svg", i.alt = "selo google", c.appendChild(i);
    let l = document.createElement("div");
    l.className = "atendimento", l.innerHTML = "\n    Atendimento<br>\n    <strong>(55) 11 91000-8585</strong>";
    let s = document.querySelector(e);
    s.classList.add("mobilenav"), s.style.display = "flex", s.style.margin = "0px 100px 0px 100px", s.appendChild(t), s.appendChild(r), r.appendChild(n), r.appendChild(c), r.appendChild(l)
}

function createBanner(e, t, o) {
    if (e) {
        const r = e.querySelector(".swiper-wrapper");
        t.map(t => {
            const n = document.createElement("div"),
                a = document.createElement("img");
            if (o.append(e), a.src = t.src, a.alt = t.alt, n.classList.add("swiper-slide"), t.link) {
                const e = document.createElement("a");
                e.href = t.link, e.append(a), n.append(e)
            } else n.appendChild(a);
            r.appendChild(n)
        }), new Swiper(e, {
            loop: !1,
            spaceBetween: 0,
            pagination: {
                el: e.querySelector(".swiper-pagination")
            },
            navigation: {
                nextEl: e.querySelector(".swiper-button-next"),
                prevEl: e.querySelector(".swiper-button-prev")
            }
        })
    }
}
document.addEventListener("DOMContentLoaded", (function() {
    if (!paginaCheckout()) {
        if (menuMobile(), 0 != $(".conteudo-topo .superior div.btn-group > a").length) {
            var e = $("#cabecalho .atalhos-mobile + .conteiner > .row-fluid .conteudo-topo:first-of-type .superior .btn-group  > a").text().trim().split(" ")[1];
            $("#overlay-menu .minha-conta").addClass("com-filho borda-principal"), $("#overlay-menu .minha-conta > a").removeAttr("href"), $("#overlay-menu .minha-conta > a").attr("title", "Minha Conta"), $("#overlay-menu .minha-conta > a").append("olÃ¡, <strong>" + e + "</strong>"), $("#overlay-menu .minha-conta > a").append('<i class="icon-chevron-down fundo-secundario"></i>'), $("#overlay-menu .minha-conta").append('\n            <ul class="nivel-dois borda-alpha">\n                <li class="go-back">â† voltar</li>\n                <li class="minha-conta">\n                    \n                    <a href="/conta/index">\n                        <img src="https://cdn.awsli.com.br/1952/1952461/arquivos/icon-dados-cadastrais@2x.png">\n                        Minha Conta\n                    </a>\n                </li>\n                <li class="conta-pedidos login-itens">\n                    <a href="/conta/pedido/listar">\n                            <img src="https://cdn.awsli.com.br/1952/1952461/arquivos/icon-meus-pedidos@2x.png">\n                            Meus Pedidos\n                    </a>\n                </li>\n                <li class="alterar-senha login-itens">\n                    <a href="/conta/alterar_senha">\n                            <img src="https://cdn.awsli.com.br/1952/1952461/arquivos/icon-key@2x.png">\n                            Alterar senha\n                    </a>\n                </li>\n                <li class="lista-desejos login-itens">\n                    <a href="/conta/alterar_senha">\n                            <img src="https://cdn.awsli.com.br/1952/1952461/arquivos/icon-lista-desejos@2x.png">\n                            Lista de desejos\n                    </a>\n                </li>\n                <li class="conta-sair login-itens"> \n                    <a href="/conta/logout">\n                            <img src="https://cdn.awsli.com.br/1952/1952461/arquivos/icon-exit@2x.png">\n                            Sair\n                    </a> \n                </li>\n            </ul>\n        ')
        } else $("#overlay-menu .minha-conta > a").attr("href", "/conta/login"), $("#overlay-menu .minha-conta > a").text("Login");
        jQuery(" #overlay-menu ul.nivel-um>li>a").click((function() {
            jQuery(this).next().addClass("show")
        })), jQuery(" #overlay-menu ul.nivel-um>li ul li.go-back").click((function() {
            jQuery(this).parent("ul.nivel-dois").removeClass("show")
        }))
    }
})), document.addEventListener("DOMContentLoaded", (function() {
    const e = document.querySelector("#barraNewsletter");
    if (e) {
        const t = document.querySelector("#newsletter"),
            o = t.querySelector("form");
        e.classList.remove("hidden-phone"), e.innerHTML = "", e.append(t), o.addEventListener("submit", async e => {
            e.preventDefault();
            const t = new FormData,
                r = o.querySelector(".form-group");
            t.append("email", o.querySelector("#newsletter-email").value);
            const {
                data: n
            } = await axios.post("/newsletter/assinar/", t, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (n && n.mensagem) {
                const e = o.querySelector(".feedback");
                e.innerHTML = n.mensagem, r.classList.remove("show"), r.classList.add("hidden"), e.classList.add(n.estado.toLowerCase()), e.classList.remove("hidden"), e.classList.add("show"), setTimeout(() => {
                    e.innerHTML = "", r.classList.add("show"), r.classList.remove("hidden"), e.classList.remove(n.estado.toLowerCase()), e.classList.remove("show"), e.classList.add("hidden")
                }, 7e3)
            }
        })
    }
})), document.addEventListener("DOMContentLoaded", (function() {
    let e = document.querySelectorAll(".produtos-carrossel");
    if (e.length) {
        const t = document.querySelector("#product-carousel"),
            o = document.querySelector("#model-product-box");
        e.forEach(e => {
            const r = e.previousElementSibling,
                n = !!r && r.classList,
                a = t.cloneNode(!0),
                c = a.querySelector(".swiper");
            e.querySelectorAll(".listagem-linha .flex-viewport li").forEach((e, t) => {
                const r = e.querySelector(".imagem-produto img"),
                    n = e.querySelector(".nome-produto"),
                    a = e.querySelector(".preco-a-partir"),
                    i = e.querySelector(".preco-promocional"),
                    l = e.querySelector(".preco-venda"),
                    s = e.querySelector(".preco-parcela"),
                    d = e.querySelector(".trustvox-stars"),
                    u = e.querySelector(".produto-sobrepor"),
                    p = o.cloneNode(!0);
                if (r) {
                    const e = r.getAttribute("data-imagem-caminho");
                    if (p.id = "product_box_" + t, p.classList.add("swiper-slide"), p.querySelector("figure .cover").src = r.src, p.querySelector("figure img").alt = r.alt, e) p.querySelector("figure .hover").src = e;
                    else {
                        const e = p.querySelector("figure .cover");
                        e && e.classList.remove("cover"), p.querySelector("figure .hover").remove()
                    }
                }
                n && (p.querySelector(".product-title h1").innerHTML = n.innerHTML), a && (p.querySelector(".product-price h2").innerHTML = a.innerHTML, p.querySelector(".product-price h2").classList.add("price-from")), i && (p.querySelector(".product-price h2").innerHTML = i.innerHTML, l && (p.querySelector(".product-price p").innerHTML = l.innerHTML)), d && p.querySelector(".stars").append(d.cloneNode(!0)), s && (p.querySelector(".product-price small").innerHTML = s.innerHTML.replaceAll('<strong class="cor-secundaria">', "").replaceAll('<strong class="cor-secundaria ">', "").replaceAll("</strong>", "").replace("de", "de<br/>")), u && p.querySelectorAll("a").forEach(e => e.href = u), p && c.querySelector(".swiper-wrapper").append(p)
            }), new Swiper(c, {
                loop: !1,
                slidesPerView: 2,
                spaceBetween: 30,
                navigation: {
                    nextEl: a.querySelector(".swiper-button-next"),
                    prevEl: a.querySelector(".swiper-button-prev")
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                }
            }), a.id = n.length ? "" + n[n.length - 1] : null, e.remove(), r.append(a)
        }), o.remove(), t.remove(), e = null
    }
})), document.addEventListener("DOMContentLoaded", (function() {
    const e = document.querySelector("#rodape");
    if (e) {
        const c = document.querySelector("#footer");
        if (c) {
            const i = document.querySelector("#cabecalho .logo img"),
                l = c.querySelector(".logo img");
            l.src = i.src, l.alt = i.alt;
            var t = e.querySelector(".sobre-loja-rodape p"),
                o = e.querySelector(".links-rodape-paginas ul");
            if (t) {
                var r = document.createElement("li"),
                    n = document.createElement("a");
                n.href = "/conta/index", n.innerHTML = "minha conta", r.append(n), document.querySelector(".links-rodape-paginas ul").append(r);
                const e = c.querySelector(".about");
                t && e && e.append(t);
                const a = c.querySelector(".menu");
                o && a && a.append(o)
            } else {
                var a = new XMLHttpRequest;
                a.open("GET", "https://www.roupasdabe.com.br/", !0), a.responseType = "document", a.send(), a.onload = function(e) {
                    var r = e.target.responseXML;
                    t = r.querySelector(".sobre-loja-rodape p"), c.querySelector(".about").append(t), o = r.querySelector(".links-rodape-paginas ul"), c.querySelector(".menu").append(o);
                    c.querySelector("#copyright")
                }
            }
            const s = e.querySelectorAll(".bandeiras-pagamento"),
                d = c.querySelector("#payment-flags");
            if (s.length && s.forEach(e => {
                    d && d.append(e)
                }), !paginaCarrinho()) {
                const e = document.createElement("li"),
                    t = document.createElement("i");
                e.appendChild(t), t.classList.add("icone-pagamento"), t.classList.add("forma-pix");
                document.querySelector(".bandeiras-pagamento").append(e)
            }
            e.innerHTML = "", e.append(c)
        }
    }
})), document.addEventListener("DOMContentLoaded", (function() {
    paginaCarrinho() && (document.querySelector("#newsletter").remove(), removeAll("#cabecalho > .conteiner > *"), carrinhoNav("#cabecalho > .conteiner"))
})), document.addEventListener("DOMContentLoaded", (function() {
    setTimeout(() => {
        if (!document.querySelector(".pagina-carrinho")) return;
        document.querySelector("form#formCalcularFrete button").addEventListener("click", () => {
            location.reload()
        })
    }, "500")
})), document.addEventListener("DOMContentLoaded", (function() {
    const e = document.querySelector("#menus .logo ul.social").cloneNode(!0),
        t = document.querySelector("#cabecalho .conteiner .inferior");
    t.after(e), t.style.display = "none"
})), document.addEventListener("DOMContentLoaded", (function() {
    if (!paginaHome()) return;
    var e = document.querySelector("#full-banner .swiper-pagination"),
        t = document.querySelector("#full-banner .swiper-button-next"),
        o = document.querySelector("#full-banner .swiper-button-prev"),
        r = e.cloneNode(!0),
        n = t.cloneNode(!0),
        a = o.cloneNode(!0),
        c = document.querySelector("#full-banner-mobile");
    c.append(r), c.append(n), c.append(a);
    const i = document.querySelector("div.secao-banners");
    if (i) {
        const e = [],
            t = [];
        i.querySelectorAll(".slides li").forEach(o => {
            const r = o.querySelector(".titulo"),
                n = o.querySelector("a"),
                a = o.querySelector("img");
            var c = a.alt.trim().toLowerCase().split("_"),
                i = c[c.length - 1];
            "desktop" == i ? e.push({
                src: a.src,
                alt: a.alt,
                link: n ? n.href : null,
                title: r ? r.innerHTML : null
            }) : ("mobile" == i || e.push({
                src: a.src,
                alt: a.alt,
                link: n ? n.href : null,
                title: r ? r.innerHTML : null
            }), t.push({
                src: a.src,
                alt: a.alt,
                link: n ? n.href : null,
                title: r ? r.innerHTML : null
            }))
        });
        const o = document.querySelector("#full-banner"),
            r = document.querySelector("#full-banner-mobile");
        i.innerHTML = "", createBanner(o, e, i), createBanner(r, t, i)
    }
    const l = document.querySelector("#stripe-banner");
    i && l && i.after(l);
    const s = document.querySelector("#buy-now");
    if (s) {
        const e = document.querySelectorAll(".titulo-categoria");
        e.length && e[2].after(s)
    }
    const d = document.querySelector("#about-be");
    if (d) {
        const e = document.querySelectorAll(".titulo-categoria");
        e.length && e[1].after(d)
    }
    const u = document.querySelector(".mini-banner");
    u && u.remove();
    const p = document.querySelector("#custom-mini-banners");
    if (p) {
        const e = document.querySelectorAll(".titulo-categoria");
        e.length && e[0].after(p)
    }
    const m = document.querySelector("#testimonials");
    if (axios && m) {
        const e = m.querySelector(".swiper-wrapper"),
            t = document.querySelector("#buy-now");
        t && t.after(m);
        const o = m.querySelector(".swiper");
        (async () => {
            const {
                data: t
            } = await axios.get("https://trustvox.com.br/store_reviews/store_reviews?store_id=112383&limit=9&min_rating=5&origin=www.roupasdabe.com.br");
            if (t && t.store_reviews.length) {
                const r = m.querySelector(".swiper-slide");
                t.store_reviews.map(t => {
                    const o = r.cloneNode(!0);
                    o.querySelector(".author").innerHTML = t.author;
                    o.querySelector(".text").innerHTML = t.text;
                    o.querySelector(".date").innerHTML = moment(t.date, "YYYY-MM-DD").format("DD/MM/YYYY");
                    const n = t.rate / 5 * 100,
                        a = o.querySelector(".rate"),
                        c = document.createElement("span"),
                        i = document.createElement("span");
                    c.classList.add("stars"), i.classList.add("raging"), i.style.cssText = `--percentage: ${n}%`, a.append(c), a.append(i), e.append(o);
                    var l = document.createElement("div");
                    l.classList.add("swiper-pagination"), e.after(l)
                }), r.remove(), new Swiper(o, {
                    loop: !0,
                    slidesPerView: 2,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: m.querySelector(".swiper-button-next"),
                        prevEl: m.querySelector(".swiper-button-prev")
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: !0
                    }
                })
            } else m.remove()
        })()
    }
    var g = document.querySelector("#listagemProdutos"),
        y = document.querySelector(".vitrine-lancamento"),
        v = document.querySelector(".vitrine-mas-vendido");
    g.prepend(v), document.querySelector("#custom-mini-banners").after(y), document.querySelector("#listagemProdutos .titulo-categoria.vitrine-lancamento > strong").innerHTML = "Pra Ficar de Olho";
    var f = document.querySelector("#about-be"),
        h = document.querySelector("#listagemProdutos .titulo-categoria.vitrine-14121198");
    f.after(h),
        function() {
            let e = document.querySelectorAll("[data-trustvox-product-code]"),
                t = document.createElement("img"),
                o = document.createElement("a");
            !async function() {
                let r = await async function() {
                    let e = [];
                    const t = await fetch("https://www.roupasdabe.com.br/conta/favorito/listar"),
                        o = await t.text();
                    let r = (new DOMParser).parseFromString(o, "text/html").querySelectorAll("a[href$='remover']");
                    for (let t = 0; t < r.length; t++) {
                        let o = r[t].getAttribute("href").match("[0-9]{9}");
                        e.push(o[0])
                    }
                    return e
                }();
                for (let n = 0; n < e.length; n++) {
                    let a = e[n].getAttribute("data-trustvox-product-code"),
                        c = e[n].closest("article"),
                        i = o.cloneNode(!0),
                        l = t.cloneNode(!0);
                    for (let e = 0; e < r.length; e++) {
                        if (parseInt(a) === parseInt(r[e])) {
                            l.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-favoritoa@2x.png", l.className = "icone-favorito-2", i.href = `https://www.roupasdabe.com.br/conta/favorito/${a}/remover`;
                            break
                        }
                        l.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-favoritob@2x.png", l.className = "icone-favorito", i.href = `https://www.roupasdabe.com.br/conta/favorito/${a}/adicionar`
                    }
                    r.length || (l.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-favoritob@2x.png", l.className = "icone-favorito", i.href = `https://www.roupasdabe.com.br/conta/favorito/${a}/adicionar`), i.className = "favorite-conteiner", i.append(l), c.append(i)
                }
                o.remove(), t.remove()
            }()
        }()
})), document.addEventListener("DOMContentLoaded", (function() {
    if (umaDasPaginasDeConta() && (document.querySelector("#corpo .secao-principal .coluna .menu-simples i.icon-user").append(document.createElement("img")), document.querySelector("#corpo .secao-principal .coluna .menu-simples i.icon-user img").src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-dados-cadastrais.png", document.querySelector("#corpo .secao-principal .coluna .menu-simples i.icon-unlock-alt").append(document.createElement("img")), document.querySelector("#corpo .secao-principal .coluna .menu-simples i.icon-unlock-alt img").src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-key.png", document.querySelector("#corpo .secao-principal .coluna .menu-simples i.icon-list-alt").append(document.createElement("img")), document.querySelector("#corpo .secao-principal .coluna .menu-simples i.icon-list-alt img").src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-meus-pedidos.png", document.querySelector("#corpo .secao-principal .coluna .menu-simples i.icon-star").append(document.createElement("img")), document.querySelector("#corpo .secao-principal .coluna .menu-simples i.icon-star img").src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-lista-desejos.png", paginaPedidoAberto() ? document.querySelector("#corpo .secao-principal .menu-simples a[href$='/conta/pedido/listar']").parentElement.classList.add("active-menu-item") : document.querySelector("#corpo .secao-principal .menu-simples a[href='" + window.location.href + "']").parentElement.classList.add("active-menu-item"), paginaConta())) {
        document.querySelector("#corpo .caixa-dados .icon-list").append(document.createElement("img")), document.querySelector("#corpo .caixa-dados .icon-list img").src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-dados.png", document.querySelector("#corpo .caixa-dados .icon-group").append(document.createElement("img")), document.querySelector("#corpo .caixa-dados .icon-group img").src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-tipo.png", document.querySelector("#corpo .caixa-dados:not(.outros-enderecos) .icon-map-marker").append(document.createElement("img")), document.querySelector("#corpo .caixa-dados:not(.outros-enderecos) .icon-map-marker img").src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-endereco-principal.png", document.querySelector("#corpo .caixa-dados.outros-enderecos .icon-map-marker").append(document.createElement("img")), document.querySelector("#corpo .caixa-dados.outros-enderecos .icon-map-marker img").src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-outros-enderecos.png";
        const e = document.createElement("li");
        e.classList.add("conta-sair", "login-itens");
        const t = document.createElement("a");
        t.href = "/conta/logout";
        const o = document.createElement("i");
        o.classList.add("icon-star", "login-itens");
        const r = document.createElement("img");
        r.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-exit@2x.png", o.append(r), t.append(o), e.append(t), t.append("sair");
        document.querySelector("ul.menu-simples").append(e)
    }
})), document.addEventListener("DOMContentLoaded", (function() {
    if (!document.querySelector(".pagina-categoria, .pagina-busca")) return;
    if (window.screen.width <= 768) {
        var e = document.createElement("div");
        e.classList.add("filtro-mobile");
        var t = document.createElement("button");
        t.innerText = "filtrar", e.append(t);
        const r = document.querySelectorAll(".filtro-coluna");
        var o = document.createElement("div");
        o.classList.add("filtro-mobile-itens"), o.style.display = "none", r.forEach(e => {
            o.append(e)
        });
        const n = document.querySelector("#listagemProdutos");
        n.before(e), n.before(o), t.addEventListener("click", (function() {
            "none" === o.style.display ? o.style.display = "block" : o.style.display = "none"
        }))
    }
    const r = document.querySelector(".listagem");
    if (r) {
        const e = r.querySelectorAll(".listagem-item"),
            t = document.createElement("div"),
            o = document.querySelector("#model-product-box");
        t.classList.add("product-list"), r.innerHTML = "", e.forEach((e, r) => {
            const n = e.querySelector(".imagem-produto img"),
                a = e.querySelector(".nome-produto"),
                c = e.querySelector(".preco-a-partir"),
                i = e.querySelector(".preco-promocional"),
                l = e.querySelector(".preco-venda"),
                s = e.querySelector(".preco-parcela"),
                d = e.querySelector(".trustvox-stars"),
                u = e.querySelector(".produto-sobrepor"),
                p = o.cloneNode(!0);
            if (n) {
                const e = n.getAttribute("data-imagem-caminho");
                if (p.id = "related_product_box_" + r, p.querySelector("figure .cover").src = n.src, p.querySelector("figure img").alt = n.alt, e) p.querySelector("figure .hover").src = e;
                else {
                    const e = p.querySelector("figure .cover");
                    e && e.classList.remove("cover"), p.querySelector("figure .hover").remove()
                }
            }
            a && (p.querySelector(".product-title h1").innerHTML = a.innerHTML), c && (p.querySelector(".product-price h2").innerHTML = c.innerHTML, p.querySelector(".product-price h2").classList.add("price-from")), i && (p.querySelector(".product-price h2").innerHTML = i.innerHTML, l && (p.querySelector(".product-price p").innerHTML = l.innerHTML)), d && p.querySelector(".stars").append(d.cloneNode(!0)), s && (p.querySelector(".product-price small").innerHTML = s.innerHTML.replaceAll('<strong class="cor-secundaria">', "").replaceAll('<strong class="cor-secundaria ">', "").replaceAll("</strong>", "").replace("de", "de<br/>")), u && p.querySelectorAll("a").forEach(e => e.href = u), p && t.append(p)
        }), r.append(t), o.remove();
        var n = document.querySelector(".coluna > .componente");
        const c = document.createElement("div");
        c.classList.add("titleBox");
        const i = document.querySelector("#listagemProdutos");
        i.parentNode.insertBefore(c, i), moveDiv("h1.titulo", "div.titleBox"), moveDiv(".ordenar-listagem .input-append", "div.titleBox"), c.after(n);
        var a = document.querySelector(".pagination");
        if (null == a) return;
        i.after(a), removeAll(".ordenar-listagem")
    }! function() {
        let e = document.querySelectorAll("[data-trustvox-product-code]"),
            t = document.createElement("img"),
            o = document.createElement("a");
        !async function() {
            let r = await async function() {
                let e = [];
                const t = await fetch("https://www.roupasdabe.com.br/conta/favorito/listar"),
                    o = await t.text();
                let r = (new DOMParser).parseFromString(o, "text/html").querySelectorAll("a[href$='remover']");
                for (let t = 0; t < r.length; t++) {
                    let o = r[t].getAttribute("href").match("[0-9]{9}");
                    e.push(o[0])
                }
                return e
            }();
            for (let n = 0; n < e.length; n++) {
                let a = e[n].getAttribute("data-trustvox-product-code"),
                    c = e[n].closest(".product-list article"),
                    i = o.cloneNode(!0),
                    l = t.cloneNode(!0);
                for (let e = 0; e < r.length; e++) {
                    if (parseInt(a) === parseInt(r[e])) {
                        l.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-favoritoa@2x.png", l.className = "icone-favorito-2", i.href = `https://www.roupasdabe.com.br/conta/favorito/${a}/remover`;
                        break
                    }
                    l.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-favoritob@2x.png", l.className = "icone-favorito", i.href = `https://www.roupasdabe.com.br/conta/favorito/${a}/adicionar`
                }
                r.length || (l.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-favoritob@2x.png", l.className = "icone-favorito", i.href = `https://www.roupasdabe.com.br/conta/favorito/${a}/adicionar`), i.className = "favorite-conteiner", i.append(l), c.append(i)
            }
            o.remove(), t.remove()
        }()
    }()
})), document.addEventListener("DOMContentLoaded", (function() {
    document.querySelector(".pagina-carrinho.carrinho-checkout") && (document.querySelector("#newsletter").remove(), removeAll("#cabecalho > .conteiner > *"), carrinhoNav("#cabecalho > .conteiner"))
})), document.addEventListener("DOMContentLoaded", (function() {
    paginaConteudo() && (paginaQuemSomos() ? (document.querySelector("body").classList.add("quem-somos"), insertGraphismImages()) : paginaPoliticaDePrivacidade() ? document.querySelector("body").classList.add("politica-de-privacidade") : paginaFAQ() && document.querySelector("body").classList.add("pagina-faq"))
})), document.addEventListener("DOMContentLoaded", (function() {
    if (document.querySelector(".pagina-login")) {
        var e = document.createElement("div");
        e.classList.add("firstAccessBox");
        var t = document.createElement("strong");
        t.innerHTML = "primeiro acesso?";
        var o = document.createElement("p");
        o.innerHTML = "faÃ§a aqui o seu cadastro!", document.querySelector(".cadastro-logar > div:nth-child(2) form fieldset legend").after(e), document.querySelector(".firstAccessBox").append(t), document.querySelector(".firstAccessBox").append(o), insertGraphismImages()
    }
})), document.addEventListener("DOMContentLoaded", (function() {
    if (!document.querySelector(".pagina-produto")) return;
    const e = document.querySelector("#carouselImagem");
    if (e) {
        const o = document.querySelector(".conteiner-imagem"),
            r = e.querySelectorAll("img"),
            n = document.querySelector("#images-carousel"),
            a = n.querySelector(".thumbnails"),
            c = n.querySelector(".cover"),
            i = a.querySelector(".swiper-wrapper"),
            l = document.querySelector(".lista-favoritos");
        r.forEach((e, t) => {
            const o = document.createElement("div"),
                r = document.createElement("figure"),
                n = document.createElement("img");
            n.id = "product_image_" + t, n.src = e.getAttribute("data-mediumimg"), n.alt = e.alt, n.setAttribute("large-image", e.getAttribute("data-largeimg")), o.classList.add("swiper-slide"), !t && o.classList.add("active"), r.append(n), o.append(r), o.addEventListener("click", (function(e) {
                e.preventDefault();
                const t = c.querySelector("img"),
                    o = c.querySelector("a.simple-lightbox");
                t.src = n.getAttribute("large-image"), t.alt = n.alt, o.href = n.getAttribute("large-image");
                const r = i.querySelector(".active");
                r && r.classList.remove("active"), this.classList.add("active")
            })), i.append(o)
        });
        const s = document.createElement("a"),
            d = document.createElement("figure"),
            u = document.createElement("img");
        r.length > 0 ? (u.src = r[0].getAttribute("data-largeimg"), u.alt = r[0].alt, s.href = r[0].getAttribute("data-largeimg")) : u.src = "https://cdn.awsli.com.br/production/static/img/produto-sem-imagem.gif", s.classList.add("simple-lightbox"), d.append(u), s.append(d), c.append(s);
        var t = c.querySelector(".simple-lightbox");
        t && new SimpleLightbox(t, {}), new Swiper(a.querySelector(".swiper"), {
            loop: !1,
            allowTouchMove: !1,
            slidesPerView: 6,
            spaceBetween: 15,
            direction: "vertical",
            navigation: {
                nextEl: a.querySelector(".swiper-button-next"),
                prevEl: a.querySelector(".swiper-button-prev")
            }
        });
        const p = o.closest(".span7");
        p.innerHTML = "", p.style.height = "auto", p.append(n);
        document.querySelector(".favorite-conteiner"), document.querySelector(".cover");
        const m = document.querySelector("#add-to-wishlist");
        m && l && (m.href = l.href, n.after(m))
    }
    window.addEventListener("load", () => {
        const e = document.querySelector(".info-principal-produto .trustvox-stars");
        if (e) {
            const t = document.querySelector(".info-principal-produto"),
                o = document.createElement("div"),
                r = document.querySelector(".ts-shelf-left"),
                n = document.querySelector(".ts-shelf-right");
            if (n) {
                n.style.display = "none";
                const e = document.createElement("span");
                e.classList.add("rating-from-to"), e.innerHTML = `(Nota ${r.innerHTML})`, n.before(e), r.remove()
            }
            o.classList.add("stars"), o.append(e), t.prepend(o)
        }
    });
    const o = document.querySelectorAll("a.botao-comprar");
    o.length && o.forEach(e => e.innerText = "Comprar");
    const r = document.querySelectorAll(".qtde-carrinho");
    r.length && r.forEach(e => {
        const t = document.createElement("span"),
            o = document.createElement("i");
        o.classList.add("fas", "fa-plus"), t.classList.add("add"), t.append(o);
        const r = document.createElement("span"),
            n = document.createElement("i");
        n.classList.add("fas", "fa-minus"), r.classList.add("sub"), r.append(n), r.addEventListener("click", () => e.value = parseInt(e.value) > 1 ? parseInt(e.value) - 1 : 1), t.addEventListener("click", () => e.value = parseInt(e.value) + 1), e.before(r), e.after(t)
    });
    const n = document.querySelectorAll(".parcelas-produto");
    n.length && n.forEach(e => {
        const t = document.querySelector(".principal > .cep");
        t.after(e);
        t.querySelector("button").innerText = "Calcular"
    });
    const a = document.querySelector("#descricao");
    if (a) {
        const e = document.createElement("span");
        e.classList.add("title"), e.innerHTML = "DescriÃ§Ã£o", a.prepend(e)
    }
    const c = document.querySelector("#comentarios");
    if (c) {
        const e = document.createElement("span");
        e.classList.add("title"), e.innerHTML = "ComentÃ¡rios";
        const t = document.createElement("span");
        t.classList.add("subtitle"), t.innerHTML = "dÃºvidas, sugestÃµes, crÃ­ticas ou elogios? deixe sua mensagem!", c.prepend(t), c.prepend(e)
    }
    const i = document.querySelector(".listagem");
    if (i) {
        const e = i.querySelectorAll(".listagem-item"),
            t = document.createElement("div"),
            o = document.querySelector("#model-product-box");
        t.classList.add("product-list"), i.innerHTML = "", e.forEach((e, r) => {
            const n = e.querySelector(".imagem-produto img"),
                a = e.querySelector(".nome-produto"),
                c = e.querySelector(".preco-a-partir"),
                i = e.querySelector(".preco-promocional"),
                l = e.querySelector(".preco-venda"),
                s = e.querySelector(".preco-parcela"),
                d = e.querySelector(".trustvox-stars"),
                u = e.querySelector(".produto-sobrepor"),
                p = o.cloneNode(!0);
            if (n) {
                const e = n.getAttribute("data-imagem-caminho");
                if (p.id = "related_product_box_" + r, p.querySelector("figure .cover").src = n.src, p.querySelector("figure img").alt = n.alt, e) p.querySelector("figure .hover").src = e;
                else {
                    const e = p.querySelector("figure .cover");
                    e && e.classList.remove("cover"), p.querySelector("figure .hover").remove()
                }
            }
            a && (p.querySelector(".product-title h1").innerHTML = a.innerHTML), c && (p.querySelector(".product-price h2").innerHTML = c.innerHTML, p.querySelector(".product-price h2").classList.add("price-from")), i && (p.querySelector(".product-price h2").innerHTML = i.innerHTML, l && (p.querySelector(".product-price p").innerHTML = l.innerHTML)), d && p.querySelector(".stars").append(d.cloneNode(!0)), s && (p.querySelector(".product-price small").innerHTML = s.innerHTML.replaceAll('<strong class="cor-secundaria">', "").replaceAll('<strong class="cor-secundaria ">', "").replaceAll("</strong>", "").replace("de", "de<br/>")), u && p.querySelectorAll("a").forEach(e => e.href = u), p && t.append(p)
        });
        const r = document.createElement("span");
        r.classList.add("title"), r.innerHTML = "pra ficar de olho";
        const n = document.createElement("span");
        n.classList.add("subtitle"), n.innerHTML = "confira nossas Ãºltimas novidades e tendÃªncias", i.append(r), i.append(n), i.append(t), o.remove()
    }
    var l = document.querySelectorAll("img[id*=product_image_]"),
        s = document.createElement("div");
    s.id = "images-carousel-mobile", document.querySelector("#images-carousel").after(s);
    var d = document.createElement("div");
    d.classList.add("swiper"), s.append(d);
    var u = document.createElement("div");
    u.classList.add("swiper-wrapper"), d.append(u);
    var p = document.createElement("div");
    p.classList.add("swiper-pagination"), d.append(p);
    for (var m = 0; m < l.length; m++) {
        var g = document.createElement("img");
        g.classList.add("swiper-slide"), g.src = l[m].src.replace("600x450", "1000x1000"), u.append(g)
    }
    let y = document.createElement("div");
    y.id = "lightbox-div", document.body.append(y), document.querySelectorAll("#images-carousel-mobile .swiper-wrapper img").forEach(e => {
        e.addEventListener("click", t => {
            y.classList.add("active");
            const o = document.createElement("img");
            o.src = e.src, y.firstChild && y.removeChild(y.firstChild), y.appendChild(o)
        })
    }), y.addEventListener("click", e => {
        y.classList.remove("active")
    }), new Swiper(d, {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        }
    });
    var v = document.createElement("div");
    v.classList.add("swiper");
    var f = document.createElement("div");
    f.classList.add("product-list-mobile"), document.querySelector(".aproveite-tambem").append(f), f.append(v);
    var h = document.createElement("div");
    h.classList.add("swiper-wrapper"), v.append(h);
    var q = document.createElement("div");
    q.classList.add("swiper-pagination"), v.append(q);
    var S = document.querySelectorAll(".aproveite-tambem .product-list article");
    for (m = 0; m < S.length; m++) {
        var b = document.createElement("div");
        b.classList.add("swiper-slide"), h.append(b), b.append(S[m])
    }
    new Swiper(v, {
            loop: !1,
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: v.querySelector(".swiper-button-next"),
                prevEl: v.querySelector(".swiper-button-prev")
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: !0
            }
        }),
        function() {
            let e = document.querySelector("[data-trustvox-product-code-js]");
            console.log(e);
            let t = e.getAttribute("data-trustvox-product-code-js");
            console.log(t);
            let o = document.getElementById("images-carousel-mobile");
            console.log(o);
            let r = document.createElement("img"),
                n = document.createElement("a");
            !async function() {
                let e = await async function() {
                    let e = [];
                    const t = await fetch("https://www.roupasdabe.com.br/conta/favorito/listar"),
                        o = await t.text();
                    let r = (new DOMParser).parseFromString(o, "text/html").querySelectorAll("a[href$='remover']");
                    for (let t = 0; t < r.length; t++) {
                        let o = r[t].getAttribute("href").match("[0-9]{9}");
                        e.push(o[0])
                    }
                    return e
                }(), a = n.cloneNode(!0), c = r.cloneNode(!0);
                for (let o = 0; o < e.length; o++) {
                    if (parseInt(t) === parseInt(e[o])) {
                        c.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-favoritoa@2x.png", c.className = "icone-favorito-2", a.href = `https://www.roupasdabe.com.br/conta/favorito/${t}/remover`;
                        break
                    }
                    c.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-favoritoa@2x.png", a.href = `https://www.roupasdabe.com.br/conta/favorito/${t}/adicionar`, c.className = "icone-favorito"
                }
                e.length || (c.src = "https://cdn.awsli.com.br/1952/1952461/arquivos/icon-favoritoa@2x.png", c.className = "icone-favorito"), a.className = "favorite-conteiner", a.append(c), o.append(a), n.remove(), r.remove()
            }()
        }()
})), document.addEventListener("DOMContentLoaded", (function() {
    document.querySelector(".pagina-cadastro") && (document.querySelector(".pagina-cadastro #formCadastroCompleto .cabecalho-interno h1.titulo").innerHTML = "Cadastre-se", insertGraphismImages())
})), document.addEventListener("DOMContentLoaded", (function() {
    if (!document.querySelector(".pagina-produto")) return;
    document.querySelector(".cover figure img");
    const e = document.querySelector(".cover figure");
    e.classList.add("zoom");
    const t = document.querySelector(".cover figure img").src;
    console.log(t), e.style.backgroundImage = `url(${t})`, e.setAttribute("onmousemove", "zoom(event)"), document.querySelectorAll(".thumbnails .swiper-slide").forEach(e => {
        e.addEventListener("click", () => {
            document.querySelector(".cover figure img");
            const e = document.querySelector(".cover figure");
            e.classList.add("zoom");
            const t = document.querySelector(".cover figure img").src;
            console.log(t), e.style.backgroundImage = `url(${t})`, e.setAttribute("onmousemove", "zoom(event)")
        })
    })
})), document.addEventListener("DOMContentLoaded", (function() {
    const e = document.querySelector("#full-banner-mobile"),
        t = document.querySelector("#stripe-banner");
    e && t && e.after(t)
}));

console.log('ihaaa');