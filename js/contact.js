$(document).ready(function () {

    $("#btn1").click(function () {
        afficher(true);
    });

    $("#btn2").click(function () {
        rst();
    });

});


var objContact = {

    nom: "",
    prenom: "",
    email: "",
    object: "",
    message: "",

    setNom: function (n) {
        if (this.isAlpha(n) && n !== "") {
            this.nom = n;
        } else {
            this.nom = "";
        }

        return;
    },

    setPrenom: function (p) {
        if (this.isAlpha(p) && p !== "") {
            this.prenom = p;
        } else {
            this.prenom = "";
        }

        return;
    },

    setEmail: function (e) {
        if (this.isEmail(e) && e !== "") {
            this.email = e;
        } else {
            this.email = "";
        }

        return;
    },

    setObject: function (o) {
        var a = document.getElementById('selectObject');
        if (a.options[0].selected) {
            this.object = "";
        } else {
            this.object = o;
        }

        return;
    },

    setMessage: function (m) {
        if (m !== "") {
            this.message = m;
        } else {
            this.message = "";
        }

        return;
    },

    getNom: function (n) {
        return this.nom;
    },
    getPrenom: function (p) {
        return this.prenom;
    },

    getEmail: function (e) {
        return this.email;
    },

    getObject: function (o) {
        return this.object;
    },

    getMessage: function (m) {
        return this.message;
    },


    isAlpha: function (val) {
        var ok = false;
        if (val !== '') {
            var regex = /^[a-zA-Z\-]*$/;
            ok = regex.test(val);

        }
        return ok;
    },

    isEmail: function (val) {
        var ok = false;
        if (val !== '') {
            var regex = /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i;
            ok = regex.test(val);
        }
        return ok;
    }
};

function afficher() {

    var x = document.getElementById('selectObject');
    var s = document.getElementById('inputName').value;
    var t = document.getElementById('inputLastName').value;
    var v = document.getElementById('inputEmail').value;
    var w = document.getElementById('msg').value;
    var y = x.options[x.selectedIndex].value;
    var contact = Object.create(objContact);

    contact.setNom(s);
    var gn = contact.getNom();

    contact.setPrenom(t);
    var gp = contact.getPrenom();

    contact.setEmail(v);
    var ge = contact.getEmail();

    contact.setObject(y);
    var go = contact.getObject();

    contact.setMessage(w);
    var gm = contact.getMessage();


    if (gn !== '' && gp !== '' && ge !== '' && go !== '' && gm !== '') {

        swal(
            'Success !',
            'Form sent !',
            'success'
        );

        document.getElementById('btn1').removeAttribute("onclick");
        document.getElementById('btn1').click();

    }
    else {

        if (gn !== "") {
            var s0 = document.getElementById('inputName');
            s0.classList.add("is-valid");
        } else {
            var s0 = document.getElementById('inputName');
            s0.classList.add("is-invalid");
        }

        if (gp !== "") {
            var s1 = document.getElementById('inputLastName');
            s1.classList.add("is-valid");
        } else {
            var s1 = document.getElementById('inputLastName');
            s1.classList.add("is-invalid");
        }

        if (ge !== "") {
            var s2 = document.getElementById('inputEmail');
            s2.classList.add("is-valid");
        } else {
            var s2 = document.getElementById('inputEmail');
            s2.classList.add("is-invalid");
        }

        if (go !== "") {
            var s3 = document.getElementById('selectObject');
            s3.classList.add("is-valid");
        } else {
            var s3 = document.getElementById('selectObject');
            s3.classList.add("is-invalid");
        }

        if (gm !== "") {
            var s4 = document.getElementById('msg');
            s4.classList.add("is-valid");
        } else {
            var s4 = document.getElementById('msg');
            s4.classList.add("is-invalid");
        }

        swal(
            'Error !',
            'Please fill in all the fields correctly !',
            'error'
        );

    }
}

function rst() {

    var s0 = document.getElementById('inputName');
    s0.classList.remove("is-valid");
    s0.classList.remove("is-invalid");

    var s1 = document.getElementById('inputLastName');
    s1.classList.remove("is-valid");
    s1.classList.remove("is-invalid");

    var s2 = document.getElementById('inputEmail');
    s2.classList.remove("is-valid");
    s2.classList.remove("is-invalid");

    var s3 = document.getElementById('selectObject');
    s3.classList.remove("is-valid");
    s3.classList.remove("is-invalid");

    var s4 = document.getElementById('msg');
    s4.classList.remove("is-valid");
    s4.classList.remove("is-invalid");

}


