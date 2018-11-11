<form class="col-sm-10 col-md-8 col-lg-8">
    <h1 class="contact__h1">CONTACT</h1>

    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputName">First Name</label>
            <input type="text" class="form-control" id="inputName" placeholder="First Name">
        </div>
        <div class="form-group col-md-6">
            <label for="inputLastName">Last Name</label>
            <input type="text" class="form-control" id="inputLastName" placeholder="Last Name">
        </div>
    </div>
    <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com">
    </div>
    <label class="my-1 mr-2" for="selectObject">Preference</label>
    <select class="custom-select my-1 mr-sm-2" id="selectObject">
        <option selected>-------------------------------------</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <div class="form-group">
        <label for="msg">Message</label>
        <textarea class="textArea form-control" id="msg" rows="4" placeholder="Type your message..."></textarea>
    </div>

    <button type="submit" class="btn btn-success contact__btn"><i class="contact__i fab fa-telegram-plane"></i>Submit</button>
    <button type="reset" class="btn btn-outline-danger contact__btnC">Reset</button>
</form>