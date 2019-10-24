$(function() {
      $.validator.addMethod('telnum', function(value, element, param) {
        var isValide;
        var res = value.substring(0, 2);
        console.log(res);
        if (res == "01" || res == "06" || res == "07" || res == "03" || res == "09") {
          isValide = true;
          return isValide;
        } else {
          isValide = false;
          return isValide;
        }
      }, 'Erreur votre numéro n\'est pas Français !');

      $.validator.addMethod('iban', function(value, element, param) {
        var isValide;
        var res = value.substring(0, 2);
        console.log(res);

        if ((res != "FR")) {
          isValide = false;
          return isValide;

        } else {
          isValide = true;
          return isValide;
        }
      }, 'Erreur votre IBAN n\'est pas correct !');

      $.validator.addMethod('numsoc', function(value, element, param) {
        var champ = value;
        var Civ = $("#civilite").val();
        var Dpt = $("#depart").val();


        var date = new Date($("#date").val());

        var years = date.getFullYear();
        var month = date.getMonth();

        var str = "";
        var ok = false;
        var years1 = years % 1000;
        var years2 = years % 10;
        years1 = (years1 - years2) / 10;
        var month1 = (month + 1) % 10;
        var month2 = ((month + 1) - month1) / 10;



        if (champ[0] == Civ) {
          if (champ[1] == years1) {
            if (champ[2] == years2) {
              if (champ[3] == month2) {
                if (champ[4] == month1) {
                  if (champ[5] == Dpt[0]) {
                    if (champ[6] == Dpt[1]) {

                      ok = true;



                    }

                  }

                }

              }



            }

          }


        }
        return ok;
        el.innerHTML = str;
        }, 'Erreur votre numéro n\'est pas Français !');

        $("form[name='formulaire']").validate({
          rules: {
            civilite: "required",
            firstname: "required",
            lastname: "required",
            date: "required",
            email: {
              required: true,
              email: true
            },
            numsoc: {
              required: true,
              number: true,
              minlength: 15,
              maxlength: 15,
              numsoc:true,
            },
            tel: {
              required: true,
              minlength: 10,
              maxlength: 10,
              telnum: true,
            },
            adr: "required",
            depart: "required",
            iban: {
              required: true,
              minlength: 14,
              maxlength: 34,
              iban: true,
            },
          },
          messages: {
            civilite: "Renseignez votre civilite",
            firstname: "Entrer votre nom",
            lastname: "Entrer votre prénom",
            email: "Entrer une adresse mail",
            date: "Entrer votre date de naissance",
            adr: "Entrer votre adresse",
            depart: "Entrer votre département",
          },
          submitHandler: function(form) {
            form.submit();
          }
        });
      });
