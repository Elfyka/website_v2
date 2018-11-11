<form class="col-sm-10 col-md-8 col-lg-8" method="post" action="ctrlGeneral/saveForm">

    <h1 class="contact__h1">CONTACT</h1>

    <div class="form-row">

        <div class="form-group col-md-6">
            <label for="inputName">First Name</label>
            <input type="text" class="form-control" id="inputName" placeholder="First Name" name="nom">
        </div>

        <div class="form-group col-md-6">
            <label for="inputLastName">Last Name</label>
            <input type="text" class="form-control" id="inputLastName" placeholder="Last Name" name="prenom">
        </div>

    </div>

    <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com" name="email">
    </div>
    <label class="my-1 mr-2" for="selectObject">Object</label>

    <?php echo "
         <select class=\"custom-select my-1 mr-sm-2\" id=\"selectObject\" name=\"sel1\">
            <option>-----------------------------</option>
            <option value=\"" . $object[0]['id_object'] . "\">" . $object[0]['object'] . "</option>
            <option value=\"" . $object[1]['id_object'] . "\">" . $object[1]['object'] . "</option>
            <option value=\"" . $object[2]['id_object'] . "\">" . $object[2]['object'] . "</option>
         </select>
     " ?>

    <div class="form-group">
        <label for="msg">Message</label>
        <textarea class="textArea form-control" id="msg" rows="4" placeholder="Type your message..."
                  name="message"></textarea>
    </div>

    <button type="submit" onclick="return false" id="btn1" class="btn btn-success contact__btn"><i class="contact__i fab fa-telegram-plane"></i>Submit
    </button>
    <button type="reset" id="btn2" class="btn btn-outline-danger contact__btnC">Reset</button>
</form>

<script src="js/contact.js"></script>